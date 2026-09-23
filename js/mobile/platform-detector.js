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
})();
