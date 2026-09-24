/**
 * =============================================================================
 * MUNDO COMPUTER WEB - CONTROLADOR DE MENÚ LATERAL Y HEADER MULTIPLATAFORMA
 * Archivo: js/mobile/mobile-drawer.js
 * 
 * Funcionalidades:
 * - Apertura y cierre suave del menú lateral (Drawer) desde las 3 barras
 * - Acordeón con rotación de flecha para "Ver Catálogo" y sus subcategorías
 * - Barra de búsqueda desplegable en móviles
 * - Interacción con el botón de carrito multiplataforma (Android / iOS / PC)
 * =============================================================================
 */

(function () {
    'use strict';

    function initHeaderAndDrawer() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-drawer-btn');
        const drawer = document.getElementById('mobile-drawer');
        const backdrop = document.getElementById('drawer-backdrop');
        const drawerPanel = document.getElementById('drawer-panel');
        const catalogToggle = document.getElementById('catalog-accordion-toggle');
        const catalogSubmenu = document.getElementById('catalog-submenu');
        const catalogArrow = document.getElementById('catalog-accordion-arrow');
        const searchToggle = document.getElementById('mobile-search-toggle');
        const mobileSearchBar = document.getElementById('mobile-search-bar');
        const cartBtns = document.querySelectorAll('.header-cart-btn, #header-cart-btn');

        // Abrir Menú Lateral
        function openDrawer() {
            if (!drawer) return;
            drawer.classList.remove('pointer-events-none');
            drawer.classList.remove('invisible');
            drawer.setAttribute('aria-hidden', 'false');

            if (backdrop) {
                backdrop.classList.remove('opacity-0');
                backdrop.classList.add('opacity-100');
            }

            if (drawerPanel) {
                drawerPanel.classList.remove('-translate-x-full');
                drawerPanel.classList.add('translate-x-0');
            }

            document.body.style.overflow = 'hidden';
        }

        // Cerrar Menú Lateral
        function closeDrawer() {
            if (!drawer) return;
            drawer.setAttribute('aria-hidden', 'true');

            if (backdrop) {
                backdrop.classList.remove('opacity-100');
                backdrop.classList.add('opacity-0');
            }

            if (drawerPanel) {
                drawerPanel.classList.remove('translate-x-0');
                drawerPanel.classList.add('-translate-x-full');
            }

            setTimeout(() => {
                if (drawer.getAttribute('aria-hidden') === 'true') {
                    drawer.classList.add('pointer-events-none');
                    drawer.classList.add('invisible');
                }
            }, 300);

            document.body.style.overflow = '';
        }

        if (menuBtn) {
            menuBtn.addEventListener('click', openDrawer);
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeDrawer);
        }

        if (backdrop) {
            backdrop.addEventListener('click', closeDrawer);
        }

        // Cerrar con tecla Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawer && drawer.getAttribute('aria-hidden') === 'false') {
                closeDrawer();
            }
        });

        // Acordeón con flecha para "Ver Catálogo"
        if (catalogToggle && catalogSubmenu) {
            catalogToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isExpanded = catalogSubmenu.classList.contains('open');

                if (isExpanded) {
                    catalogSubmenu.classList.remove('open');
                    catalogSubmenu.style.maxHeight = '0px';
                    if (catalogArrow) {
                        catalogArrow.classList.remove('rotate-90');
                    }
                    catalogToggle.setAttribute('aria-expanded', 'false');
                } else {
                    catalogSubmenu.classList.add('open');
                    catalogSubmenu.style.maxHeight = catalogSubmenu.scrollHeight + 'px';
                    if (catalogArrow) {
                        catalogArrow.classList.add('rotate-90');
                    }
                    catalogToggle.setAttribute('aria-expanded', 'true');
                }
            });
        }

        // Desplegar barra de búsqueda en móvil
        if (searchToggle && mobileSearchBar) {
            searchToggle.addEventListener('click', () => {
                const isHidden = mobileSearchBar.classList.contains('hidden');
                if (isHidden) {
                    mobileSearchBar.classList.remove('hidden');
                    const input = mobileSearchBar.querySelector('input');
                    if (input) input.focus();
                } else {
                    mobileSearchBar.classList.add('hidden');
                }
            });
        }

    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeaderAndDrawer);
    } else {
        initHeaderAndDrawer();
    }
})();
