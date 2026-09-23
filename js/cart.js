/**
 * =============================================================================
 * MUNDO COMPUTER WEB - GESTOR DE CARRITO DE COMPRAS INTERACTIVO
 * Persistencia en LocalStorage y checkout directo a WhatsApp
 * =============================================================================
 */

class ShoppingCart {
    constructor() {
        this.storageKey = 'mundo_computer_cart_v1';
        this.items = this.loadCart();
        this.listeners = [];
    }

    loadCart() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error al cargar carrito:', e);
            return [];
        }
    }

    saveCart() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.items));
            this.notify();
        } catch (e) {
            console.error('Error al guardar carrito:', e);
        }
    }

    addItem(product, quantity = 1, selectedColor = null) {
        const colorName = selectedColor || (product.colors && product.colors.length > 0 ? product.colors[0].name : null);
        const existingIndex = this.items.findIndex(
            item => item.id === product.id && item.color === colorName
        );

        if (existingIndex > -1) {
            this.items[existingIndex].quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                slug: product.slug,
                price: Number(product.price),
                image_url: product.image_url,
                color: colorName,
                quantity: quantity
            });
        }

        this.saveCart();
        this.showNotification(`¡${product.name} añadido al carrito!`);
    }

    removeItem(id, color = null) {
        this.items = this.items.filter(
            item => !(item.id === id && item.color === color)
        );
        this.saveCart();
    }

    updateQuantity(id, color, delta) {
        const item = this.items.find(i => i.id === id && i.color === color);
        if (!item) return;

        item.quantity += delta;
        if (item.quantity <= 0) {
            this.removeItem(id, color);
        } else {
            this.saveCart();
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
    }

    getTotalCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }

    notify() {
        this.listeners.forEach(cb => cb(this.items, this.getTotalCount(), this.getTotalPrice()));
        this.updateBadges();
    }

    updateBadges() {
        const count = this.getTotalCount();
        const badges = document.querySelectorAll('.cart-count-badge');
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    showNotification(msg) {
        let toast = document.getElementById('mc-cart-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'mc-cart-toast';
            toast.className = 'fixed bottom-6 right-6 z-50 bg-gamer-carbon border border-gamer-cyan text-gamer-blanco px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300 pointer-events-none';
            toast.innerHTML = `
                <div class="w-8 h-8 rounded-xl bg-gamer-cyan/20 text-gamer-cyan flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>
                <span id="mc-cart-toast-text" class="text-xs sm:text-sm font-semibold"></span>
            `;
            document.body.appendChild(toast);
        }

        const textEl = document.getElementById('mc-cart-toast-text');
        if (textEl) textEl.textContent = msg;

        toast.classList.remove('translate-y-20', 'opacity-0');
        toast.classList.add('translate-y-0', 'opacity-100');

        clearTimeout(this.toastTimeout);
        this.toastTimeout = setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
            toast.classList.remove('translate-y-0', 'opacity-100');
        }, 3000);
    }

    getWhatsAppCheckoutUrl() {
        if (this.items.length === 0) return '#';

        const phone = (window.SHOP_CONFIG && window.SHOP_CONFIG.whatsappPhone) || '59167735846';
        let text = `Hola, Mundo Computer \u{1F44B}\n\nQuisiera realizar el pedido de los siguientes productos desde la tienda web:\n\n`;

        this.items.forEach((item, index) => {
            const colorStr = item.color ? ` (Color: ${item.color})` : '';
            const subtotal = item.price * item.quantity;
            text += `${index + 1}. *${item.name}*${colorStr}\n   Cantidad: ${item.quantity} | Unitario: Bs. ${item.price.toLocaleString('es-BO')} | Subtotal: Bs. ${subtotal.toLocaleString('es-BO')}\n`;
        });

        text += `\n*TOTAL DEL PEDIDO: Bs. ${this.getTotalPrice().toLocaleString('es-BO')}*\n`;
        text += `\n*Ciudad / Departamento para el envío:* [Escribe tu ciudad aquí]\n`;
        text += `\n¿Tienen disponible para coordinar el pago y el despacho? Muchas gracias.`;

        return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    }
}

// Inicializar globalmente
window.MundoCart = new ShoppingCart();
document.addEventListener('DOMContentLoaded', () => {
    window.MundoCart.updateBadges();
});
