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
