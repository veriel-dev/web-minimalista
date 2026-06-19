import { useEffect, useRef, type ReactNode } from 'react';
import { ComicTexture, StarBurst } from '../primitives';
import { useEnter } from '../../../hooks/useEnter';
import {
  personaSections,
  personaUI,
  type PersonaSectionId,
} from '../../../data/pages/home.persona';

interface TakeoverFrameProps {
  sectionId: PersonaSectionId;
  onClose: () => void;
  children: ReactNode;
}

const TakeoverFrame = ({ sectionId, onClose, children }: TakeoverFrameProps) => {
  const section = personaSections.find(s => s.id === sectionId) ?? personaSections[0];
  const enter = useEnter();
  const backRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    backRef.current?.focus();
  }, [sectionId]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Sección ${section.label}`}
      className="fixed inset-0 z-20 flex flex-col overflow-hidden bg-p5-ink"
      style={{ padding: '22px clamp(26px, 5vw, 68px) 18px' }}
    >
      <div
        aria-hidden
        className="absolute"
        style={{
          top: '-15%',
          right: '-8%',
          width: '70%',
          height: '130%',
          background: 'linear-gradient(150deg, #c4121f 0%, #8a0a16 100%)',
          transform: 'skewX(-12deg)',
          clipPath: 'polygon(28% 0, 100% 0, 100% 100%, 0 100%)',
          opacity: 0.92,
        }}
      />

      <ComicTexture opacity={0.6} />

      <div aria-hidden className="absolute pointer-events-none" style={{ top: '-8%', right: '4%' }}>
        <StarBurst size="34vh" color="rgba(245,245,244,0.07)" spin={70} fine />
      </div>

      <div
        aria-hidden
        className="absolute select-none pointer-events-none"
        style={{
          bottom: '-12vh',
          left: '-1vw',
          fontFamily: 'var(--p5-font-tall)',
          fontSize: '46vh',
          lineHeight: 0.7,
          color: 'transparent',
          WebkitTextStroke: '2px rgba(245,245,244,0.07)',
          transform: 'skewX(-8deg)',
        }}
      >
        {section.number}
      </div>

      <div className="relative z-[2] flex items-center justify-between">
        <button
          ref={backRef}
          type="button"
          onClick={onClose}
          className="bg-transparent border-0 cursor-pointer p-0"
          aria-label="Volver al menú"
        >
          <span
            className="inline-block bg-p5-bone py-[9px] px-[22px]"
            style={{
              transform: 'skewX(-11deg)',
              boxShadow: '3px 3px 0 var(--p5-red)',
            }}
          >
            <span
              className="inline-flex items-center gap-2.5 uppercase text-p5-ink"
              style={{
                transform: 'skewX(11deg)',
                fontFamily: 'var(--p5-font)',
                fontSize: '13px',
              }}
            >
              {personaUI.takeover.back}
            </span>
          </span>
        </button>

        <div className="flex items-center gap-3.5">
          <span
            className="uppercase text-p5-bone/85"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 700,
              letterSpacing: '0.2em',
              fontSize: '13px',
            }}
          >
            {personaUI.takeover.menuPrefix} {section.label}
          </span>
          <span
            className="text-p5-bone leading-[0.8]"
            style={{ fontFamily: 'var(--p5-font-tall)', fontSize: '40px' }}
          >
            {section.number}
          </span>
        </div>
      </div>

      <div
        className="relative z-[2] grid items-center mx-auto w-full"
        style={{
          flex: 1,
          maxWidth: '1180px',
          gridTemplateColumns: 'minmax(200px, 300px) minmax(0, 640px)',
          justifyContent: 'center',
          gap: 'clamp(26px, 4vw, 64px)',
          minHeight: 0,
          paddingTop: '4px',
        }}
      >
        <div
          className="relative"
          style={{
            transform: enter ? 'translateX(0)' : 'translateX(-34px)',
            opacity: enter ? 1 : 0,
            transition: 'all 0.5s var(--p5-ease-snap)',
          }}
        >
          <div
            className="leading-[0.74]"
            style={{
              fontFamily: 'var(--p5-font-tall)',
              fontSize: 'clamp(120px, 15vw, 210px)',
              color: 'transparent',
              WebkitTextStroke: '3px var(--p5-red)',
              transform: 'skewX(-8deg)',
            }}
          >
            {section.number}
          </div>
          <div
            className="inline-block mt-3.5 bg-p5-bone px-5 py-2"
            style={{
              transform: 'skewX(-9deg)',
              boxShadow: '5px 5px 0 var(--p5-red)',
            }}
          >
            <span
              className="inline-block uppercase text-p5-ink whitespace-nowrap"
              style={{
                transform: 'skewX(9deg)',
                fontFamily: 'var(--p5-font-tall)',
                fontSize: 'clamp(24px, 2.6vw, 38px)',
                letterSpacing: '0.01em',
              }}
            >
              {section.label}
            </span>
          </div>
          <div className="block mt-3.5">
            <span
              className="inline-block bg-p5-red px-3.5 py-1"
              style={{ transform: 'skewX(-9deg)' }}
            >
              <span
                className="inline-block uppercase text-p5-bone"
                style={{
                  transform: 'skewX(9deg)',
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize: '11px',
                  letterSpacing: '0.16em',
                }}
              >
                {section.sublabel}
              </span>
            </span>
          </div>
        </div>

        <div
          className="p5-scrollbar-hide pr-2.5"
          style={{
            maxHeight: '78vh',
            overflowY: 'auto',
            transform: enter ? 'translateX(0)' : 'translateX(44px)',
            opacity: enter ? 1 : 0,
            transition: 'all 0.52s var(--p5-ease-snap) 0.08s',
          }}
        >
          {children}
        </div>
      </div>

      <div
        aria-hidden
        className="absolute z-[1] uppercase pointer-events-none"
        style={{
          bottom: '10px',
          left: 'clamp(26px, 5vw, 68px)',
          fontFamily: 'var(--p5-font-tall)',
          fontSize: '30px',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(245,245,244,0.5)',
          letterSpacing: '0.04em',
          transform: 'skewX(-8deg)',
        }}
      >
        {personaUI.takeover.watermark}
      </div>
    </div>
  );
};

export default TakeoverFrame;
