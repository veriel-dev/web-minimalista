import { personaUI } from '../../../data/pages/home.persona';

const MenuHeader = () => {
  const { brand, hudHeader } = personaUI;
  const brandFull = `${brand.name}${brand.suffix}`.toUpperCase();

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/logo-white.svg"
          alt=""
          aria-hidden
          width={40}
          height={40}
          decoding="async"
          className="w-[40px] h-[40px]"
        />
        <span
          className="text-p5-bone"
          style={{
            fontFamily: 'var(--p5-font-tall)',
            fontSize: '22px',
            letterSpacing: '0.04em',
          }}
        >
          {brandFull}
        </span>
      </div>

      <div
        className="inline-block bg-p5-bone py-1.5 px-[18px]"
        style={{ transform: 'skewX(-10deg)' }}
      >
        <span
          className="inline-block uppercase text-p5-ink"
          style={{
            transform: 'skewX(10deg)',
            fontFamily: 'var(--font-inter)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            fontSize: '13px',
          }}
        >
          {hudHeader.badgePrefix} · {hudHeader.year}
        </span>
      </div>
    </header>
  );
};

export default MenuHeader;
