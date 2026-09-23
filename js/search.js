/**
 * =============================================================================
 * MUNDO COMPUTER WEB - BUSCADOR SUPERIOR PROFESIONAL EN TIEMPO REAL
 * Búsqueda instantánea con dropdown predictivo y redirección a páginas dedicadas
 * =============================================================================
 */

function initGlobalSearch() {
    const searchInputs = document.querySelectorAll('.header-search-input');
    const categorySelects = document.querySelectorAll('.header-search-category');

    searchInputs.forEach(input => {
        const wrapper = input.closest('.header-search-wrapper');
        if (!wrapper) return;

        let dropdown = wrapper.querySelector('.header-search-dropdown');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'header-search-dropdown hidden absolute top-full left-0 right-0 mt-2 bg-gamer-carbon/95 backdrop-blur-xl border border-gamer-gris/90 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-96 overflow-y-auto';
            wrapper.appendChild(dropdown);
        }

        const handleSearch = (e) => {
            const query = input.value.trim().toLowerCase();
            const categorySelect = wrapper.querySelector('.header-search-category');
            const selectedCat = categorySelect ? categorySelect.value : 'all';

            if (query.length < 2) {
                dropdown.classList.add('hidden');
                dropdown.innerHTML = '';
                return;
            }

            const products = window.PRODUCTS || [];
            let filtered = products.filter(p => {
                const matchesQuery = p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    (p.brand && p.brand.toLowerCase().includes(query)) ||
                    (window.CATEGORIES[p.category] && window.CATEGORIES[p.category].toLowerCase().includes(query));

                if (selectedCat !== 'all') {
                    return matchesQuery && p.category === selectedCat;
                }
                return matchesQuery;
            });

            if (filtered.length === 0) {
                dropdown.innerHTML = `
                    <div class="p-6 text-center">
                        <p class="text-xs text-gamer-plata mb-2">No se encontraron productos para "<span class="text-gamer-blanco font-semibold">${input.value}</span>"</p>
                        <a href="categoria.html" class="inline-block text-[11px] text-gamer-cyan hover:underline font-bold uppercase tracking-wider">Ver catálogo completo</a>
                    </div>
                `;
                dropdown.classList.remove('hidden');
                return;
            }

            let html = `
                <div class="p-3 border-b border-gamer-gris/50 flex items-center justify-between text-[11px] text-gamer-plata font-semibold">
                    <span>${filtered.length} producto${filtered.length > 1 ? 's' : ''} encontrado${filtered.length > 1 ? 's' : ''}</span>
                    <a href="categoria.html?search=${encodeURIComponent(query)}${selectedCat !== 'all' ? '&cat=' + selectedCat : ''}" class="text-gamer-cyan hover:underline">Ver todos &rarr;</a>
                </div>
                <div class="divide-y divide-gamer-gris/30">
            `;

            filtered.slice(0, 5).forEach(prod => {
                const priceFormatted = window.formatPrice ? window.formatPrice(prod.price) : `Bs. ${prod.price}`;
                const catName = (window.CATEGORIES && window.CATEGORIES[prod.category]) || prod.category;
                html += `
                    <a href="producto.html?slug=${prod.slug}" class="flex items-center gap-3 p-3 hover:bg-gamer-gris/50 transition-colors group">
                        <img src="${prod.image_url}" alt="${prod.name}" class="w-12 h-12 object-cover rounded-xl border border-gamer-gris/70 flex-shrink-0 bg-gamer-negro">
                        <div class="flex-grow min-w-0">
                            <span class="text-[9px] uppercase tracking-wider font-extrabold text-gamer-cyan block truncate">${prod.brand || catName}</span>
                            <h4 class="text-xs sm:text-sm font-semibold text-gamer-blanco group-hover:text-gamer-cyan transition-colors truncate">${prod.name}</h4>
                            <div class="flex items-baseline gap-2 mt-0.5">
                                <span class="text-xs font-black text-gamer-blanco">${priceFormatted}</span>
                                ${prod.old_price ? `<span class="text-[10px] text-gamer-plata line-through">${window.formatPrice(prod.old_price)}</span>` : ''}
                            </div>
                        </div>
                        <div class="text-gamer-plata group-hover:text-gamer-cyan p-2 flex-shrink-0">
                            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                            </svg>
                        </div>
                    </a>
                `;
            });

            html += `</div>`;
            dropdown.innerHTML = html;
            dropdown.classList.remove('hidden');
        };

        input.addEventListener('input', handleSearch);
        input.addEventListener('focus', handleSearch);

        // Envío del formulario de búsqueda (Enter o clic en botón)
        const form = input.closest('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const q = input.value.trim();
                const categorySelect = wrapper.querySelector('.header-search-category');
                const selectedCat = categorySelect ? categorySelect.value : 'all';
                let targetUrl = 'categoria.html';
                const params = [];
                if (selectedCat !== 'all') params.push(`cat=${encodeURIComponent(selectedCat)}`);
                if (q) params.push(`search=${encodeURIComponent(q)}`);
                if (params.length > 0) targetUrl += `?${params.join('&')}`;
                window.location.href = targetUrl;
            });
        }
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-search-wrapper')) {
            document.querySelectorAll('.header-search-dropdown').forEach(d => d.classList.add('hidden'));
        }
    });

    // Atajo de teclado global: Ctrl + K o / para enfocar el buscador
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA')) {
            e.preventDefault();
            const firstSearch = document.querySelector('.header-search-input');
            if (firstSearch) {
                firstSearch.focus();
                firstSearch.select();
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initGlobalSearch);
