/**
 * =============================================================================
 * MUNDO COMPUTER WEB - CONFIGURACIÓN DE UI PARA ANDROID
 * Ubicación: js/mobile/android-ui.js
 * 
 * Comportamientos específicos de Android:
 * - Efecto Ripple (onda) Material Design al presionar botones y tarjetas
 * - Navegación estilo Top App Bar y Bottom Navigation Bar
 * - Haptic feedback mediante Navigator.vibrate (si está disponible)
 * =============================================================================
 */

(function () {
    function initAndroidFeatures() {
        if (!document.documentElement.classList.contains('platform-android')) return;

        // Efecto Ripple táctil Material 3 (excluyendo tarjetas de producto)
        document.addEventListener('pointerdown', (e) => {
            if (!document.documentElement.classList.contains('platform-android')) return;
            
            // Los productos nunca tienen efectos ni vibración
            if (e.target.closest('.pc-product-card, .product-card, .pc-catalog-grid')) return;

            const target = e.target.closest('.android-ripple, button, a');
            if (!target) return;

            const rect = target.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.className = 'android-ripple-effect';

            target.style.position = target.style.position || 'relative';
            target.style.overflow = 'hidden';
            target.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }

    window.addEventListener('platformChanged', (e) => {
        if (e.detail.platform === 'android') {
            initAndroidFeatures();
        }
    });

    document.addEventListener('DOMContentLoaded', initAndroidFeatures);
})();
