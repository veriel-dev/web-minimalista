# Veriel.dev — Phantom Menu Portfolio

<div align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Portfolio personal con shell inspirado en el menú principal de Persona 5: fan menu, wipes diagonales, SFX y CV imprimible.**

### [Ver demo](https://veriel.dev/)

[Concepto](#concepto) • [Tech Stack](#tech-stack) • [Arquitectura](#arquitectura) • [Scripts](#scripts)

</div>

---

## Concepto

Reescritura completa del portfolio adoptando el lenguaje visual del **Phantom Menu** de Persona 5: fondo negro + rojo carved, tipografía rota tipo _ransom note_ (Bungee/Anton), elementos sesgados con `clipPath` y `skewX`, starbursts, halftone y transiciones diagonales entre secciones.

Todo el portfolio vive en una sola ruta (`/`). Las 6 secciones (Inicio, Sobre mí, Experiencia, Skills, Proyectos, Contacto) son _takeovers_ a pantalla completa con un orquestador central que maneja estado, navegación por teclado, wipe y SFX.

---

## Highlights

- **Splash + Phantom Menu** con fan menu lateral, `MenuStage` reactiva al hover y HUD inferior (party + ¥).
- **Wipe diagonal de 1s** entre el menú y cada takeover, con starbursts + logo lockup al volver — ritmo de pantalla de carga retro.
- **Navegación por teclado completa**: `↑↓` mueve el hovered, `Enter` abre, `Esc` cierra. Touch UX en móvil.
- **SFX WebAudio**: `tick` al hover, `confirm` al abrir/cerrar. Toggle persistente en localStorage, **muted por defecto**, `AudioContext` con init perezoso (cero coste si el usuario nunca lo activa).
- **CV imprimible nativo** vía `window.print()`: capa `print:block` con header oscuro, timeline de experiencia/formación y skills agrupados; sin librerías de PDF.
- **404 estilo Persona** con `glitch404`, doble starburst y CTAs.
- **Responsive ≤ 768px**: shell colapsado, fan menu full-width, takeover en una sola columna, modal de proyecto apilado.
- **Accesibilidad**: `:focus-visible` con anillo rojo, skip-link, `role="dialog"` + `aria-modal` en takeovers y modales, soporte `prefers-reduced-motion`.
- **Lighthouse 99 / 100 / 100 / 100** (Performance / Accessibility / Best Practices / SEO).
- **Bundle inicial ~ 153 kB gz** con `ProjectDetail` lazy-loaded en chunk propio.

---

## Tech Stack

### Core

| Tecnología       | Versión | Propósito                |
| ---------------- | ------- | ------------------------ |
| **React**        | 19      | UI + title/meta nativos  |
| **TypeScript**   | 5.6     | Tipado estricto          |
| **Vite**         | 8       | Build tool y dev server  |
| **Tailwind CSS** | 4       | Utility-first + `@theme` |

### Librerías

| Librería                  | Propósito                               |
| ------------------------- | --------------------------------------- |
| **Wouter**                | Router ligero (~1.5kb)                  |
| **Tabler Icons**          | Iconos SVG (mute toggle, CV imprimible) |
| **clsx + tailwind-merge** | Utilidad `cn()` para clases             |

### Desarrollo

| Herramienta             | Propósito                           |
| ----------------------- | ----------------------------------- |
| **ESLint 9**            | Análisis estático                   |
| **Prettier 3**          | Formateo de código                  |
| **Husky + lint-staged** | Lint y format en pre-commit         |
| **Rollup Visualizer**   | `stats.html` para auditar el bundle |

---

## Arquitectura

```
src/
├── App.tsx                          # Router wouter: `/` + fallback 404
├── main.tsx                         # Bootstrap (StrictMode + persona.css)
├── components/
│   └── persona/
│       ├── primitives/              # RansomText, StarBurst, ComicBackground,
│       │                            # ComicTexture, PhantomButton, Badge, Wipe
│       ├── menu/                    # Splash, MenuStage, FanItem, FanReveal,
│       │                            # HudParty, HudMoney, MenuHeader, MenuFooter,
│       │                            # SfxToggle
│       └── sections/                # TakeoverFrame, HeroPanel, AboutPanel,
│                                    # CVPanel, SkillsPanel, ProjectsPanel,
│                                    # ProjectTile, ContactPanel, ProjectDetail,
│                                    # PrintableCV
├── data/                            # Una sola carpeta plana, un archivo por dominio
│   ├── colors.ts                    # SectionColor + tokens
│   ├── projects.ts                  # Catálogo de proyectos personales
│   ├── techStack.ts                 # 28 tecnologías con type/color
│   ├── cv.ts                        # Perfil profesional + stats derivados
│   ├── copy.ts                      # Copy editorial (hero, about, contact)
│   └── persona.ts                   # personaSections + personaUI (shell P5)
├── hooks/
│   ├── useEnter.ts                  # Stagger de entrada para FanReveal/Takeover
│   └── useSfx.ts                    # WebAudio: tick, confirm, toggleMute, muted
├── lib/utils.ts                     # cn()
├── screens/
│   ├── HomePagePersona.tsx          # Orquestador: estado + nav teclado + wipe + sfx
│   └── NotFoundPagePersona.tsx      # 404 estilo Persona
└── styles/
    └── persona.css                  # @theme Tailwind + CSS vars + keyframes
                                     # (wipeSlab, splatPop, burstSpin, pulsP5,
                                     # glitch404, riseIn) + @media print + a11y
```

### Flujo del orquestador

```
HomePagePersona
  ├── Splash (entered=false) ────────────────────► click → entered=true
  └── Menú principal (entered=true)
        ├── MenuHeader · MenuStage · FanItem × 6 · HudParty · HudMoney · MenuFooter
        └── Acción → navTo(id)
              ├── confirm() (SFX)
              ├── setWipe({ label })
              ├── +520ms → setOpenSection(id)   ← contenido cambia tras la cobertura
              └── +1150ms → setWipe(null)
        └── TakeoverFrame[id]
              └── Hero | About | CV | Skills | Projects | Contact
                    └── ProjectsPanel → click → handleOpenProject(project)
                          └── ProjectDetail (lazy chunk)
```

### Source-of-truth por dominio

- `cv.ts` ↔ **perfil profesional** (header, summary, experience, education, languages, achievements, stats derivados de la fecha de inicio de carrera).
- `techStack.ts` ↔ **tecnologías** (consumidas por SkillsPanel visual y por PrintableCV agrupadas por categoría).
- `copy.ts` ↔ **copy editorial** (hero, about, contact).
- `persona.ts` ↔ **UI ornamental** del shell P5 (sections nav, splash, party, money, controls, watermark…).
- `projects.ts` ↔ **catálogo** de proyectos personales (16 entradas).

---

## Scripts

| Comando              | Descripción                            |
| -------------------- | -------------------------------------- |
| `pnpm dev`           | Servidor de desarrollo con HMR         |
| `pnpm build`         | Build de producción (`tsc -b && vite`) |
| `pnpm preview`       | Preview del build                      |
| `pnpm lint`          | Análisis con ESLint                    |
| `pnpm format`        | Formateo con Prettier                  |
| `pnpm format:check`  | Verificar formateo                     |
| `pnpm clean:install` | Limpieza total y reinstalación         |

---

## Compatibilidad y notas

- **Reduced motion**: todas las animaciones P5 (`wipeSlab`, `splatPop`, `burstSpin`, hovers translate) se cortan con `@media (prefers-reduced-motion: reduce)`.
- **CV PDF**: se genera con `window.print()` desde un componente con clases `print:block`. El header oscuro se imprime gracias a `print-color-adjust: exact` en `@media print` (`persona.css`).
- **Audio**: el `AudioContext` se crea solo tras el primer `tick`/`confirm` con el toggle activado. Persistencia en `localStorage` con la clave `persona:sfx-muted`.

---

## Autor

**Veriel.dev** — Senior Software Engineer con 5+ años en Oracle WebCenter Sites y stack moderno (TypeScript, Java, Go).

---

<div align="center">

**Construido con React 19 + Vite 8 + Tailwind 4**

[![Demo](https://img.shields.io/badge/Demo-Ver%20Ahora-e11d2a?style=flat-square)](https://veriel.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-Repositorio-181717?style=flat-square&logo=github)](https://github.com/veriel-dev/web-minimalista)

</div>
