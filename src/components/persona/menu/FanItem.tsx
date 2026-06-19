import type { PersonaSection } from '../../../data/persona';

interface FanItemProps {
  section: PersonaSection;
  active: boolean;
  onHover: () => void;
  onOpen: () => void;
}

const FanItem = ({ section, active, onHover, onOpen }: FanItemProps) => {
  return (
    <button
      type="button"
      onMouseEnter={onHover}
      onFocus={onHover}
      onClick={onOpen}
      aria-label={`Abrir sección ${section.number} — ${section.label}: ${section.sublabel}`}
      aria-current={active ? 'true' : undefined}
      className="p5-fan-item block w-full border-0 bg-transparent cursor-pointer text-right p-0 relative"
      data-active={active ? 'true' : undefined}
      style={{
        transition: 'transform 0.3s var(--p5-ease-snap)',
        zIndex: active ? 3 : 1,
      }}
    >
      <span
        className="flex items-center justify-end"
        style={{
          gap: '14px',
          transform: 'skewX(-12deg)',
          background: active ? 'var(--p5-bone)' : 'rgba(10,10,10,0.86)',
          border: active ? '3px solid var(--p5-red)' : '1.5px solid rgba(245,245,244,0.22)',
          boxShadow: active ? '8px 8px 0 var(--p5-red)' : 'none',
          padding: active ? '14px 20px 14px 24px' : '12px 18px',
          clipPath: 'polygon(7% 0, 100% 0, 93% 100%, 0% 100%)',
          transition: 'all 0.3s var(--p5-ease-snap)',
        }}
      >
        <span
          className="flex items-center w-full justify-end"
          style={{ transform: 'skewX(12deg)', gap: '20px' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '13px',
              color: 'rgba(10,10,10,0.6)',
              display: active ? 'block' : 'none',
            }}
          >
            {section.sublabel}
          </span>
          <span
            style={{
              fontFamily: 'var(--p5-font-tall)',
              lineHeight: 0.85,
              whiteSpace: 'nowrap',
              fontSize: active ? 'clamp(24px, 5.5vw, 50px)' : 'clamp(18px, 4.5vw, 34px)',
              textTransform: 'uppercase',
              color: active ? 'var(--p5-ink)' : 'var(--p5-bone)',
              transition: 'all 0.3s',
            }}
          >
            {section.label}
          </span>
          <span
            className="flex-none text-center"
            style={{
              fontFamily: 'var(--p5-font-tall)',
              fontSize: active ? '20px' : '16px',
              color: active ? 'var(--p5-red)' : 'rgba(245,245,244,0.5)',
              minWidth: '34px',
            }}
          >
            {section.number}
          </span>
        </span>
      </span>

      {active && (
        <span
          aria-hidden
          className="hidden md:block absolute text-p5-red"
          style={{
            left: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '28px',
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.7))',
          }}
        >
          ▶
        </span>
      )}
    </button>
  );
};

export default FanItem;
