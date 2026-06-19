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
          animation: 'wipeSlab 0.66s var(--p5-ease-snap) forwards',
          animationDelay: '90ms',
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
          animation: 'wipeSlab 0.66s var(--p5-ease-snap) forwards',
        }}
      >
        <div
          className="flex flex-col items-center justify-center gap-3"
          style={{ transform: 'skewX(12deg)' }}
        >
          {isBack ? (
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
          ) : (
            <span
              style={{
                fontFamily: 'var(--p5-font-tall)',
                fontSize: 'clamp(48px, 8vw, 110px)',
                color: 'var(--p5-bone)',
                textTransform: 'uppercase',
                lineHeight: 0.85,
                textShadow: '5px 5px 0 var(--p5-ink)',
                animation: 'splatPop 0.42s var(--p5-ease-snap)',
              }}
            >
              {label}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wipe;
