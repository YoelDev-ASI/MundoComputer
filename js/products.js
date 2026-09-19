/**
 * Base de datos y configuración de la tienda Mundo Computer Web
 */
const SHOP_CONFIG = {
    whatsappPhone: '584121234567',
    storeName: 'MundoComputerWeb',
    currency: '$',
    social: {
        instagram: 'https://instagram.com',
        tiktok: 'https://tiktok.com',
        facebook: 'https://facebook.com'
    }
};

const CATEGORIES = {
    'headsets': 'Auriculares',
    'keyboards': 'Teclados',
    'speakers': 'Parlantes',
    'microphones': 'Micrófonos',
    'webcams': 'Cámaras',
    'mice': 'Mouses',
    'mousepads': 'Mousepads'
};

const CATEGORY_NAMES = {
    'headsets': 'Auriculares Gamer',
    'keyboards': 'Teclados Mecánicos',
    'speakers': 'Sistemas de Audio',
    'microphones': 'Micrófonos Profesionales',
    'webcams': 'Cámaras de Transmisión',
    'mice': 'Mouses de Precisión',
    'mousepads': 'Alfombrillas de Mouse'
};

const PRODUCTS = [
    {
        id: 1,
        name: 'HyperX Cloud II Wireless',
        slug: 'hyperx-cloud-ii-wireless',
        description: 'Los legendarios auriculares gamer ahora inalámbricos. Ofrecen una comodidad excepcional gracias a sus almohadillas de espuma viscoelástica y una autonomía de batería de hasta 30 horas. Con sonido envolvente virtual 7.1 y transductores de 53 mm para una inmersión total.',
        price: 129.99,
        old_price: 149.99,
        image_url: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=800&auto=format&fit=crop&q=80',
        category: 'headsets',
        stock: 15,
        is_featured: true,
        specifications: {
            'Marca': 'HyperX',
            'Conexión': 'Inalámbrica (2.4 GHz USB)',
            'Batería': 'Hasta 30 horas',
            'Sonido': 'Envolvente Virtual 7.1',
            'Controlador': 'Dinámico de 53 mm',
            'Micrófono': 'Desmontable con cancelación de ruido',
            'Peso': '309g'
        }
    },
    {
        id: 2,
        name: 'Logitech G Pro X 2 LIGHTSPEED',
        slug: 'logitech-g-pro-x-2-lightspeed',
        description: 'Auriculares diseñados para esports de nivel profesional. Equipados con transductores de grafeno de 50 mm, ofrecen una precisión de audio increíble sin distorsión. Conexión inalámbrica ultrarrápida LIGHTSPEED, Bluetooth y entrada de 3.5 mm.',
        price: 249.00,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
        category: 'headsets',
        stock: 8,
        is_featured: true,
        specifications: {
            'Marca': 'Logitech G',
            'Transductor': 'Grafeno de 50 mm',
            'Conectividad': 'LIGHTSPEED, Bluetooth, Jack 3.5mm',
            'Batería': 'Hasta 50 horas',
            'Micrófono': 'Cardioide de 6 mm (Blue VO!CE)',
            'Material': 'Aluminio y diadema de acero con almohadillas de cuero sintético'
        }
    },
    {
        id: 3,
        name: 'Razer BlackWidow V4 Pro',
        slug: 'razer-blackwidow-v4-pro',
        description: 'El teclado mecánico definitivo para battlestations. Cuenta con switches mecánicos Razer Green (clicky) o Yellow (lineales), iluminación subyacente de 3 lados y teclas individuales RGB. Incluye dial de comando multifunción y reposamuñecas magnético de piel sintética.',
        price: 229.99,
        old_price: 249.99,
        image_url: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=800&auto=format&fit=crop&q=80',
        category: 'keyboards',
        stock: 12,
        is_featured: true,
        specifications: {
            'Marca': 'Razer',
            'Tipo de Switch': 'Mecánico Razer Green (Clicky)',
            'Iluminación': 'Razer Chroma RGB por tecla',
            'Conectividad': 'Cable USB-C desmontable',
            'Teclas': 'ABS de doble inyección',
            'Extras': 'Dial giratorio y 8 teclas macro dedicadas'
        }
    },
    {
        id: 4,
        name: 'Keychron K2 Wireless V2',
        slug: 'keychron-k2-wireless-v2',
        description: 'Teclado mecánico inalámbrico con formato compacto del 75%. Diseñado para maximizar el espacio en el escritorio, compatible con Mac y Windows. Switch Gateron Brown con retroiluminación RGB de múltiples efectos y gran batería.',
        price: 99.00,
        old_price: 110.00,
        image_url: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=600&auto=format&fit=crop&q=80',
        category: 'keyboards',
        stock: 20,
        is_featured: false,
        specifications: {
            'Marca': 'Keychron',
            'Distribución': '75% Compacto',
            'Switches': 'Gateron Brown (Táctil)',
            'Conexión': 'Bluetooth 5.1 o Cable USB-C',
            'Batería': '4000 mAh (Hasta 240 horas sin RGB)',
            'Compatibilidad': 'macOS / Windows / Android / iOS'
        }
    },
    {
        id: 5,
        name: 'Razer Leviathan V2 X',
        slug: 'razer-leviathan-v2-x',
        description: 'Barra de sonido gamer compacta para PC. Alimentada por USB-C y conectada mediante Bluetooth 5.0 de baja latencia. Cuenta con dos controladores de gama completa y dos radiadores pasivos para ofrecer una claridad excepcional y graves profundos.',
        price: 99.99,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80',
        category: 'speakers',
        stock: 10,
        is_featured: false,
        specifications: {
            'Marca': 'Razer',
            'Conectividad': 'Audio USB-C + Bluetooth 5.0',
            'Iluminación': 'Razer Chroma RGB (14 zonas)',
            'Dimensiones': '400 x 71 x 77 mm',
            'Peso': '845g',
            'Rendimiento': 'Max SPL 90dB'
        }
    },
    {
        id: 6,
        name: 'Logitech G560 Lightsync RGB',
        slug: 'logitech-g560-lightsync-rgb',
        description: 'Altavoces para ordenador de alto rendimiento con potencia de 240 vatios pico. Incorporan tecnología LIGHTSYNC RGB que reacciona de forma automática a los colores y la acción en pantalla del juego. Sonido posicional 3D DTS:X Ultra.',
        price: 229.00,
        old_price: 249.00,
        image_url: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&auto=format&fit=crop&q=80',
        category: 'speakers',
        stock: 5,
        is_featured: true,
        specifications: {
            'Marca': 'Logitech G',
            'Potencia Total': '240 W pico (120 W RMS)',
            'Subwoofer': 'Dedicado con salida inferior',
            'Sonido': 'DTS:X Ultra 3D posicional',
            'Conexiones': 'USB, Jack 3.5mm, Bluetooth 4.1',
            'Iluminación': 'RGB reactiva a la música y juegos'
        }
    },
    {
        id: 7,
        name: 'HyperX QuadCast S',
        slug: 'hyperx-quadcast-s',
        description: 'Micrófono de condensador USB con un sonido fantástico y un aspecto espectacular. La iluminación RGB radiante se puede personalizar con el software HyperX NGENUITY. Incluye suspensión elástica antivibración integrada y filtro antipop.',
        price: 159.99,
        old_price: 179.99,
        image_url: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&auto=format&fit=crop&q=80',
        category: 'microphones',
        stock: 14,
        is_featured: true,
        specifications: {
            'Marca': 'HyperX',
            'Tipo': 'Condensador de 3 cápsulas de 14mm',
            'Patrones polares': 'Estéreo, Omnidireccional, Cardioide, Bidireccional',
            'Frecuencia': '20Hz - 20kHz',
            'Iluminación': 'RGB personalizable (2 zonas)',
            'Extras': 'Sensor de silencio con un toque e indicador LED'
        }
    },
    {
        id: 8,
        name: 'Logitech StreamCam Full HD',
        slug: 'logitech-streamcam-full-hd',
        description: 'Diseñada específicamente para streamers y creadores de contenido. Graba y transmite en resolución Full HD 1080p a 60 fps con autoenfoque inteligente y exposición automática para resultados de nivel profesional en Twitch y YouTube.',
        price: 129.99,
        old_price: 149.00,
        image_url: 'https://images.unsplash.com/photo-1603184017968-903a8824f114?w=600&auto=format&fit=crop&q=80',
        category: 'webcams',
        stock: 15,
        is_featured: false,
        specifications: {
            'Marca': 'Logitech',
            'Resolución': '1080p a 60 fps (Full HD)',
            'Conector': 'USB Tipo C 3.1',
            'Ángulo de visión': 'Diagonal de 78 grados',
            'Audio': 'Micrófono dual estéreo con filtro de ruido',
            'Montaje': 'Soporte para monitor y adaptador de trípode'
        }
    },
    {
        id: 9,
        name: 'Logitech G502 X LIGHTSPEED',
        slug: 'logitech-g502-x-lightspeed',
        description: 'El ratón de gaming más popular del mundo, rediseñado con interruptores híbridos óptico-mecánicos LIGHTFORCE y un sensor HERO 25K ultrade cisión. Conexión inalámbrica LIGHTSPEED optimizada con 68% de velocidad de respuesta mejorada.',
        price: 139.00,
        old_price: 149.99,
        image_url: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
        category: 'mice',
        stock: 25,
        is_featured: true,
        specifications: {
            'Marca': 'Logitech G',
            'Sensor': 'HERO 25K (hasta 25,600 DPI)',
            'Botones': '13 botones programables',
            'Interruptores': 'LIGHTFORCE Híbridos (óptico-mecánicos)',
            'Conectividad': 'Inalámbrica LIGHTSPEED + Carga USB-C',
            'Peso': '99g'
        }
    },
    {
        id: 10,
        name: 'Razer DeathAdder V3 Pro',
        slug: 'razer-deathadder-v3-pro',
        description: 'Con un peso pluma de 63 g, es uno de los ratones ergonómicos inalámbricos más ligeros del mercado. Equipado con el sensor óptico Focus Pro 30K de Razer y switches ópticos para ratón Gen-3 de hasta 90 millones de clics de vida útil.',
        price: 149.99,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1625842268584-8f329044703b?w=600&auto=format&fit=crop&q=80',
        category: 'mice',
        stock: 18,
        is_featured: true,
        specifications: {
            'Marca': 'Razer',
            'Sensor': 'Óptico Focus Pro 30K',
            'DPI Máximo': '30,000 DPI',
            'Switches': 'Ópticos Razer Gen-3',
            'Batería': 'Hasta 90 horas',
            'Peso': '63g'
        }
    },
    {
        id: 11,
        name: 'SteelSeries QcK Prism Cloth XL',
        slug: 'steelseries-qck-prism-cloth-xl',
        description: 'Alfombrilla de ratón gaming de tela extragrande. Cuenta con iluminación dinámica RGB de dos zonas personalizable. Su microtejido legendario QcK proporciona un control máximo y optimización de seguimiento de sensores ópticos y láser.',
        price: 59.99,
        old_price: null,
        image_url: 'https://images.unsplash.com/photo-1632292224971-0d45778bd364?w=600&auto=format&fit=crop&q=80',
        category: 'mousepads',
        stock: 30,
        is_featured: false,
        specifications: {
            'Marca': 'SteelSeries',
            'Tamaño': '900 x 300 x 4 mm (XL)',
            'Material': 'Superficie de tela microtejida con base de goma antideslizante',
            'Iluminación': 'RGB de 2 zonas personalizable',
            'Conectividad': 'Cable USB desmontable'
        }
    }
];

/**
 * Genera el enlace de compra directo a WhatsApp
 */
function buildWhatsAppUrl(product, baseUrl = window.location.href) {
    const productUrl = `${window.location.origin}${window.location.pathname.replace(/[^/]*$/, '')}producto.html?slug=${product.slug}`;
    const text = `¡Hola! Estoy interesado en comprar el producto *${product.name}* (ID: #MCW-${product.id}) con un precio de $${Number(product.price).toFixed(2)}. ¿Tienen disponibilidad? Enlace: ${productUrl}`;
    return `https://wa.me/${SHOP_CONFIG.whatsappPhone}?text=${encodeURIComponent(text)}`;
}

// Exponer en window para fácil acceso global
window.SHOP_CONFIG = SHOP_CONFIG;
window.CATEGORIES = CATEGORIES;
window.CATEGORY_NAMES = CATEGORY_NAMES;
window.PRODUCTS = PRODUCTS;
window.buildWhatsAppUrl = buildWhatsAppUrl;
