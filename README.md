# Mundo Computer Web (Versión HTML / JS / CSS)

Proyecto de tienda virtual y catálogo gamer para **Mundo Computer Web**, desarrollado como una vista frontend pura **sin PHP**.

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica moderna.
- **CSS3 / Tailwind CSS**: Sistema de diseño espacial/gamer con temas oscuros, bordes estilizados, efectos de resplandor (`cyan-glow`) y fondos difusos.
- **JavaScript (Vanilla + Alpine.js)**: 
  - Catálogo reactivo en tiempo real.
  - Buscador instantáneo por texto, modelo o marca.
  - Filtro interactivo por categorías (Auriculares, Teclados, Parlantes, Micrófonos, etc.).
  - Ordenamiento por precio y destacados.
  - Integración dinámica de compras mediante WhatsApp con mensaje autogenerado por producto.
  - Página de detalle (`producto.html?slug=...`) con especificaciones técnicas y productos recomendados relacionados.

## 📂 Estructura del Proyecto

```
MundoComputerWebHTML/
├── index.html              # Página principal (Hero, Destacados y Catálogo dinámico)
├── producto.html           # Vista individual detallada del periférico
├── css/
│   └── app.css             # Estilos personalizados, efectos glow y scrollbar gaming
├── js/
│   └── products.js         # Base de datos local en JavaScript y utilidades WhatsApp
├── images/
│   ├── logo.svg            # Isotipo/logotipo vectorial espacial
│   ├── MundoComputerLogo.png
│   └── MundoComputerIsotipo.png
├── package.json            # Scripts para desarrollo local opcional
└── README.md               # Documentación del proyecto
```

## 💻 Cómo Ejecutar el Proyecto

Tienes dos formas sumamente sencillas de abrir y probar el proyecto:

### Opción 1: Abrir directamente en el navegador (Sin dependencias)
Haz doble clic sobre el archivo `index.html` en tu explorador de archivos. El proyecto utiliza librerías a través de CDN optimizado y funcionará inmediatamente.

### Opción 2: Usar un servidor local estático (Vite / Live Server / Node)
Si tienes Node.js instalado:
```bash
# Iniciar servidor de desarrollo con Vite
npx vite

# O bien con serve
npx serve .
```

O si usas la extensión *Live Server* en VS Code, simplemente haz clic derecho en `index.html` y selecciona **Open with Live Server**.
