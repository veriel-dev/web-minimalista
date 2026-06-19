import { personaUI } from '../../../data/persona';
import { RansomText, StarBurst } from '../primitives';

interface SplashProps {
  onEnter: () => void;
}

const Splash = ({ onEnter }: SplashProps) => {
  const { brand, splash } = personaUI;

  return (
    <button
      type="button"
      onClick={onEnter}
      aria-label="Entrar al portfolio"
      className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-2 cursor-pointer bg-transparent border-0"
    >
      <div className="absolute opacity-15" aria-hidden>
        <StarBurst size="86vh" color="var(--p5-bone)" spin={90} fine />
      </div>

      <img
        src="/logo-white.svg"
        alt=""
        aria-hidden
        width={220}
        height={220}
        decoding="async"
        className="relative w-[clamp(120px,30vw,220px)] h-[clamp(120px,30vw,220px)] mb-4"
        style={{ filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.6))' }}
      />

      <span
        className="relative leading-[0.82] tracking-[0.01em] text-p5-bone text-center px-4"
        style={{
          fontFamily: 'var(--p5-font-tall)',
          fontSize: 'clamp(44px, 14vw, 140px)',
          transform: 'skewX(-6deg)',
        }}
      >
        {brand.name.toUpperCase()}
        <span className="text-p5-red">{brand.suffix.toUpperCase()}</span>
      </span>

      <div className="relative mt-3.5">
        <RansomText text={splash.subtitle} variant="sticker" size="clamp(16px,4vw,22px)" />
      </div>

      <span
        className="relative mt-6 text-p5-bone uppercase font-bold text-center px-4"
        style={{
          fontFamily: 'var(--font-inter)',
          letterSpacing: '0.4em',
          fontSize: 'clamp(11px,3vw,13px)',
          animation: 'pulsP5 1.5s ease-in-out infinite',
        }}
      >
        {splash.hint}
      </span>
    </button>
  );
};

export default Splash;
