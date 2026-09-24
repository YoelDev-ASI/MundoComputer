/**
 * =============================================================================
 * MUNDO COMPUTER WEB - BASE DE DATOS Y CONFIGURACIÓN GENERAL
 * Moneda oficial: Bolivianos (Bs.)
 * =============================================================================
 */

const SHOP_CONFIG = {
    whatsappPhone: '59167735846', // Teléfono de ventas Bolivia (+591 67735846)
    storeName: 'Mundo Computer Web',
    currency: 'Bs.',
    country: 'Bolivia',
    deliveryNotice: 'Envíos garantizados a todo el país: La Paz, Santa Cruz, Cochabamba y departamentos',
    social: {
        instagram: 'https://instagram.com/mundocomputer',
        tiktok: 'https://tiktok.com/@mundocomputer',
        facebook: 'https://facebook.com/mundocomputer'
    }
};

const CATEGORIES = {
    'novedades': 'Novedades',
    'keyboards': 'Teclados',
    'accessories': 'Accesorios Setup',
    'mice': 'Mouses',
    'headsets': 'Auriculares',
    'monitors': 'Monitores',
    'speakers': 'Parlantes',
    'microphones': 'Micrófonos'
};

const CATEGORY_NAMES = {
    'novedades': 'Lanzamientos y Nuevos Ingresos',
    'keyboards': 'Teclados Mecánicos y Magnéticos',
    'accessories': 'Accesorios & Decoración de Setup',
    'mice': 'Mouses Gaming de Alta Precisión',
    'headsets': 'Auriculares Inmersivos y Esports',
    'monitors': 'Monitores de Alto Rendimiento',
    'speakers': 'Sistemas de Audio Gaming',
    'microphones': 'Micrófonos para Streamers'
};

