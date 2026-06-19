import RansomText from './RansomText';
import StarBurst from './StarBurst';

interface WipeProps {
  label?: string | null;
}

const Wipe = ({ label }: WipeProps) => {
  const isBack = !label;

  return (
    <div
      aria-hidden
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 60 }}
    >
      <div
        className="absolute"
        style={{
          top: '-25%',
          left: 0,
          width: '150%',
          height: '150%',
          background: 'var(--p5-ink)',
          transform: 'skewX(-12deg)',
          animation: 'wipeSlab 1s var(--p5-ease-snap) forwards',
          animationDelay: '140ms',
        }}
      />
      <div
        className="absolute flex items-center justify-center"
        style={{
          top: '-25%',
          left: 0,
          width: '150%',
          height: '150%',
          background: 'var(--p5-red)',
          transform: 'skewX(-12deg)',
          animation: 'wipeSlab 1s var(--p5-ease-snap) forwards',
        }}
      >
        <div
          className="flex flex-col items-center justify-center gap-3.5 relative"
          style={{ transform: 'skewX(12deg)' }}
        >
          {isBack ? (
            <>
              <div
                className="relative flex items-center justify-center"
                style={{ width: '220px', height: '220px' }}
              >
                <div
                  className="absolute inset-0"
                  style={{ animation: 'splatPop 0.7s var(--p5-ease-snap)' }}
                >
                  <StarBurst size="100%" color="var(--p5-ink)" spin={28} />
                </div>
                <div
                  className="absolute"
                  style={{
                    inset: '14%',
                    animation: 'splatPop 0.7s var(--p5-ease-snap) 0.08s both',
                  }}
                >
                  <StarBurst size="100%" color="var(--p5-bone)" fine />
                </div>
                <img
                  src="/logo-red.svg"
                  alt=""
                  aria-hidden
                  width={92}
                  height={92}
                  decoding="async"
                  className="relative"
                  style={{
                    width: '92px',
                    height: '92px',
                    animation: 'splatPop 0.6s var(--p5-ease-snap) 0.16s both',
                  }}
                />
              </div>
              <span
                style={{
                  fontFamily: 'var(--p5-font-tall)',
                  fontSize: 'clamp(40px, 6vw, 76px)',
                  color: 'var(--p5-bone)',
                  lineHeight: 0.85,
                  transform: 'skewX(-5deg)',
                  textShadow: '4px 4px 0 var(--p5-ink)',
                }}
              >
                VERIEL
                <span style={{ WebkitTextStroke: '2px var(--p5-bone)', color: 'transparent' }}>
                  .DEV
                </span>
              </span>
              <div style={{ marginTop: '2px' }}>
                <RansomText text="Menu Main" variant="ink" size="16px" />
              </div>
            </>
          ) : (
            <>
              <div className="absolute" style={{ opacity: 0.18 }}>
                <StarBurst size="60vh" color="var(--p5-ink)" fine spin={30} />
              </div>
              <span
                className="relative uppercase"
                style={{
                  fontFamily: 'var(--p5-font-tall)',
                  fontSize: 'clamp(48px, 8vw, 110px)',
                  color: 'var(--p5-bone)',
                  lineHeight: 0.85,
                  textShadow: '5px 5px 0 var(--p5-ink)',
                  animation: 'splatPop 0.6s var(--p5-ease-snap)',
                }}
              >
                {label}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wipe;
