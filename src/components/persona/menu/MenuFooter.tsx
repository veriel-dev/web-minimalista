import { personaUI } from '../../../data/pages/home.persona';

const hintBase = {
  fontFamily: 'var(--font-inter)',
  fontSize: '11px',
  letterSpacing: '0.14em',
  textTransform: 'uppercase' as const,
  color: 'rgba(245,245,244,0.72)',
};

const MenuFooter = () => {
  const { controls } = personaUI;

  return (
    <footer
      className="flex items-center justify-between pt-3 mt-1.5"
      style={{ borderTop: '1px solid rgba(245,245,244,0.16)' }}
    >
      <div className="flex gap-6">
        {[controls.nav, controls.open, controls.back].map(hint => (
          <span key={hint} style={hintBase}>
            {hint}
          </span>
        ))}
      </div>
      <span
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '11px',
          letterSpacing: '0.18em',
          color: 'rgba(245,245,244,0.5)',
          textTransform: 'uppercase',
        }}
      >
        {controls.location}
      </span>
    </footer>
  );
};

export default MenuFooter;