const PRODUCTS = [
    // ==========================================
    // TECLADOS (KEYBOARDS)
    // ==========================================
    {
        id: 1,
        name: 'Redragon Kumara K552 Magnético - Teclado Gamer',
        slug: 'redragon-kumara-k552-magnetico',
        description: 'Teclado mecánico y magnético TKL con switches intercambiables y retroiluminación RGB Chroma. Chasis reforzado con placa de aluminio, respuesta ultra rápida de 1ms ideal para shooters competitivos.',
        price: 750,
        old_price: 780,
        image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Redragon',
        is_offer: true,
        is_new: false,
        rating: 5.0,
        reviews_count: 14,
        stock: 12,
        is_featured: true,
        colors: [
            { name: 'Negro Clásico', hex: '#1a1a1a' },
            { name: 'Blanco Lunar', hex: '#f0f0f0' }
        ],
        specifications: {
            'Marca': 'Redragon',
            'Formato': 'Tenkeyless (TKL 80%)',
            'Switches': 'Magnéticos / Outemu Blue Hot-Swap',
            'Iluminación': 'RGB Chroma configurable',
            'Conexión': 'Cable desmontable USB-C trenzado',
            'Material': 'Aluminio anodizado y ABS de alta resistencia'
        }
    },
    {
        id: 2,
        name: 'Redragon Ucal Pro K673 - Teclado Inalámbrico',
        slug: 'redragon-ucal-pro-k673-inalambrico',
        description: 'Teclado inalámbrico con conectividad trimodo (Bluetooth 5.0, 2.4GHz Dongle y USB-C). Perfil 75% con perilla metálica multimedia, espumas silenciadoras y keycaps PBT duraderas.',
        price: 790,
        old_price: 950,
        image_url: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Redragon',
        is_offer: true,
        is_new: true,
        rating: 4.9,
        reviews_count: 35,
        stock: 8,
        is_featured: true,
        colors: [
            { name: 'Negro Mate', hex: '#111111' },
            { name: 'Azul Cósmico', hex: '#1e40af' },
            { name: 'Blanco Glaciar', hex: '#ffffff' }
        ],
        specifications: {
            'Marca': 'Redragon',
            'Distribución': '75% Compacto con Knob',
            'Switches': 'Lineales Red Lubricados de fábrica',
            'Conectividad': 'Tri-Modo: 2.4G + BT 5.0 + USB-C',
            'Batería': '3000 mAh recargable',
            'Estructura': 'Gasket Mount con silenciadores'
        }
    },
    {
        id: 3,
        name: 'Redragon Ucal MAX K673 - Teclado Magnético Pro',
        slug: 'redragon-ucal-max-k673',
        description: 'La versión tope de gama de la serie Ucal con sensores magnéticos Hall Effect para accionamiento rápido regulable (Rapid Trigger) desde 0.1 mm a 4.0 mm.',
        price: 830,
        old_price: 900,
        image_url: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Redragon',
        is_offer: true,
        is_new: false,
        rating: 4.8,
        reviews_count: 22,
        stock: 5,
        is_featured: false,
        colors: [
            { name: 'Negro RGB', hex: '#000000' },
            { name: 'Pastel Morado', hex: '#a78bfa' }
        ],
        specifications: {
            'Marca': 'Redragon',
            'Tecnología': 'Magnetic Hall Effect Rapid Trigger',
            'Accionamiento': 'Ajustable 0.1mm - 4.0mm',
            'Polling Rate': '8000 Hz Ultra-rápido',
            'Iluminación': 'RGB por tecla y lateral'
        }
    },
    {
        id: 4,
        name: 'Razer BlackWidow V4 Pro - Teclado Mecánico RGB',
        slug: 'razer-blackwidow-v4-pro',
        description: 'El teclado insigne para setups de alto nivel. Dial de control multifunción, 8 teclas macro dedicadas, reposamuñecas magnético de piel sintética con iluminación inferior y switches Razer Green.',
        price: 1590,
        old_price: 1750,
        image_url: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Razer',
        is_offer: true,
        is_new: false,
        rating: 5.0,
        reviews_count: 42,
        stock: 7,
        is_featured: true,
        colors: [
            { name: 'Negro Mate', hex: '#18181b' }
        ],
        specifications: {
            'Marca': 'Razer',
            'Switches': 'Razer Green mecánicos (Clicky)',
            'Iluminación': 'Razer Chroma RGB por tecla + subyacente',
            'Teclas': 'PBT Doble Inyección',
            'Tasa de sondeo': 'Hasta 8000 Hz'
        }
    },
    {
        id: 5,
        name: 'Keychron K2 Wireless V2 Hot-Swap',
        slug: 'keychron-k2-wireless-v2',
        description: 'Teclado mecánico inalámbrico premium del 75%. Diseño compacto minimalista, conmutadores Gateron Brown intercambiables en caliente y compatibilidad nativa con Mac y Windows.',
        price: 690,
        old_price: 780,
        image_url: 'https://images.unsplash.com/photo-1541140532154-b024d705b909?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Keychron',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 19,
        stock: 15,
        is_featured: false,
        colors: [
            { name: 'Gris Grafito', hex: '#374151' }
        ],
        specifications: {
            'Marca': 'Keychron',
            'Formato': '75% Compacto (84 teclas)',
            'Switches': 'Gateron Brown Táctiles',
            'Conexión': 'Bluetooth 5.1 & Cable USB-C',
            'Batería': '4000 mAh (hasta 240 hrs)'
        }
    },
    {
        id: 6,
        name: 'Logitech G Pro X TKL LIGHTSPEED',
        slug: 'logitech-g-pro-x-tkl-lightspeed',
        description: 'Diseñado en colaboración con los mejores atletas de esports del mundo. Conectividad inalámbrica LIGHTSPEED, teclas PBT de doble disparo y control de iluminación LIGHTSYNC RGB.',
        price: 1350,
        old_price: 1480,
        image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Logitech G',
        is_offer: true,
        is_new: false,
        rating: 5.0,
        reviews_count: 27,
        stock: 6,
        is_featured: false,
        colors: [
            { name: 'Negro Gamer', hex: '#111111' },
            { name: 'Blanco Puro', hex: '#f8fafc' },
            { name: 'Rosa Magenta', hex: '#ec4899' }
        ],
        specifications: {
            'Marca': 'Logitech G',
            'Conectividad': 'LIGHTSPEED, Bluetooth, USB-C',
            'Switches': 'GX Brown Táctiles',
            'Autonomía': 'Hasta 50 horas continuas',
            'Accesorios': 'Estuche rígido de transporte incluido'
        }
    },
    {
        id: 21,
        name: 'SteelSeries Apex Pro TKL - Teclado Magnético OmniPoint',
        slug: 'steelseries-apex-pro-tkl-omnipoint',
        description: 'El teclado más rápido del mundo con switches ajustables OmniPoint 2.0 magnéticos. Permite personalizar la distancia de actuación de 0.1 mm a 4.0 mm, pantalla inteligente OLED y chasis de aluminio aeronáutico.',
        price: 1680,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'SteelSeries',
        is_offer: false,
        is_new: false,
        rating: 5.0,
        reviews_count: 36,
        stock: 5,
        is_featured: false,
        colors: [
            { name: 'Negro Mate', hex: '#111111' }
        ],
        specifications: {
            'Marca': 'SteelSeries',
            'Formato': 'Tenkeyless (TKL 80%)',
            'Switches': 'OmniPoint 2.0 Magnéticos Hall Effect',
            'Pantalla': 'OLED Smart Display para perfiles y notificaciones',
            'Material': 'Aleación de aluminio Serie 5000'
        }
    },
    {
        id: 22,
        name: 'Razer BlackWidow V4 75% - Teclado Mecánico Hot-Swap',
        slug: 'razer-blackwidow-v4-75-percent',
        description: 'Teclado mecánico compacto con PCB hot-swap compatible con switches de 3 y 5 pines. Switches táctiles naranja de Razer, amortiguación interna de doble capa de espuma y tasa de sondeo de hasta 8000 Hz.',
        price: 1420,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Razer',
        is_offer: false,
        is_new: false,
        rating: 4.8,
        reviews_count: 18,
        stock: 5,
        is_featured: false,
        colors: [
            { name: 'Negro Clásico', hex: '#0f172a' },
            { name: 'Blanco Mercury', hex: '#f8fafc' }
        ],
        specifications: {
            'Marca': 'Razer',
            'Distribución': '75% Compacto',
            'Switches': 'Razer Orange Gen-3 Táctiles Hot-Swap',
            'Polling Rate': 'Hasta 8000 Hz HyperPolling',
            'Extras': 'Dial multifunción y 2 teclas multimedia'
        }
    },
    {
        id: 23,
        name: 'Redragon Horus K618 RGB Wireless Low Profile',
        slug: 'redragon-horus-k618-rgb-wireless',
        description: 'Teclado mecánico completo de perfil ultradelgado con switches lineales rojos low-profile, conexión trimodo (Bluetooth 5.0, 2.4GHz y USB-C), teclas macro dedicadas y rueda de control multimedia.',
        price: 520,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Redragon',
        is_offer: false,
        is_new: false,
        rating: 4.7,
        reviews_count: 39,
        stock: 15,
        is_featured: false,
        colors: [
            { name: 'Negro Carbón', hex: '#1e1e1e' },
            { name: 'Blanco Glaciar', hex: '#f3f4f6' }
        ],
        specifications: {
            'Marca': 'Redragon',
            'Formato': '100% Completo con Teclado Numérico',
            'Switches': 'Redragon Red Low Profile',
            'Conectividad': 'Trimodo (Bluetooth, Dongle 2.4GHz, Cable USB-C)',
            'Batería': 'Hasta 30 horas con RGB encendido'
        }
    },
    {
        id: 24,
        name: 'Corsair K70 RGB PRO - Teclado Mecánico de Aluminio',
        slug: 'corsair-k70-rgb-pro-mecanico',
        description: 'Estructura icónica de aluminio cepillado de grado aeronáutico, tecnología CORSAIR AXON de 8000 Hz, switches Cherry MX Red originales y reposamuñecas magnético suave al tacto.',
        price: 1290,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Corsair',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 44,
        stock: 8,
        is_featured: false,
        colors: [
            { name: 'Negro Anodizado', hex: '#121212' }
        ],
        specifications: {
            'Marca': 'Corsair',
            'Switches': 'Cherry MX Red mecánicos lineales',
            'Polling Rate': '8000 Hz con procesamiento AXON',
            'Chasis': 'Aluminio cepillado de precisión',
            'Accesorios': 'Reposamuñecas magnético desmontable'
        }
    },
    {
        id: 25,
        name: 'Keychron V1 QMK/VIA Custom Mechanical Keyboard',
        slug: 'keychron-v1-custom-mechanical',
        description: 'Teclado mecánico para entusiastas con distribución 75%, perilla codificadora programable, soporte completo para QMK/VIA, switches Keychron K Pro prelubricados y keycaps OSA PBT.',
        price: 720,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1541140532154-b024d705b909?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        brand: 'Keychron',
        is_offer: false,
        is_new: false,
        rating: 5.0,
        reviews_count: 28,
        stock: 6,
        is_featured: false,
        colors: [
            { name: 'Negro Translúcido', hex: '#18181b' },
            { name: 'Azul Escarchado', hex: '#1e3a8a' }
        ],
        specifications: {
            'Marca': 'Keychron',
            'Distribución': '75% con Knob programable',
            'Switches': 'Keychron K Pro Red (Hot-Swap 5 pines)',
            'Compatibilidad': 'Windows, Mac y Linux con switch de selector',
            'Software': 'Totalmente personalizable con QMK/VIA'
        }
    },

    // ==========================================
    // ACCESORIOS PARA SETUP (JUGUETES, DECORACIÓN, MOUSEPADS)
    // ==========================================
    {
        id: 7,
        name: 'Figura Coleccionable Mecha Titan RX-78 para Setup',
        slug: 'figura-mecha-titan-rx78-setup',
        description: 'Figura de colección articulada estilo Mecha anime de alta precisión. Acabados premium con detalles metálicos dorados y negros mate, ideal para decorar repisas, escritorios y torres gamer.',
        price: 180,
        old_price: 220,
        image_url: 'images/products/mecha_toy.jpg',
        category: 'accessories',
        brand: 'Mundo Colección',
        is_offer: true,
        is_new: true,
        rating: 5.0,
        reviews_count: 31,
        stock: 14,
        is_featured: true,
        colors: [
            { name: 'Dorado & Negro', hex: '#b45309' },
            { name: 'Blanco & Azul Mecha', hex: '#2563eb' }
        ],
        specifications: {
            'Tipo': 'Figura de Acción Articulada Decorativa',
            'Altura': '18 cm de alto',
            'Material': 'ABS reforzado y juntas metálicas',
            'Accesorios': 'Rifle de plasma, escudo y soporte acrílico'
        }
    },
    {
        id: 8,
        name: 'Soporte de Auriculares Corsair ST100 RGB con DAC 7.1',
        slug: 'soporte-auriculares-corsair-st100-rgb',
        description: 'Construcción duradera de aluminio aeronáutico. Incorpora iluminación RGB personalizable en 9 zonas dinámicas, sonido envolvente virtual 7.1 mediante jack 3.5mm y doble puerto USB 3.1 para cargar tus periféricos.',
        price: 390,
        old_price: 450,
        image_url: 'images/products/corsair_stand.jpg',
        category: 'accessories',
        brand: 'Corsair',
        is_offer: true,
        is_new: false,
        rating: 4.9,
        reviews_count: 18,
        stock: 9,
        is_featured: true,
        colors: [
            { name: 'Aluminio Negro Anodizado', hex: '#1f2937' }
        ],
        specifications: {
            'Marca': 'Corsair',
            'Material': 'Aluminio fundido',
            'Audio': 'DAC interno Sonido Envolvente 7.1',
            'Puertos': '2x USB 3.1 de carga rápida + Jack 3.5mm',
            'Iluminación': 'RGB dinámico en 9 zonas con iCUE'
        }
    },
    {
        id: 9,
        name: 'Barra de Luz LED para Monitor ScreenBar Gamer RGB',
        slug: 'barra-luz-led-monitor-screenbar-rgb',
        description: 'Lámpara de suspensión asimétrica para monitor con luz frontal anti-reflejo y retroiluminación ambiental RGB trasera. Reduce drásticamente la fatiga visual en sesiones nocturnas de juego y streaming.',
        price: 260,
        old_price: 310,
        image_url: 'images/products/screenbar_light.jpg',
        category: 'accessories',
        brand: 'Baseus / GamerTech',
        is_offer: true,
        is_new: true,
        rating: 4.8,
        reviews_count: 45,
        stock: 20,
        is_featured: true,
        colors: [
            { name: 'Negro Espacial', hex: '#0f172a' }
        ],
        specifications: {
            'Iluminación': 'Frontal Cálida/Fría (2700K - 6500K) + RGB trasero',
            'Control': 'Controlador inalámbrico rotatorio táctil',
            'Alimentación': 'USB Tipo C 5V (directo a la PC o monitor)',
            'Fijación': 'Contrapeso magnético adaptable a monitores planos y curvos'
        }
    },
    {
        id: 10,
        name: 'Mousepad Gamer XXL Topo Black 900x400x4mm',
        slug: 'mousepad-gamer-xxl-topo-black',
        description: 'Alfombrilla gigante para escritorio con textura speed-control y diseño topográfico minimalista. Bordes con costura de precisión antidesgaste y base de goma natural antideslizante impermeable.',
        price: 120,
        old_price: 150,
        image_url: 'https://images.unsplash.com/photo-1632292224971-0d45778bd364?w=800&auto=format&fit=crop&q=80',
        category: 'accessories',
        brand: 'Mundo Computer',
        is_offer: true,
        is_new: false,
        rating: 5.0,
        reviews_count: 64,
        stock: 30,
        is_featured: false,
        colors: [
            { name: 'Topográfico Negro & Blanco', hex: '#18181b' },
            { name: 'Topográfico Blanco & Gris', hex: '#e4e4e7' }
        ],
        specifications: {
            'Dimensiones': '900 mm x 400 mm x 4 mm (Extragrande)',
            'Superficie': 'Microfibra hidrofóbica de baja fricción',
            'Bordes': 'Costura triple anti-deshilachado',
            'Base': 'Caucho antideslizante con textura de agarre'
        }
    },
    {
        id: 11,
        name: 'Figura Pixel Art Divoom Ditoo Retro Altavoz con Pantalla',
        slug: 'figura-pixel-art-divoom-ditoo-retro',
        description: 'El elemento más viral para escritorios tech: una mini computadora retro con teclado mecánico interactivo y pantalla de píxeles programable. Muestra animaciones personalizadas, notificaciones y reloj.',
        price: 420,
        old_price: 490,
        image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
        category: 'accessories',
        brand: 'Divoom',
        is_offer: true,
        is_new: true,
        rating: 4.9,
        reviews_count: 29,
        stock: 8,
        is_featured: false,
        colors: [
            { name: 'Verde Menta Retro', hex: '#6ee7b7' },
            { name: 'Negro Cyber', hex: '#1c1917' },
            { name: 'Rosa Pastel', hex: '#f472b6' }
        ],
        specifications: {
            'Pantalla': 'Panel LED Pixel Art de 16x16 píxeles',
            'Audio': 'Altavoz DSP 360° de 10W integrado',
            'App': 'Compatible con Android e iOS para dibujar animaciones',
            'Batería': '3000 mAh recargable por USB-C'
        }
    },
    {
        id: 12,
        name: 'Bungee para Mouse Gamer Razer Mouse Bungee V3',
        slug: 'bungee-mouse-razer-v3',
        description: 'Elimina los enredos y la fricción del cable para que sientas tu mouse cableado como si fuera inalámbrico. Brazo elástico con resorte inoxidable y base ponderada antideslizante.',
        price: 130,
        old_price: 160,
        image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
        category: 'accessories',
        brand: 'Razer',
        is_offer: true,
        is_new: false,
        rating: 4.7,
        reviews_count: 15,
        stock: 18,
        is_featured: false,
        colors: [
            { name: 'Negro Clásico', hex: '#0a0a0a' }
        ],
        specifications: {
            'Marca': 'Razer',
            'Material': 'Base de acero sólido y brazo de resorte',
            'Compatibilidad': 'Cables paracord, trenzados y de goma estándar'
        }
    },
    {
        id: 26,
        name: 'Brazo Robótico Hidráulico para Monitor 17"-32" North Bayou F80',
        slug: 'brazo-monitor-hidraulico-nb-f80',
        description: 'Brazo articulado ergonómico con pistón de gas hidráulico para pantallas de hasta 32 pulgadas y 9 kg. Rotación completa de 360 grados, inclinación vertical, canaleta interna para cables y anclaje por prensa o perno.',
        price: 280,
        old_price: null,
        image_url: 'images/products/mecha_toy.jpg',
        category: 'accessories',
        brand: 'North Bayou',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 65,
        stock: 20,
        is_featured: false,
        colors: [
            { name: 'Negro Mate', hex: '#1e293b' },
            { name: 'Blanco Nieve', hex: '#f1f5f9' }
        ],
        specifications: {
            'Marca': 'North Bayou',
            'Capacidad': 'Monitores de 17" a 32" (2 kg a 9 kg)',
            'Estándar VESA': '75x75 mm y 100x100 mm',
            'Movimiento': 'Giro 360°, Inclinación +85° a -30°',
            'Instalación': 'Prensa de escritorio o pasacables'
        }
    },
    {
        id: 27,
        name: 'Mousepad Gamer XXL Extended 900x400mm Speed Control',
        slug: 'mousepad-gamer-xxl-extended-900x400',
        description: 'Alfombrilla gigante de escritorio de 90 x 40 cm con superficie de microfibra de baja fricción tratada térmicamente. Base de goma natural antideslizante de 4 mm de espesor y bordes cosidos reforzados anti-deshilachado.',
        price: 130,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
        category: 'accessories',
        brand: 'Mundo Computer',
        is_offer: false,
        is_new: false,
        rating: 4.8,
        reviews_count: 42,
        stock: 35,
        is_featured: false,
        colors: [
            { name: 'Cyberpunk Dark', hex: '#0f172a' },
            { name: 'Topographic Black', hex: '#18181b' },
            { name: 'Minimalist White', hex: '#f3f4f6' }
        ],
        specifications: {
            'Marca': 'Mundo Computer Setup',
            'Dimensiones': '900 x 400 x 4 mm',
            'Superficie': 'Microfibra impermeable Speed & Control',
            'Base': 'Caucho natural texturizado antideslizante',
            'Bordes': 'Costura perimetral doble de alta durabilidad'
        }
    },
    {
        id: 28,
        name: 'Soporte para Auriculares RGB con Hub USB y Carga Qi',
        slug: 'soporte-headset-rgb-hub-usb-qi',
        description: 'Base soporte para auriculares gamer con mástil de aluminio resistente, iluminación RGB dinámica de 10 modos táctiles, 2 puertos USB para periféricos y base de carga rápida inalámbrica Qi de 15W para smartphone.',
        price: 195,
        old_price: null,
        image_url: 'images/products/corsair_stand.jpg',
        category: 'accessories',
        brand: 'Mundo Computer',
        is_offer: false,
        is_new: false,
        rating: 4.8,
        reviews_count: 27,
        stock: 14,
        is_featured: false,
        colors: [
            { name: 'Negro Carbón', hex: '#121212' },
            { name: 'Blanco Setup', hex: '#f8fafc' }
        ],
        specifications: {
            'Marca': 'Mundo Computer Setup',
            'Carga Inalámbrica': 'Base Qi 15W Fast Charge integrada',
            'Hub USB': '2 puertos USB 2.0 para dongles o pendrives',
            'Iluminación': 'RGB dinámico con sensor táctil frontal',
            'Almohadilla': 'Goma suave para proteger la diadema'
        }
    },
    {
        id: 29,
        name: 'Cable Coiled para Teclado Mecánico Aviator GX12 USB-C',
        slug: 'cable-coiled-teclado-mecanico-aviator',
        description: 'Cable enrollado artesanal tipo resorte para teclados mecánicos con conector metálico de aviación GX12 desmontable de 4 pines. Doble funda de nylon trenzado PET y Paracord, libre de enredos y longitud de 1.8 metros.',
        price: 160,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
        category: 'accessories',
        brand: 'Custom Gear',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 19,
        stock: 12,
        is_featured: false,
        colors: [
            { name: 'Cyan Espacial', hex: '#00F2FE' },
            { name: 'Blanco Puro', hex: '#ffffff' },
            { name: 'Violeta Neón', hex: '#a855f7' }
        ],
        specifications: {
            'Marca': 'Custom Gear',
            'Conector': 'Aviador metálico desmontable GX12 de 4 pines',
            'Funda': 'Doble malla Paracord + PET Techflex',
            'Terminales': 'USB-C a USB-A bañado en oro',
            'Longitud': '1.8 metros total (bobina de 15 cm)'
        }
    },
    {
        id: 30,
        name: 'Barra de Luz LED RGB para Monitor ScreenBar con Control Remoto',
        slug: 'barra-luz-monitor-screenbar-rgb',
        description: 'Lámpara de monitor con diseño óptico asimétrico que ilumina tu espacio de trabajo sin producir reflejos en la pantalla. Luz frontal con temperatura de color ajustable y retroiluminación ambiental RGB con dial inalámbrico.',
        price: 260,
        old_price: null,
        image_url: 'images/products/screenbar_light.jpg',
        category: 'accessories',
        brand: 'Mundo Computer',
        is_offer: false,
        is_new: false,
        rating: 5.0,
        reviews_count: 36,
        stock: 18,
        is_featured: false,
        colors: [
            { name: 'Negro Espacial', hex: '#1e293b' }
        ],
        specifications: {
            'Marca': 'Mundo Computer Setup',
            'Óptica': 'Haz asimétrico anti-reflejo y anti-fatiga visual',
            'Control': 'Dial inalámbrico 2.4GHz para brillo y RGB',
            'Temperatura': 'Ajustable de 2700K (cálido) a 6500K (frío)',
            'Alimentación': 'Conexión USB-C a la PC o monitor'
        }
    },

    // ==========================================
    // NOVEDADES (LANZAMIENTOS RECIENTES)
    // ==========================================
    {
        id: 13,
        name: 'Logitech G Pro X Superlight 2 Dex - Mouse Inalámbrico',
        slug: 'logitech-g-pro-x-superlight-2-dex',
        description: 'El nuevo estándar en esports para agarre diestro. Pesa sólo 60 gramos, cuenta con el nuevo sensor HERO 2 y switches híbridos óptico-mecánicos LIGHTFORCE con tasa de sondeo de 8000 Hz.',
        price: 1150,
        old_price: 1290,
        image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
        category: 'novedades',
        brand: 'Logitech G',
        is_offer: true,
        is_new: true,
        rating: 5.0,
        reviews_count: 48,
        stock: 10,
        is_featured: true,
        colors: [
            { name: 'Negro Carbón', hex: '#171717' },
            { name: 'Blanco Nieve', hex: '#fafafa' },
            { name: 'Magenta Eléctrico', hex: '#e11d48' }
        ],
        specifications: {
            'Marca': 'Logitech G',
            'Peso': '60 gramos ultraligero',
            'Sensor': 'HERO 2 (hasta 44.000 DPI y 888 IPS)',
            'Tasa de respuesta': '8000 Hz inalámbrico',
            'Batería': 'Hasta 95 horas continuas de juego'
        }
    },
    {
        id: 14,
        name: 'Redragon Fizz K617 Rapid Trigger Magnético',
        slug: 'redragon-fizz-k617-rapid-trigger',
        description: 'La versión 2026 del teclado 60% más popular. Ahora con switches magnéticos y tecnología Rapid Trigger para una respuesta milimétrica instantánea sin punto de reinicio fijo.',
        price: 380,
        old_price: 440,
        image_url: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&auto=format&fit=crop&q=80',
        category: 'novedades',
        brand: 'Redragon',
        is_offer: true,
        is_new: true,
        rating: 4.9,
        reviews_count: 53,
        stock: 25,
        is_featured: true,
        colors: [
            { name: 'Gris & Blanco', hex: '#9ca3af' },
            { name: 'Rosa & Blanco', hex: '#f9a8d4' }
        ],
        specifications: {
            'Marca': 'Redragon',
            'Distribución': '60% Ultra compacto (61 teclas)',
            'Switches': 'Magnéticos Hall Effect con Rapid Trigger',
            'Iluminación': 'RGB Chroma personalizable por software'
        }
    },
    {
        id: 15,
        name: 'Monitor Gamer ASUS ROG Swift OLED 27" 240Hz 0.03ms',
        slug: 'monitor-asus-rog-swift-oled-27-240hz',
        description: 'Monitor gaming definitivo con panel OLED QHD (2560x1440). Tiempo de respuesta casi instantáneo de 0.03 ms, 240 Hz nativos, disipador de calor personalizado y 99% DCI-P3.',
        price: 5800,
        old_price: 6400,
        image_url: 'images/products/asus_oled_monitor.jpg',
        category: 'novedades',
        brand: 'ASUS ROG',
        is_offer: true,
        is_new: true,
        rating: 5.0,
        reviews_count: 12,
        stock: 3,
        is_featured: true,
        colors: [
            { name: 'Titanium Dark', hex: '#111827' }
        ],
        specifications: {
            'Marca': 'ASUS Republic of Gamers',
            'Panel': '26.5 pulgadas OLED QHD (2560x1440)',
            'Tasa de refresco': '240 Hz',
            'Tiempo de respuesta': '0.03 ms (GTG)',
            'Compatibilidad': 'G-Sync Compatible & FreeSync Premium Pro'
        }
    },

    // ==========================================
    // MOUSES
    // ==========================================
    {
        id: 16,
        name: 'Razer DeathAdder V3 Pro Inalámbrico Ultra-Light',
        slug: 'razer-deathadder-v3-pro',
        description: 'Con solo 63g de peso, su legendaria ergonomía ha sido perfeccionada con los mejores profesionales. Sensor Focus Pro 30K y switches ópticos Gen-3 de 90 millones de clics.',
        price: 980,
        old_price: 1100,
        image_url: 'https://images.unsplash.com/photo-1625842268584-8f329044703b?w=800&auto=format&fit=crop&q=80',
        category: 'mice',
        brand: 'Razer',
        is_offer: true,
        is_new: false,
        rating: 4.9,
        reviews_count: 38,
        stock: 15,
        is_featured: true,
        colors: [
            { name: 'Negro Pro', hex: '#171717' },
            { name: 'Blanco Mercury', hex: '#ffffff' }
        ],
        specifications: {
            'Marca': 'Razer',
            'Peso': '63 gramos',
            'Sensor': 'Focus Pro 30K Optical Sensor',
            'Batería': 'Hasta 90 horas continuas',
            'Conectividad': 'Razer HyperSpeed Wireless 2.4GHz'
        }
    },
    {
        id: 17,
        name: 'Logitech G502 X LIGHTSPEED RGB',
        slug: 'logitech-g502-x-lightspeed',
        description: 'La leyenda de Logitech G reinventada con interruptores híbridos óptico-mecánicos LIGHTFORCE, sensor HERO 25K y botón de cambio de DPI ajustable y reversible.',
        price: 920,
        old_price: 1050,
        image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
        category: 'mice',
        brand: 'Logitech G',
        is_offer: true,
        is_new: false,
        rating: 5.0,
        reviews_count: 57,
        stock: 12,
        is_featured: false,
        colors: [
            { name: 'Negro', hex: '#09090b' },
            { name: 'Blanco', hex: '#f4f4f5' }
        ],
        specifications: {
            'Marca': 'Logitech G',
            'Botones': '13 controles programables',
            'Sensor': 'HERO 25K',
            'Batería': 'Hasta 140 horas de juego',
            'Peso': '102g optimizado'
        }
    },
    {
        id: 31,
        name: 'Razer Viper V3 Pro Inalámbrico Ultra-Light',
        slug: 'razer-viper-v3-pro-inalambrico',
        description: 'Mouse gamer ultraligero para esports con sensor óptico Focus Pro 35K Gen-2, tasa de sondeo inalámbrico real de 8000 Hz HyperPolling y peso pluma de apenas 54 gramos.',
        price: 1250,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80',
        category: 'mice',
        brand: 'Razer',
        is_offer: false,
        is_new: false,
        rating: 5.0,
        reviews_count: 31,
        stock: 9,
        is_featured: false,
        colors: [
            { name: 'Negro Mate', hex: '#0a0a0a' },
            { name: 'Blanco Mercury', hex: '#f8fafc' }
        ],
        specifications: {
            'Marca': 'Razer',
            'Sensor': 'Focus Pro 35K Optical Sensor Gen-2',
            'Peso': '54 gramos ultraligero',
            'Tasa de respuesta': '8000 Hz inalámbrico HyperPolling',
            'Batería': 'Hasta 95 horas continuas'
        }
    },
    {
        id: 32,
        name: 'Logitech G305 LIGHTSPEED Wireless',
        slug: 'logitech-g305-lightspeed-wireless',
        description: 'Mouse inalámbrico compacto con sensor HERO de 12.000 DPI, tecnología inalámbrica LIGHTSPEED de 1ms de latencia y una impresionante autonomía de hasta 250 horas con una sola pila AA.',
        price: 340,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1626218174358-7769486c4b79?w=800&auto=format&fit=crop&q=80',
        category: 'mice',
        brand: 'Logitech G',
        is_offer: false,
        is_new: false,
        rating: 4.8,
        reviews_count: 83,
        stock: 24,
        is_featured: false,
        colors: [
            { name: 'Negro', hex: '#171717' },
            { name: 'Blanco', hex: '#ffffff' },
            { name: 'Lila Pastel', hex: '#c084fc' }
        ],
        specifications: {
            'Marca': 'Logitech G',
            'Sensor': 'HERO 12K (200 - 12.000 DPI)',
            'Conectividad': 'LIGHTSPEED 2.4GHz USB Dongle',
            'Autonomía': '250 horas continuas con 1 pila AA',
            'Peso': '99 gramos'
        }
    },
    {
        id: 33,
        name: 'Redragon Cobra M711 RGB Chroma',
        slug: 'redragon-cobra-m711-rgb',
        description: 'El mouse ergonómico más popular con sensor PixArt 3325 de hasta 10.000 DPI, 7 botones programables, iluminación RGB Chroma personalizable con 16.8 millones de colores y laterales texturizados antideslizantes.',
        price: 210,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1625842268584-8f329044703b?w=800&auto=format&fit=crop&q=80',
        category: 'mice',
        brand: 'Redragon',
        is_offer: false,
        is_new: false,
        rating: 4.7,
        reviews_count: 67,
        stock: 30,
        is_featured: false,
        colors: [
            { name: 'Negro Clásico', hex: '#18181b' },
            { name: 'Blanco Lunar', hex: '#f4f4f5' }
        ],
        specifications: {
            'Marca': 'Redragon',
            'Sensor': 'PixArt P3325 Óptico',
            'DPI': '100 a 10.000 DPI configurables',
            'Switches': 'Huano de 20 millones de clics',
            'Cable': 'Mallado de 1.8 metros con filtro ferrita'
        }
    },
    {
        id: 34,
        name: 'Glorious Model O 2 Wireless Ultra-Light',
        slug: 'glorious-model-o-2-wireless',
        description: 'Mouse gamer ambidiestro ultraligero de 68 gramos con sensor BAMF 2.0 de 26.000 DPI, switches ópticos Glorious de 100M de clics y hasta 210 horas de batería conectable por Bluetooth 5.2 o 2.4GHz.',
        price: 680,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80',
        category: 'mice',
        brand: 'Glorious',
        is_offer: false,
        is_new: false,
        rating: 4.8,
        reviews_count: 29,
        stock: 11,
        is_featured: false,
        colors: [
            { name: 'Negro Mate', hex: '#1f2937' },
            { name: 'Blanco Mate', hex: '#f9fafb' }
        ],
        specifications: {
            'Marca': 'Glorious',
            'Sensor': 'BAMF 2.0 (26.000 DPI / 650 IPS)',
            'Peso': '68 gramos',
            'Conexión': 'Trimodo (2.4GHz sin lag, Bluetooth 5.2, USB-C)',
            'Autonomía': 'Hasta 210 horas en modo Bluetooth'
        }
    },
    {
        id: 35,
        name: 'SteelSeries Aerox 3 Wireless Ghost Edition',
        slug: 'steelseries-aerox-3-wireless-ghost',
        description: 'Diseño de panal perforado ultraligero de 68g con protección AquaBarrier IP54 resistente al agua y polvo. Sensor TrueMove Air de 18.000 DPI, iluminación prismática RGB de 3 zonas y deslizadores de teflón 100% PTFE.',
        price: 590,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&auto=format&fit=crop&q=80',
        category: 'mice',
        brand: 'SteelSeries',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 24,
        stock: 8,
        is_featured: false,
        colors: [
            { name: 'Ghost Blanco', hex: '#f1f5f9' },
            { name: 'Onyx Negro', hex: '#0f172a' }
        ],
        specifications: {
            'Marca': 'SteelSeries',
            'Sensor': 'SteelSeries TrueMove Air 18.000 CPI',
            'Protección': 'Certificación AquaBarrier IP54 impermeable',
            'Batería': 'Hasta 200 horas con carga rápida USB-C',
            'Peso': '68 gramos'
        }
    },

    // ==========================================
    // AURICULARES (HEADSETS)
    // ==========================================
    {
        id: 18,
        name: 'HyperX Cloud II Wireless 7.1 Surround',
        slug: 'hyperx-cloud-ii-wireless',
        description: 'Los legendarios auriculares gamer ahora en versión inalámbrica de 2.4GHz. Increíble confort gracias a sus almohadillas viscoelásticas, transductores de 53 mm y batería de hasta 30 horas.',
        price: 890,
        old_price: 990,
        image_url: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop&q=80',
        category: 'headsets',
        brand: 'HyperX',
        is_offer: true,
        is_new: false,
        rating: 4.9,
        reviews_count: 76,
        stock: 15,
        is_featured: true,
        colors: [
            { name: 'Negro & Rojo HyperX', hex: '#dc2626' }
        ],
        specifications: {
            'Marca': 'HyperX',
            'Audio': 'Sonido envolvente virtual 7.1',
            'Controladores': 'Dinámicos de 53 mm con imanes de neodimio',
            'Batería': 'Hasta 30 horas continuas',
            'Micrófono': 'Desmontable con cancelación activa de ruido'
        }
    },
    {
        id: 19,
        name: 'Logitech G Pro X 2 LIGHTSPEED con Grafeno',
        slug: 'logitech-g-pro-x-2-lightspeed',
        description: 'Auriculares diseñados con y para campeones de esports. Equipados con los revolucionarios transductores de grafeno de 50 mm para una precisión posicional y acústica inigualable.',
        price: 1650,
        old_price: 1800,
        image_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
        category: 'headsets',
        brand: 'Logitech G',
        is_offer: true,
        is_new: true,
        rating: 5.0,
        reviews_count: 32,
        stock: 6,
        is_featured: true,
        colors: [
            { name: 'Negro Mate', hex: '#18181b' },
            { name: 'Blanco Glaciar', hex: '#ffffff' }
        ],
        specifications: {
            'Marca': 'Logitech G',
            'Transductores': 'Grafeno PRO-G de 50 mm',
            'Conectividad': 'LIGHTSPEED 2.4GHz, Bluetooth y Jack 3.5mm',
            'Batería': 'Hasta 50 horas',
            'Diadema': 'Estructura de acero y aluminio reforzado'
        }
    },
    {
        id: 36,
        name: 'Razer BlackShark V2 Pro Esports (Edición 2024)',
        slug: 'razer-blackshark-v2-pro-2024',
        description: 'Auriculares inalámbricos profesionales para esports con micrófono de banda superancha Razer HyperClear de 32 kHz, diafragmas de titanio TriForce de 50 mm, perfiles de audio para FPS y hasta 70 horas de batería.',
        price: 1450,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop&q=80',
        category: 'headsets',
        brand: 'Razer',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 38,
        stock: 8,
        is_featured: false,
        colors: [
            { name: 'Negro Clásico', hex: '#09090b' },
            { name: 'Blanco Edición', hex: '#fafafa' }
        ],
        specifications: {
            'Marca': 'Razer',
            'Micrófono': 'Razer HyperClear Super Wideband 32 kHz',
            'Diafragmas': 'TriForce Titanio de 50 mm',
            'Conexión': 'Razer HyperSpeed Wireless 2.4GHz + Bluetooth 5.2',
            'Batería': 'Hasta 70 horas continuas'
        }
    },
    {
        id: 37,
        name: 'SteelSeries Arctis Nova 7 Wireless Dual Audio',
        slug: 'steelseries-arctis-nova-7-wireless',
        description: 'Sistema acústico Nova con transductores de alta fidelidad y ecualizador paramétrico Sonar de grado profesional. Conexión simultánea 2.4GHz y Bluetooth para jugar y recibir llamadas al mismo tiempo.',
        price: 1390,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80',
        category: 'headsets',
        brand: 'SteelSeries',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 41,
        stock: 7,
        is_featured: false,
        colors: [
            { name: 'Negro Carbón', hex: '#1c1917' },
            { name: 'Blanco Nova', hex: '#f8fafc' }
        ],
        specifications: {
            'Marca': 'SteelSeries',
            'Audio': 'Simultáneo 2.4GHz Gaming + Bluetooth Móvil',
            'Micrófono': 'ClearCast Gen 2 con cancelación por IA totalmente retráctil',
            'Batería': '38 horas con carga rápida (15 min = 6 horas)',
            'Compatibilidad': 'PC, PlayStation 5, Switch y Móviles'
        }
    },
    {
        id: 38,
        name: 'Logitech G435 LIGHTSPEED Ultraligero',
        slug: 'logitech-g435-lightspeed',
        description: 'Auriculares inalámbricos ultraligeros de solo 165 gramos con transductores de 40 mm, micrófonos duales con tecnología beamforming que eliminan el ruido exterior sin brazo de micrófono y 18 horas de batería.',
        price: 480,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80',
        category: 'headsets',
        brand: 'Logitech G',
        is_offer: false,
        is_new: false,
        rating: 4.7,
        reviews_count: 59,
        stock: 16,
        is_featured: false,
        colors: [
            { name: 'Negro & Amarillo', hex: '#171717' },
            { name: 'Blanco & Lila', hex: '#e0e7ff' },
            { name: 'Azul & Frambuesa', hex: '#0284c7' }
        ],
        specifications: {
            'Marca': 'Logitech G',
            'Peso': '165 gramos (los más ligeros de su clase)',
            'Conexión': 'LIGHTSPEED 2.4GHz + Bluetooth baja latencia',
            'Transductores': '40 mm compatibles con Dolby Atmos',
            'Autonomía': 'Hasta 18 horas de reproducción'
        }
    },
    {
        id: 39,
        name: 'Redragon Zeus X H510-RGB Surround 7.1',
        slug: 'redragon-zeus-x-h510-rgb',
        description: 'Auriculares gamer con sonido envolvente virtual 7.1, transductores de 53 mm de gran potencia con imanes de neodimio, iluminación RGB en copas exteriores y micrófono omnidireccional con filtro antipop.',
        price: 390,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=80',
        category: 'headsets',
        brand: 'Redragon',
        is_offer: false,
        is_new: false,
        rating: 4.8,
        reviews_count: 72,
        stock: 22,
        is_featured: false,
        colors: [
            { name: 'Negro Clásico', hex: '#121212' },
            { name: 'Blanco Lunar', hex: '#f4f4f5' },
            { name: 'Rosa Pastel', hex: '#f472b6' }
        ],
        specifications: {
            'Marca': 'Redragon',
            'Audio': 'Sonido envolvente virtual 7.1 USB',
            'Transductores': '53 mm con imanes de neodimio',
            'Almohadillas': 'Memory foam forradas en tela transpirable',
            'Iluminación': 'RGB dinámico lateral'
        }
    },
    {
        id: 40,
        name: 'Corsair HS80 RGB WIRELESS Spatial Audio Dolby Atmos',
        slug: 'corsair-hs80-rgb-wireless',
        description: 'Auriculares inalámbricos premium con sonido espacial Dolby Atmos tridimensional en PC, transductores de neodimio de 50 mm de alta densidad sintonizados y micrófono omnidireccional con calidad broadcast.',
        price: 1180,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80',
        category: 'headsets',
        brand: 'Corsair',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 26,
        stock: 9,
        is_featured: false,
        colors: [
            { name: 'Negro Carbón', hex: '#18181b' },
            { name: 'Blanco Puro', hex: '#ffffff' }
        ],
        specifications: {
            'Marca': 'Corsair',
            'Audio Espacial': 'Dolby Atmos tridimensional en PC',
            'Frecuencia': '20 Hz a 40.000 Hz (alta resolución)',
            'Conectividad': 'SLIPSTREAM WIRELESS 2.4GHz de latencia casi nula',
            'Micrófono': 'Omnidireccional con función flip-to-mute'
        }
    },

    // ==========================================
    // MONITORES
    // ==========================================
    {
        id: 20,
        name: 'Samsung Odyssey G5 27" Curvo QHD 165Hz 1ms',
        slug: 'samsung-odyssey-g5-27-qhd-165hz',
        description: 'Curvatura profunda 1000R que llena tu visión periférica y te sitúa directamente dentro de la acción. Resolución QHD 2K (2560x1440), 165Hz de tasa de refresco y soporte HDR10.',
        price: 2450,
        old_price: 2700,
        image_url: 'images/products/samsung_odyssey.jpg',
        category: 'monitors',
        brand: 'Samsung',
        is_offer: true,
        is_new: false,
        rating: 4.8,
        reviews_count: 24,
        stock: 8,
        is_featured: false,
        colors: [
            { name: 'Negro Odyssey', hex: '#0f172a' }
        ],
        specifications: {
            'Marca': 'Samsung Odyssey',
            'Tamaño': '27 pulgadas Curvo 1000R',
            'Resolución': 'QHD (2560 x 1440)',
            'Refresco': '165 Hz / 1 ms (MPRT)',
            'Sincronización': 'AMD FreeSync Premium'
        }
    },
    {
        id: 41,
        name: 'LG UltraGear 27GN800-B 27" IPS QHD 144Hz 1ms',
        slug: 'lg-ultragear-27gn800-b-qhd-144hz',
        description: 'Monitor gaming con panel IPS de 27 pulgadas y resolución QHD (2560x1440). Tasa de actualización fluida de 144Hz, tiempo de respuesta de 1ms GtG, compatibilidad con NVIDIA G-Sync y soporte HDR10.',
        price: 2650,
        old_price: null,
        image_url: 'images/products/samsung_odyssey.jpg',
        category: 'monitors',
        brand: 'LG',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 37,
        stock: 6,
        is_featured: false,
        colors: [
            { name: 'Negro Gamer', hex: '#0a0a0a' }
        ],
        specifications: {
            'Marca': 'LG UltraGear',
            'Pantalla': '27 pulgadas IPS QHD (2560 x 1440)',
            'Tasa de refresco': '144 Hz nativos / 1 ms GtG',
            'Sincronización': 'NVIDIA G-Sync Compatible & AMD FreeSync Premium',
            'Color': 'sRGB 99% con HDR10'
        }
    },
    {
        id: 42,
        name: 'ASUS TUF Gaming VG249Q1A 24" FHD 165Hz IPS',
        slug: 'asus-tuf-gaming-vg249q1a-24-165hz',
        description: 'Monitor para eSports de 23.8 pulgadas con panel IPS Full HD (1920x1080), frecuencia de actualización de 165Hz, tecnología ASUS Extreme Low Motion Blur (ELMB) de 1ms MPRT y FreeSync Premium.',
        price: 1680,
        old_price: null,
        image_url: 'images/products/asus_oled_monitor.jpg',
        category: 'monitors',
        brand: 'ASUS',
        is_offer: false,
        is_new: false,
        rating: 4.8,
        reviews_count: 48,
        stock: 12,
        is_featured: false,
        colors: [
            { name: 'Negro Táctico', hex: '#111827' }
        ],
        specifications: {
            'Marca': 'ASUS TUF Gaming',
            'Pantalla': '23.8 pulgadas IPS Full HD (1920 x 1080)',
            'Frecuencia': '165 Hz / 1 ms MPRT (ELMB)',
            'Sincronización': 'FreeSync Premium & Shadow Boost',
            'Conexiones': 'DisplayPort 1.2, 2x HDMI 1.4, Salida de audio'
        }
    },
    {
        id: 43,
        name: 'AOC C24G2 Curvo 24" 165Hz 1500R FreeSync',
        slug: 'aoc-c24g2-curvo-24-165hz',
        description: 'Inmersión curva de 1500R con panel VA de alto contraste nativo 3000:1, tasa de refresco de 165Hz, base ergonómica regulable en altura y biseles ultradelgados ideales para multimonitor.',
        price: 1520,
        old_price: null,
        image_url: 'images/products/samsung_odyssey.jpg',
        category: 'monitors',
        brand: 'AOC',
        is_offer: false,
        is_new: false,
        rating: 4.7,
        reviews_count: 33,
        stock: 10,
        is_featured: false,
        colors: [
            { name: 'Negro & Rojo AOC', hex: '#18181b' }
        ],
        specifications: {
            'Marca': 'AOC Gaming',
            'Curvatura': '1500R Inmersiva',
            'Panel': '23.6" Full HD VA (1920x1080) Contraste 3000:1',
            'Refresco y Respuesta': '165 Hz / 1 ms (MPRT)',
            'Ergonomía': 'Base con ajuste de altura, giro e inclinación'
        }
    },
    {
        id: 44,
        name: 'MSI Optix G274QRFW 27" Rapid IPS WQHD 170Hz Blanco',
        slug: 'msi-optix-g274qrfw-27-wqhd-170hz',
        description: 'Elegante monitor para setup blanco con panel Rapid IPS de 27" y resolución 2K WQHD (2560x1440). 170Hz de tasa de refresco, 1ms GtG, tecnología Quantum Dot y amplio espectro de color DCI-P3 97%.',
        price: 2950,
        old_price: null,
        image_url: 'images/products/asus_oled_monitor.jpg',
        category: 'monitors',
        brand: 'MSI',
        is_offer: false,
        is_new: false,
        rating: 5.0,
        reviews_count: 21,
        stock: 5,
        is_featured: false,
        colors: [
            { name: 'Blanco Setup', hex: '#f8fafc' }
        ],
        specifications: {
            'Marca': 'MSI Esports',
            'Panel': '27" Rapid IPS WQHD (2560 x 1440)',
            'Velocidad': '170 Hz / 1 ms GtG',
            'Gama de Color': 'Quantum Dot (97% DCI-P3, 125% sRGB)',
            'Diseño': 'Chasis y base completamente blancos'
        }
    },
    {
        id: 45,
        name: 'Gigabyte M28U 28" 4K UHD 144Hz SS IPS con KVM',
        slug: 'gigabyte-m28u-28-4k-144hz',
        description: 'Monitor gaming 4K UHD (3840x2160) de 28 pulgadas con puertos HDMI 2.1 para consolas PS5/Xbox Series X a 4K 120Hz y PC a 144Hz. Conmutador KVM integrado para controlar dos PCs con un solo teclado y mouse.',
        price: 4980,
        old_price: null,
        image_url: 'images/products/samsung_odyssey.jpg',
        category: 'monitors',
        brand: 'Gigabyte',
        is_offer: false,
        is_new: false,
        rating: 4.9,
        reviews_count: 15,
        stock: 4,
        is_featured: false,
        colors: [
            { name: 'Negro Mate', hex: '#030712' }
        ],
        specifications: {
            'Marca': 'Gigabyte',
            'Resolución': '28 pulgadas Super Speed IPS 4K UHD (3840 x 2160)',
            'Refresco': '144 Hz (120 Hz para consolas vía HDMI 2.1)',
            'KVM Integrado': 'Controla 2 equipos con 1 teclado y 1 mouse vía USB-C',
            'Color y HDR': 'VESA DisplayHDR 400 con 94% DCI-P3'
        }
    }
];

