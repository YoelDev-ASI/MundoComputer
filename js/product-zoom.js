/**
 * ==========================================================================
 * 🔍 COMPONENTE VANILLA JAVASCRIPT: PRODUCT IMAGE ZOOM
 * Archivo: js/product-zoom.js
 * 
 * Funcionalidad:
 * 1. Botón con icono de lupa para activar / desactivar el modo zoom en PC.
 * 2. Al dar clic en el botón de la lupa, la imagen se amplía inmediatamente (zoom activo).
 * 3. Al mover el cursor sobre el marco, la magnificación sigue suavemente el puntero del mouse.
 * 4. Al volver a hacer clic en la lupa, se desactiva y regresa a estado normal.
 * 5. En Android e iOS, el botón se oculta por CSS y no interfiere con el scroll táctil.
 * ==========================================================================
 */

class ProductZoom {
    constructor(options = {}) {
        this.frameSelector = options.frame || '#product-zoom-frame';
        this.imgSelector = options.img || '#product-zoom-img';
        this.btnSelector = options.btn || '#btn-toggle-zoom';
        this.badgeSelector = options.badge || '#zoom-status-badge';
        this.zoomLevel = options.zoomLevel || 1.32;

        this.frame = null;
        this.img = null;
        this.btn = null;
        this.badge = null;
        this.isActive = false;

        // Binds para listeners
        this._onToggle = this.toggle.bind(this);
        this._onMouseMove = this._handleMouseMove.bind(this);
        this._onMouseLeave = this._handleMouseLeave.bind(this);

        this.init();
    }

    /**
     * Inicializa los elementos del DOM y vincula los eventos
     */
    init() {
        this.frame = typeof this.frameSelector === 'string' ? document.querySelector(this.frameSelector) : this.frameSelector;
        this.img = typeof this.imgSelector === 'string' ? document.querySelector(this.imgSelector) : this.imgSelector;
        this.btn = typeof this.btnSelector === 'string' ? document.querySelector(this.btnSelector) : this.btnSelector;
        this.badge = typeof this.badgeSelector === 'string' ? document.querySelector(this.badgeSelector) : this.badgeSelector;

        if (!this.frame || !this.img) {
            // Reintento rápido por si Alpine.js o la carga del DOM toma un micro-tick adicional
            setTimeout(() => {
                this.frame = typeof this.frameSelector === 'string' ? document.querySelector(this.frameSelector) : this.frameSelector;
                this.img = typeof this.imgSelector === 'string' ? document.querySelector(this.imgSelector) : this.imgSelector;
                this.btn = typeof this.btnSelector === 'string' ? document.querySelector(this.btnSelector) : this.btnSelector;
                if (this.frame && this.img) {
                    this._bindEvents();
                }
            }, 80);
            return;
        }

        this._bindEvents();
    }

    /**
     * Vincula los listeners de eventos para PC
     */
    _bindEvents() {
        if (!this.frame || !this.img) return;

        // Evento en el botón de la lupa (PC)
        if (this.btn) {
            this.btn.removeEventListener('click', this._onToggle);
            this.btn.addEventListener('click', this._onToggle);
        }

        // Movimiento del cursor sobre el marco (PC)
        this.frame.removeEventListener('mousemove', this._onMouseMove);
        this.frame.removeEventListener('mouseleave', this._onMouseLeave);
        this.frame.addEventListener('mousemove', this._onMouseMove);
        this.frame.addEventListener('mouseleave', this._onMouseLeave);
    }

    /**
     * Alterna el modo zoom activo / inactivo al hacer clic en la lupa
     */
    toggle(e) {
        if (e) {
            if (e.preventDefault) e.preventDefault();
            if (e.stopPropagation) e.stopPropagation();
        }
        this.isActive = !this.isActive;

        if (this.isActive) {
            this.activate();
        } else {
            this.deactivate();
        }
    }

    /**
     * Activa el modo de lupa y amplía la imagen de inmediato
     */
    activate() {
        this.isActive = true;

        if (this.frame) {
            this.frame.classList.add('zoom-enabled');
        }

        if (this.btn) {
            this.btn.classList.add('is-active');
            const label = this.btn.querySelector('.zoom-btn-label');
            if (label) label.textContent = 'Zoom Activo';
            this.btn.setAttribute('title', 'Desactivar lupa de acercamiento');
            this.btn.setAttribute('aria-pressed', 'true');
        }

        if (this.badge) {
            this.badge.style.display = 'none';
        }

        // Respuesta visual instantánea al dar clic en la lupa
        if (this.img) {
            this.img.style.transformOrigin = '50% 50%';
            this.img.style.transform = `scale(${this.zoomLevel})`;
        }
    }

    /**
     * Desactiva el modo de lupa y restaura la imagen
     */
    deactivate() {
        this.isActive = false;

        if (this.frame) {
            this.frame.classList.remove('zoom-enabled');
        }

        if (this.btn) {
            this.btn.classList.remove('is-active');
            const label = this.btn.querySelector('.zoom-btn-label');
            if (label) label.textContent = 'Lupa';
            this.btn.setAttribute('title', 'Activar lupa de acercamiento');
            this.btn.setAttribute('aria-pressed', 'false');
        }

        // Resetear la imagen a tamaño natural
        this._resetZoom();
    }

    /**
     * Maneja el movimiento del mouse sobre la imagen (solo en PC cuando está activo)
     */
    _handleMouseMove(e) {
        if (!this.isActive || !this.img || !this.frame) return;

        const rect = this.frame.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        // Limitar dentro del rango 0% a 100%
        const clampedX = Math.max(0, Math.min(100, x));
        const clampedY = Math.max(0, Math.min(100, y));

        this.img.style.transformOrigin = `${clampedX}% ${clampedY}%`;
        this.img.style.transform = `scale(${this.zoomLevel})`;
    }

    /**
     * Cuando el cursor sale del marco con el zoom activo
     */
    _handleMouseLeave() {
        if (!this.isActive || !this.img) return;
        this.img.style.transformOrigin = '50% 50%';
        this.img.style.transform = `scale(${this.zoomLevel})`;
    }

    /**
     * Devuelve la imagen a escala 1 y centro
     */
    _resetZoom() {
        if (!this.img) return;
        this.img.style.transform = 'scale(1)';
        this.img.style.transformOrigin = 'center center';
    }

    /**
     * Destruye los listeners
     */
    destroy() {
        this.deactivate();
        if (this.btn) this.btn.removeEventListener('click', this._onToggle);
        if (this.frame) {
            this.frame.removeEventListener('mousemove', this._onMouseMove);
            this.frame.removeEventListener('mouseleave', this._onMouseLeave);
        }
    }
}

// Exponer en window global
window.ProductZoom = ProductZoom;

// Función de inicialización rápida
window.initProductZoom = function (options) {
    return new ProductZoom(options);
};
