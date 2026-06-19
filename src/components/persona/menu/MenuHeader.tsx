import { personaUI } from '../../../data/persona';

const MenuHeader = () => {
  const { brand, hudHeader } = personaUI;
  const brandFull = `${brand.name}${brand.suffix}`.toUpperCase();

  return (
    <header className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 md:gap-3 min-w-0">
        <img
          src="/logo-white.svg"
          alt=""
          aria-hidden
          width={40}
          height={40}
          decoding="async"
          className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex-none"
        />
        <span
          className="text-p5-bone truncate"
          style={{
            fontFamily: 'var(--p5-font-tall)',
            fontSize: 'clamp(16px,4.5vw,22px)',
            letterSpacing: '0.04em',
          }}
        >
          {brandFull}
        </span>
      </div>

      <div
        className="inline-block bg-p5-bone py-1.5 px-3 md:px-[18px] flex-none"
        style={{ transform: 'skewX(-10deg)' }}
      >
        <span
          className="inline-block uppercase text-p5-ink"
          style={{
            transform: 'skewX(10deg)',
            fontFamily: 'var(--font-inter)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            fontSize: 'clamp(10px,2.6vw,13px)',
          }}
        >
          {hudHeader.badgePrefix} · {hudHeader.year}
        </span>
      </div>
    </header>
  );
};

export default MenuHeader;