/**
 * Genera el enlace de compra directo a WhatsApp con moneda boliviana, formato limpio y emoticones
 */
function buildWhatsAppUrl(product, variantColor = null) {
    const colorInfo = variantColor ? `\n\u{1F3A8} Color: ${variantColor}` : '';
    const text = `Hola, Mundo Computer \u{1F44B}\n\nEstoy interesado en comprar:\n\n\u{1F6D2} ${product.name}${colorInfo}\n\u{1F4B0} Bs. ${Number(product.price).toLocaleString('es-BO')}\n\u{1F516} C\u00F3digo: MCW-${product.id}\n\nQuisiera realizar el pedido. \u00A1Gracias!`;
    return `https://wa.me/${SHOP_CONFIG.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Formatea valores numéricos en moneda local Bolivianos (Bs.)
 */
function formatPrice(amount) {
    if (amount === null || amount === undefined) return '';
    return `Bs. ${Number(amount).toLocaleString('es-BO')}`;
}

// Exponer en el objeto global window
window.SHOP_CONFIG = SHOP_CONFIG;
window.CATEGORIES = CATEGORIES;
window.CATEGORY_NAMES = CATEGORY_NAMES;
window.PRODUCTS = PRODUCTS;
window.buildWhatsAppUrl = buildWhatsAppUrl;
window.formatPrice = formatPrice;
