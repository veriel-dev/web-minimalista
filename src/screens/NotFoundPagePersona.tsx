import { useLocation } from 'wouter';
import {
  ComicBackground,
  PhantomButton,
  RansomText,
  StarBurst,
} from '../components/persona/primitives';
import { cvData } from '../data/cv';

const NotFoundPagePersona = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <title>404 — Página robada · Veriel.dev</title>
      <meta name="robots" content="noindex" />

      <ComicBackground />

      <div
        aria-hidden
        className="absolute select-none whitespace-nowrap"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) skewX(-8deg)',
          fontFamily: 'var(--p5-font-tall)',
          fontSize: 'min(46vh, 70vw)',
          lineHeight: 0.8,
          color: 'transparent',
          WebkitTextStroke: '2px rgba(245,245,244,0.06)',
          zIndex: 1,
        }}
      >
        404
      </div>

      <div
        className="relative flex flex-col items-center text-center"
        style={{ zIndex: 3, padding: '0 24px', maxWidth: '880px' }}
      >
        <div
          className="relative flex items-center justify-center mb-2"
          style={{ width: 'min(40vh, 80vw, 380px)', height: 'min(40vh, 80vw, 380px)' }}
        >
          <div
            className="absolute"
            style={{ inset: '-4%', animation: 'splatPop 0.5s var(--p5-ease-snap)' }}
          >
            <StarBurst size="100%" color="var(--p5-bone)" spin={55} fine />
          </div>
          <div
            className="absolute"
            style={{ inset: '7%', animation: 'splatPop 0.5s var(--p5-ease-snap) 0.05s both' }}
          >
            <StarBurst size="100%" color="var(--p5-red)" spin={42} />
          </div>
          <span
            className="relative text-p5-bone"
            style={{
              fontFamily: 'var(--p5-font-tall)',
              fontSize: 'min(18vh, 34vw, 170px)',
              lineHeight: 0.78,
              textShadow: '5px 5px 0 var(--p5-ink)',
              animation: 'glitch404 4s steps(1) infinite',
            }}
          >
            404
          </span>
        </div>

        <div className="mb-5" style={{ animation: 'riseIn 0.5s var(--p5-ease-snap) 0.15s both' }}>
          <RansomText text="Página robada" variant="sticker" size="clamp(26px, 4vw, 46px)" />
        </div>

        <p
          className="text-p5-bone/80 font-light"
          style={{
            animation: 'riseIn 0.5s var(--p5-ease-snap) 0.24s both',
            fontSize: '18px',
            lineHeight: 1.5,
            maxWidth: '42ch',
            margin: '0 0 8px',
          }}
        >
          Esta ruta ha desaparecido sin dejar rastro — como un buen Phantom Thief.
        </p>

        <p
          className="text-p5-red font-bold uppercase"
          style={{
            animation: 'riseIn 0.5s var(--p5-ease-snap) 0.3s both',
            fontFamily: 'var(--font-inter)',
            fontSize: '13px',
            letterSpacing: '0.16em',
            margin: '0 0 34px',
          }}
        >
          El objetivo no se encuentra
        </p>

        <div
          className="flex gap-3.5 flex-wrap justify-center"
          style={{ animation: 'riseIn 0.5s var(--p5-ease-snap) 0.38s both' }}
        >
          <PhantomButton variant="solid" color="red" onClick={() => setLocation('/')}>
            ◀ Volver al menú
          </PhantomButton>
          <PhantomButton
            variant="outline"
            color="white"
            href={cvData.header.website}
            target="_blank"
          >
            Ir a veriel.dev
          </PhantomButton>
        </div>
      </div>

      <div
        aria-hidden
        className="absolute uppercase"
        style={{
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%) skewX(-8deg)',
          fontFamily: 'var(--p5-font-tall)',
          fontSize: '20px',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(245,245,244,0.4)',
          letterSpacing: '0.06em',
          zIndex: 3,
        }}
      >
        Veriel.dev — Error 404
      </div>
    </div>
  );
};

export default NotFoundPagePersona;
