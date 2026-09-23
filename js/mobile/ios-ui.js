/**
 * =============================================================================
 * MUNDO COMPUTER WEB - CONFIGURACIÓN DE UI PARA IOS (APPLE)
 * Ubicación: js/mobile/ios-ui.js
 * 
 * Comportamientos específicos de iOS:
 * - Detección y respeto de safe-area-inset-top y safe-area-inset-bottom
 * - Efecto de presión elástica (spring touch feedback) sin retardos
 * - Barra de navegación con efecto Glassmorphism difuminado Cupertino
 * =============================================================================
 */

(function () {
    function initIOSFeatures() {
        if (!document.documentElement.classList.contains('platform-ios')) return;

        // Desactivar comportamientos de arrastre no deseados en iOS Safari
        document.body.classList.add('ios-touch-optimization');

        // Escucha de toques con efecto spring / scale de iOS
        const touchables = document.querySelectorAll('.product-card, button, .ios-interactive');
        touchables.forEach(el => {
            el.addEventListener('touchstart', () => {
                if (document.documentElement.classList.contains('platform-ios')) {
                    el.style.transform = 'scale(0.97)';
                    el.style.transition = 'transform 0.15s cubic-bezier(0, 0, 0.2, 1)';
                }
            }, { passive: true });

            el.addEventListener('touchend', () => {
                if (document.documentElement.classList.contains('platform-ios')) {
                    el.style.transform = 'scale(1)';
                }
            }, { passive: true });

            el.addEventListener('touchcancel', () => {
                if (document.documentElement.classList.contains('platform-ios')) {
                    el.style.transform = 'scale(1)';
                }
            }, { passive: true });
        });
    }

    window.addEventListener('platformChanged', (e) => {
        if (e.detail.platform === 'ios') {
            initIOSFeatures();
        }
    });

    document.addEventListener('DOMContentLoaded', initIOSFeatures);
})();
