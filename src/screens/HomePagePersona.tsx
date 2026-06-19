import {
  Badge,
  ComicBackground,
  PhantomButton,
  RansomText,
  StarBurst,
} from '../components/persona/primitives';

const HomePagePersona = () => {
  return (
    <div className="relative min-h-screen text-p5-bone">
      <ComicBackground />

      <main className="relative z-10 mx-auto max-w-5xl px-8 py-12 flex flex-col gap-12">
        <section className="flex flex-col gap-4">
          <h1
            className="text-6xl md:text-8xl tracking-tight"
            style={{ fontFamily: 'var(--p5-font-tall)' }}
          >
            VERIEL<span className="text-p5-red">.DEV</span>
          </h1>
          <RansomText text="Phantom Menu" variant="sticker" size="22px" />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs uppercase tracking-[0.3em] text-p5-bone/60">RansomText</h2>
          <div className="flex flex-wrap items-center gap-4">
            <RansomText text="Sticker" variant="sticker" size="22px" />
            <RansomText text="Ink" variant="ink" size="22px" />
            <RansomText text="Red" variant="red" size="22px" />
            <RansomText text="Outline" variant="outline" size="32px" />
            <RansomText text="Solid" variant="solid" size="32px" />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs uppercase tracking-[0.3em] text-p5-bone/60">StarBurst</h2>
          <div className="flex flex-wrap items-center gap-6">
            <StarBurst size="120px" color="var(--p5-bone)" />
            <StarBurst size="120px" color="var(--p5-red)" spin={20} />
            <StarBurst size="120px" color="var(--color-accent-violet)" fine spin={40} />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs uppercase tracking-[0.3em] text-p5-bone/60">PhantomButton</h2>
          <div className="flex flex-wrap items-center gap-4">
            <PhantomButton variant="solid" color="red">
              Ver proyectos
            </PhantomButton>
            <PhantomButton variant="outline" color="white">
              Contacto
            </PhantomButton>
            <PhantomButton
              variant="solid"
              color="emerald"
              href="https://veriel.dev"
              target="_blank"
            >
              Visitar
            </PhantomButton>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-xs uppercase tracking-[0.3em] text-p5-bone/60">Badge</h2>
          <div className="flex flex-wrap items-center gap-3">
            <Badge>TypeScript</Badge>
            <Badge>React 19</Badge>
            <Badge variant="status" color="emerald">
              Completado
            </Badge>
            <Badge variant="status" color="amber">
              En curso
            </Badge>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePagePersona;
