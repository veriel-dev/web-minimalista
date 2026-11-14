import { personaUI } from '../../../data/persona';
import SfxToggle from './SfxToggle';

const hintBase = {
  fontFamily: 'var(--font-inter)',
  fontSize: '12px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: 'var(--p5-bone)',
  textShadow: '0 1px 3px rgba(10,10,10,0.85)',
};

interface MenuFooterProps {
  muted: boolean;
  onToggleMute: () => void;
}

const MenuFooter = ({ muted, onToggleMute }: MenuFooterProps) => {
  const { controls } = personaUI;

  return (
    <footer
      className="flex items-center justify-between pt-3 mt-1.5"
      style={{ borderTop: '1px solid rgba(245,245,244,0.16)' }}
    >
      <div className="hidden md:flex gap-6">
        {[controls.nav, controls.open, controls.back].map(hint => (
          <span key={hint} style={hintBase}>
            {hint}
          </span>
        ))}
      </div>
      <span className="md:hidden" style={hintBase}>
        Toca para abrir
      </span>
      <div className="flex items-center gap-4">
        <SfxToggle muted={muted} onToggle={onToggleMute} />
        <span
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            color: 'var(--p5-bone)',
            textShadow: '0 1px 3px rgba(10,10,10,0.85)',
            textTransform: 'uppercase',
          }}
        >
          {controls.location}
        </span>
      </div>
    </footer>
  );
};

export default MenuFooter;
