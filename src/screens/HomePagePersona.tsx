import { useState } from 'react';
import { ComicBackground } from '../components/persona/primitives';
import {
  FanItem,
  FanReveal,
  HudMoney,
  HudParty,
  MenuFooter,
  MenuHeader,
  MenuStage,
  Splash,
} from '../components/persona/menu';
import { personaSections, type PersonaSectionId } from '../data/pages/home.persona';

const HomePagePersona = () => {
  const [entered, setEntered] = useState(false);
  const [hovered, setHovered] = useState<PersonaSectionId>('hero');

  const hoveredSection = personaSections.find(s => s.id === hovered) ?? personaSections[0];

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <ComicBackground />

      {!entered && <Splash onEnter={() => setEntered(true)} />}

      {entered && (
        <div
          className="relative z-10 flex flex-col"
          style={{ minHeight: '100vh', padding: '18px clamp(24px, 4vw, 60px) 12px' }}
        >
          <MenuHeader />

          <div
            className="flex items-stretch justify-between mx-auto w-full"
            style={{
              flex: 1,
              maxWidth: '1140px',
              gap: 'clamp(20px, 3vw, 48px)',
              paddingTop: '6px',
              minHeight: 0,
            }}
          >
            <MenuStage section={hoveredSection} />

            <nav
              className="flex flex-col justify-center self-center"
              style={{
                gap: '13px',
                width: 'min(46vw, 560px)',
                flex: '1 1 auto',
              }}
            >
              {personaSections.map((s, i) => (
                <FanReveal key={s.id} index={i}>
                  <FanItem
                    section={s}
                    active={hovered === s.id}
                    onHover={() => setHovered(s.id)}
                    onOpen={() => {
                      /* nav stubbed — Fase 7 conecta takeover */
                    }}
                  />
                </FanReveal>
              ))}
            </nav>
          </div>

          <div className="flex items-end justify-between gap-5" style={{ padding: '0 0 8px' }}>
            <HudMoney />
            <HudParty />
          </div>

          <MenuFooter />
        </div>
      )}
    </div>
  );
};

export default HomePagePersona;
