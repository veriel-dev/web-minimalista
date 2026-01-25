# Veriel.dev - Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Portfolio web personal con diseño minimalista inspirado en terminales y estética "Matrix"**

### [Ver Demo](https://veriel.dev/)

[Características](#características) • [Tech Stack](#tech-stack) • [Arquitectura](#arquitectura) • [Optimizaciones](#optimizaciones)

</div>

---

## Descripción

Portfolio web personal que demuestra competencias en desarrollo frontend moderno, arquitectura de componentes y optimización de rendimiento. Diseño dark mode con estética terminal/matrix.

### Habilidades Demostradas

| Área             | Competencias                                         |
| ---------------- | ---------------------------------------------------- |
| **Frontend**     | React 18, TypeScript estricto, componentes modulares |
| **Estilos**      | Tailwind CSS, diseño responsivo, animaciones fluidas |
| **Arquitectura** | Code splitting, lazy loading, memorización           |
| **UI/UX**        | Dark mode, efectos glow, transiciones suaves         |
| **DevOps**       | Vite, ESLint, Prettier, Husky, builds optimizados    |

---

## Características

### Diseño Matrix

- Tema oscuro con acentos verdes estilo terminal
- Efectos glow y blur en componentes
- Animaciones suaves con Framer Motion
- Totalmente responsive

### Secciones

- **Hero**: Presentación con efecto typing
- **About**: Información personal
- **Skills**: Stack tecnológico
- **Proyectos**: Galería filtrable por tipo (Frontend, Backend, Fullstack, Games)
- **Experiencia**: Timeline profesional
- **Contacto**: Formulario y redes sociales

### SEO

- Meta tags optimizados con React Helmet
- Estructura semántica HTML5
- Performance optimizado para Core Web Vitals

---

## Tech Stack

### Core

| Tecnología       | Versión | Propósito                   |
| ---------------- | ------- | --------------------------- |
| **React**        | 18.3    | Biblioteca UI con hooks     |
| **TypeScript**   | 5.6     | Tipado estático             |
| **Vite**         | 5.x     | Build tool y dev server     |
| **Tailwind CSS** | 3.4     | Framework CSS utility-first |

### Librerías

| Librería          | Propósito                |
| ----------------- | ------------------------ |
| **Framer Motion** | Animaciones declarativas |
| **Wouter**        | Router ligero (~1.5kb)   |
| **Lucide React**  | Iconos SVG               |
| **React Helmet**  | Gestión de meta tags     |

### Desarrollo

| Herramienta    | Propósito          |
| -------------- | ------------------ |
| **ESLint 9**   | Análisis estático  |
| **Prettier 3** | Formateo de código |
| **Husky**      | Git hooks          |

---

## Arquitectura

### Estructura del Proyecto

```
src/
├── components/
│   ├── layouts/           # Header, Footer, MainLayout
│   ├── sections/          # Hero, About, Skills, Projects...
│   ├── projectsPage/      # Filtros, cards, selector
│   └── ui/                # Button, Card, Badge, Section
├── data/
│   ├── projects.ts        # Lista de proyectos
│   └── skills.ts          # Stack tecnológico
├── hooks/                 # Custom hooks
├── pages/                 # Páginas de la aplicación
├── styles/
│   └── index.css          # Estilos globales + Tailwind
└── utils/                 # Utilidades
```

### Flujo de Componentes

```
App.tsx
    ↓
MainLayout (Header + Footer)
    ↓
Pages (Home, Projects, CV)
    ↓
Sections (Hero, About, Skills...)
    ↓
UI Components (Cards, Buttons...)
```

---

## Optimizaciones

### Code Splitting

| Técnica          | Implementación                      |
| ---------------- | ----------------------------------- |
| **Lazy Loading** | `React.lazy()` para cada sección    |
| **Suspense**     | Boundaries por sección con fallback |
| **Chunks**       | División manual en Vite config      |

### Memorización

| Técnica         | Implementación                         |
| --------------- | -------------------------------------- |
| **React.memo**  | Todos los componentes memorizados      |
| **useMemo**     | Cálculos costosos (filtros, búsquedas) |
| **DisplayName** | Nombres para debugging en DevTools     |

### Bundle

| Métrica       | Valor               |
| ------------- | ------------------- |
| **CSS**       | ~32kb (gzip: 6kb)   |
| **JS Vendor** | ~141kb (gzip: 45kb) |
| **JS App**    | ~234kb (gzip: 75kb) |

---

## Scripts

| Comando        | Descripción                      |
| -------------- | -------------------------------- |
| `pnpm dev`     | Servidor de desarrollo con HMR   |
| `pnpm build`   | Build de producción (tsc + vite) |
| `pnpm preview` | Preview del build                |
| `pnpm lint`    | Análisis con ESLint              |
| `pnpm format`  | Formateo con Prettier            |

---

## Autor

**Veriel.dev** - Software Developer especializado en Oracle WebCenter Sites, JavaScript, TypeScript, Java y Go.

---

<div align="center">

**Desarrollado con React + TypeScript + Tailwind**

[![Demo](https://img.shields.io/badge/Demo-Ver%20Ahora-22c55e?style=flat-square)](https://veriel.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-Repositorio-181717?style=flat-square&logo=github)](https://github.com/veriel-dev/web-minimalista)

</div>
