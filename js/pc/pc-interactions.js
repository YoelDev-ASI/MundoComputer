/**
 * =============================================================================
 * MUNDO COMPUTER WEB - INTERACCIONES Y COMPORTAMIENTO PARA PC (DESKTOP)
 * Ubicación: js/pc/pc-interactions.js
 * 
 * Configuración exclusiva para entorno de Computadora:
 * - Mega-menú y navegación secundaria con indicador deslizante
 * - Atajos de teclado para streamers y power users
 * - Zoom dinámico al pasar el cursor sobre productos
 * - Control de apertura del panel lateral de carrito
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar indicador de navegación activa en el submenú de PC
    const navLinks = document.querySelectorAll('.pc-subnav-link');
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        // Comprobar coincidencia exacta o por parámetro de categoría
        const isCurrent = (currentPath.endsWith(href) && !currentSearch) ||
            (href.includes('?') && currentSearch.includes(href.split('?')[1]));

        if (isCurrent) {
            link.classList.add('pc-nav-active');
        }
    });

    // Atajo de teclado: Tecla Escape para cerrar dropdowns y modales
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.header-search-dropdown').forEach(d => d.classList.add('hidden'));
        }
    });
});
