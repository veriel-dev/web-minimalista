# Veriel.dev - Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Portfolio web personal con diseño minimalista y tipografía outline**

### [Ver Demo](https://veriel.dev/)

[Características](#características) • [Tech Stack](#tech-stack) • [Arquitectura](#arquitectura) • [Scripts](#scripts)

</div>

---

## Descripción

Portfolio web personal construido con React 19 y un sistema de diseño propio basado en tipografía outline, colores de acento y scroll snapping. Incluye páginas de inicio, listado de proyectos, detalle de proyecto y currículum descargable.

---

## Características

### Diseño

- Tema oscuro sobre zinc-950 con tipografía Syne/Inter
- Textos outline con acentos de color (violet, cyan, emerald, rose)
- Scroll snap en la página de inicio
- Indicador de progreso lateral por secciones
- Animaciones con Motion
- Totalmente responsive

### Secciones

- **Hero**: Presentación con texto outline animado
- **About**: Información personal
- **Tech Stack**: Tecnologías agrupadas por categoría
- **Proyectos**: Vista previa con enlace a la galería completa
- **Experiencia**: Timeline profesional con detalle expandible
- **Contacto**: Formulario y redes sociales

### Páginas

- `/` — Inicio con scroll snap por secciones
- `/projects` — Listado filtrable de proyectos con estadísticas
- `/projects/:slug` — Detalle de proyecto
- `/curriculum-vitae` — CV con opción de descarga

### SEO

- Meta tags con React Helmet Async
- Estructura semántica HTML5

---

## Tech Stack

### Core

| Tecnología       | Versión | Propósito                   |
| ---------------- | ------- | --------------------------- |
| **React**        | 19      | Biblioteca UI               |
| **TypeScript**   | 5.6     | Tipado estático             |
| **Vite**         | 8       | Build tool y dev server     |
| **Tailwind CSS** | 4       | Framework CSS utility-first |

### Librerías

| Librería                  | Propósito                |
| ------------------------- | ------------------------ |
| **Motion**                | Animaciones declarativas |
| **Wouter**                | Router ligero (~1.5kb)   |
| **Tabler Icons**          | Iconos SVG               |
| **React Helmet Async**    | Gestión de meta tags     |
| **clsx + tailwind-merge** | Utilidades de clases     |

### Desarrollo

| Herramienta     | Propósito          |
| --------------- | ------------------ |
| **ESLint 9**    | Análisis estático  |
| **Prettier 3**  | Formateo de código |
| **Husky**       | Git hooks          |
| **lint-staged** | Lint en pre-commit |

---

## Arquitectura

```
src/
├── components/
│   ├── home/              # Hero, About, TechStack, Projects, Experience, Contact
│   ├── projects/          # Filtros, cards, grid, stats
│   ├── projectDetail/     # Detalle de proyecto
│   ├── cv/                # Secciones del CV, botón de descarga
│   ├── seo/               # Componentes de meta tags
│   └── ui/                # Layout, NavBar, Footer, ScrollSection, OutlineText
├── config/                # Navegación y secciones
├── data/
│   ├── pages/             # Datos por página
│   └── projects.ts        # Lista de proyectos
├── hooks/                 # useActiveSection, useScrollToSection, etc.
├── lib/                   # Utilidades (cn, helpers)
├── screens/               # Composición de páginas (Page Outlines)
└── styles/
    ├── outline.css        # Theme + Tailwind config
    └── transitions.css    # Transiciones globales
```

### Flujo

```
App.tsx (Router)
  ↓
Screens (*PageOutline)
  ↓
MainLayoutOutline (NavBar + ProgressIndicator + Footer)
  ↓
Components (Sections → UI)
```

---

## Scripts

| Comando              | Descripción                      |
| -------------------- | -------------------------------- |
| `pnpm dev`           | Servidor de desarrollo con HMR   |
| `pnpm build`         | Build de producción (tsc + vite) |
| `pnpm preview`       | Preview del build                |
| `pnpm lint`          | Análisis con ESLint              |
| `pnpm format`        | Formateo con Prettier            |
| `pnpm format:check`  | Verificar formateo               |
| `pnpm clean:install` | Limpieza total y reinstalación   |

---

## Autor

**Veriel.dev** — Software Developer especializado en Oracle WebCenter Sites, JavaScript, TypeScript, Java y Go.

---

<div align="center">

**Desarrollado con React + TypeScript + Tailwind**

[![Demo](https://img.shields.io/badge/Demo-Ver%20Ahora-a78bfa?style=flat-square)](https://veriel.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-Repositorio-181717?style=flat-square&logo=github)](https://github.com/veriel-dev/web-minimalista)

</div>
