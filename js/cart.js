/**
 * =============================================================================
 * MUNDO COMPUTER WEB - GESTOR DE CARRITO DE COMPRAS INTERACTIVO (Multi-Producto)
 * Persistencia en LocalStorage, Ticket Digital (pedido.html) y Checkout WhatsApp
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
        if (!product) return;
        const colorName = selectedColor || (product.colors && product.colors.length > 0 ? product.colors[0].name : null);
        const existingIndex = this.items.findIndex(
            item => item.id === product.id && item.color === colorName
        );

        const qty = Math.max(1, parseInt(quantity, 10) || 1);

        if (existingIndex > -1) {
            this.items[existingIndex].quantity += qty;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                brand: product.brand || '',
                slug: product.slug,
                price: Number(product.price),
                image_url: product.image_url,
                color: colorName,
                quantity: qty
            });
        }

        this.saveCart();
        this.showNotification(`¡${product.name} añadido al carrito!`);
    }

    removeItem(id, color = null) {
        this.items = this.items.filter(
            item => !(item.id === id && (item.color || null) === (color || null))
        );
        this.saveCart();
    }

    updateQuantity(id, color, delta) {
        const item = this.items.find(
            i => i.id === id && (i.color || null) === (color || null)
        );
        if (!item) return;

        const newQty = item.quantity + delta;
        if (newQty < 1) {
            item.quantity = 1;
        } else {
            item.quantity = newQty;
        }
        this.saveCart();
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
        if (typeof callback === 'function') {
            this.listeners.push(callback);
        }
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
            toast.className = 'mc-cart-toast fixed bottom-20 left-4 right-4 mx-auto sm:bottom-6 sm:right-6 sm:left-auto sm:mx-0 z-50 bg-[#0c1322] border border-[#00F2FE]/40 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300 w-[calc(100%-32px)] max-w-[360px] sm:w-auto sm:max-w-sm';
            toast.innerHTML = `
                <div class="w-9 h-9 rounded-xl bg-[#00F2FE]/15 text-[#00F2FE] flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>
                <div class="flex-1 min-w-0">
                    <p id="mc-cart-toast-text" class="text-xs sm:text-sm font-semibold truncate"></p>
                    <a href="carrito.html" class="text-[11px] text-[#00F2FE] hover:underline font-bold inline-flex items-center gap-1 mt-0.5">
                        Ver Carrito &rarr;
                    </a>
                </div>
                <button type="button" onclick="this.parentElement.classList.add('translate-y-20','opacity-0')" class="text-gray-400 hover:text-white p-1 text-sm">✕</button>
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
        }, 3500);
    }

    /**
     * Genera un código de pedido único tipo MC-1042
     */
    generateOrderId() {
        const rand = Math.floor(1000 + Math.random() * 9000);
        return `MC-${rand}`;
    }

    /**
     * Empaqueta el pedido en formato serializado seguro para URL
     */
    serializeOrderPayload(orderId) {
        const payload = {
            id: orderId,
            date: new Date().toISOString(),
            total: this.getTotalPrice(),
            items: this.items.map(item => ({
                id: item.id,
                name: item.name,
                brand: item.brand,
                color: item.color,
                price: item.price,
                qty: item.quantity,
                img: item.image_url
            }))
        };
        try {
            localStorage.setItem('mundo_computer_last_order', JSON.stringify(payload));
        } catch (e) {}

        try {
            return encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(payload)))));
        } catch (e) {
            return encodeURIComponent(JSON.stringify(payload));
        }
    }

    /**
     * Algoritmo de Compresión de Catálogo:
     * Genera una cadena ultra-corta de IDs y cantidades (ej. "kb-02.1" o "kb-01.2.1_mouse-01.1")
     */
    getCompactOrderParam() {
        if (!this.items || this.items.length === 0) return '';
        const allProducts = window.PRODUCTS || [];
        const tokens = this.items.map(item => {
            let token = `${item.id}.${item.quantity}`;
            const prod = allProducts.find(p => p.id === item.id);
            if (prod && item.color) {
                const colors = prod.colors || [];
                const colorIdx = colors.findIndex(c => c.name === item.color);
                if (colorIdx > 0) {
                    token += `.${colorIdx}`;
                } else if (colorIdx === -1) {
                    token += `.${encodeURIComponent(item.color)}`;
                }
            }
            return token;
        });
        return tokens.join('_');
    }

    /**
     * Obtiene la URL completa del ticket digital (pedido.html) en formato ultra-corto
     */
    getDigitalOrderUrl(orderId) {
        // Guardamos en localStorage para respaldo local
        this.serializeOrderPayload(orderId);

        const compactParam = this.getCompactOrderParam();
        let baseUrl = 'https://mundocomputer.com/pedido.html';
        if (typeof window !== 'undefined' && window.location && window.location.protocol && window.location.protocol.startsWith('http')) {
            const origin = window.location.origin;
            const basePath = window.location.pathname.replace(/\/[^\/]*$/, '');
            baseUrl = `${origin}${basePath}/pedido.html`;
        }
        return `${baseUrl}?id=${orderId}&p=${compactParam}`;
    }

    /**
     * Genera el enlace de WhatsApp con el mensaje simple y limpio solicitado por el usuario:
     * Hola Mundo Computer 👋
     * Quisiera coordinar el pago de mi pedido:
     * 👉 *Ver Detalle de mi Pedido:* [URL]
     * 💰 *Total: Bs. [TOTAL]*
     */
    getWhatsAppSimpleCheckoutUrl(customOrderId = null) {
        if (this.items.length === 0) return '#';

        const phone = (window.SHOP_CONFIG && window.SHOP_CONFIG.whatsappPhone) || '59167735846';
        const orderId = customOrderId || this.generateOrderId();
        const orderUrl = this.getDigitalOrderUrl(orderId);
        const totalFormatted = this.getTotalPrice().toLocaleString('es-BO');

        const message = `Hola Mundo Computer 👋\nQuisiera coordinar el pago de mi pedido:\n👉 *Ver Detalle de mi Pedido:* ${orderUrl}\n💰 *Total: Bs. ${totalFormatted}*`;

        return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    }
}

// Inicializar globalmente
window.MundoCart = new ShoppingCart();

document.addEventListener('DOMContentLoaded', () => {
    window.MundoCart.updateBadges();

    // Redirección directa al carrito al pulsar el icono del carrito en el header
    document.querySelectorAll('#header-cart-btn, .mobile-cart-btn-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'carrito.html';
        });
    });
});
