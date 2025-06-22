# My Static Astro Site

Este es un proyecto de sitio web estático construido con el framework **Astro**. El contenido del sitio se gestiona a través de archivos **Markdown** y está diseñado para tener una apariencia retro inspirada en videojuegos de 8 bits utilizando **NES.css**.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de carpetas:

```
my-static-astro-site
├── src
│   ├── components
│   │   └── PostCard.astro
│   ├── content
│   │   └── posts
│   │       └── primer-post.md
│   ├── layouts
│   │   └── BaseLayout.astro
│   └── pages
│       ├── index.astro
│       └── [slug].astro
├── astro.config.mjs
├── package.json
└── README.md
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Ejecución

Para iniciar el servidor de desarrollo y ver el sitio en acción, utiliza el siguiente comando:

```
npm run dev
```

Esto abrirá el sitio en tu navegador en `http://localhost:3000`.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar un pull request. Asegúrate de seguir las buenas prácticas de codificación y mantener el estilo retro de NES.css en toda la interfaz.

## Licencia

Este proyecto está bajo la licencia MIT.