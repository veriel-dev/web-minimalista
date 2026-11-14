import { IconVolume, IconVolumeOff } from '@tabler/icons-react';

interface SfxToggleProps {
  muted: boolean;
  onToggle: () => void;
}

const SfxToggle = ({ muted, onToggle }: SfxToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={muted ? 'Activar sonido' : 'Silenciar'}
    aria-pressed={!muted}
    title={muted ? 'Activar sonido' : 'Silenciar'}
    className="cursor-pointer border-0 bg-transparent p-1 flex items-center justify-center"
    style={{
      color: muted ? 'var(--p5-bone)' : 'var(--p5-red)',
      transition: 'color 0.18s ease, transform 0.18s var(--p5-ease-snap)',
    }}
  >
    {muted ? <IconVolumeOff size={18} stroke={2} /> : <IconVolume size={18} stroke={2} />}
  </button>
);

export default SfxToggle;
