/**
 * =============================================================================
 * MUNDO COMPUTER WEB - DETECTOR SILENCIOSO DE PLATAFORMA (PC / ANDROID / IOS)
 * Ubicación: js/mobile/platform-detector.js
 * 
 * Detecta de forma transparente y sin elementos visuales en pantalla:
 * 1. 🖥️ PC (Desktop) -> Activa clase .platform-pc en <html> y aplica css/pc/
 * 2. 🤖 Android       -> Activa clase .platform-android en <html> y aplica css/mobile/android-theme.css
 * 3. 🍎 iOS           -> Activa clase .platform-ios en <html> y aplica css/mobile/ios-theme.css
 * =============================================================================
 */

(function () {
    function detectNativePlatform() {
        const ua = navigator.userAgent || navigator.vendor || window.opera;
        if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
            return 'ios';
        }
        if (/android/i.test(ua)) {
            return 'android';
        }
        return 'pc';
    }

    function applyPlatform(platform) {
        const root = document.documentElement;
        root.classList.remove('platform-pc', 'platform-android', 'platform-ios');
        root.classList.add(`platform-${platform}`);

        // Actualizar etiqueta meta de tema según la plataforma
        let themeColorMeta = document.querySelector('meta[name="theme-color"]');
        if (!themeColorMeta) {
            themeColorMeta = document.createElement('meta');
            themeColorMeta.name = 'theme-color';
            document.head.appendChild(themeColorMeta);
        }
        themeColorMeta.content = platform === 'ios' ? '#000000' : (platform === 'android' ? '#080d16' : '#080808');

        // Notificar evento para que otros scripts de UI reaccionen
        window.dispatchEvent(new CustomEvent('platformChanged', { detail: { platform } }));
    }

    // Aplicar de inmediato para evitar cualquier salto visual
    const activePlatform = detectNativePlatform();
    applyPlatform(activePlatform);

    window.PlatformManager = {
        getPlatform: () => detectNativePlatform(),
        applyPlatform: applyPlatform
    };

    // 📡 Efecto interactivo: Resplandor en degradé azul y vibración táctil en el footer para Android e iOS
    function initFooterGlowEffect() {
        const footer = document.querySelector('footer');
        if (!footer || footer.dataset.glowInitialized) return;
        footer.dataset.glowInitialized = 'true';

        footer.addEventListener('pointerdown', function (e) {
            const isMobile = window.innerWidth <= 768 ||
                document.documentElement.classList.contains('platform-android') ||
                document.documentElement.classList.contains('platform-ios') ||
                e.pointerType === 'touch';

            if (!isMobile) return;

            const rect = footer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const pulse = document.createElement('div');
            pulse.className = 'footer-radar-pulse';
            pulse.style.left = `${x}px`;
            pulse.style.top = `${y}px`;

            const bloom = document.createElement('span');
            bloom.className = 'footer-glow-bloom';

            pulse.appendChild(bloom);
            footer.appendChild(pulse);

            footer.classList.remove('footer-vibrating');
            void footer.offsetWidth; // Forzar reflow
            footer.classList.add('footer-vibrating');

            if (navigator.vibrate) {
                try {
                    navigator.vibrate([15, 25, 20]);
                } catch (_) { }
            }

            setTimeout(() => {
                pulse.remove();
            }, 850);
        }, { passive: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFooterGlowEffect);
    } else {
        initFooterGlowEffect();
    }
})();
