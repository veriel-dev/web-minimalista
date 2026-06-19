import { useState } from 'react';
import { accentVar } from '../accent';
import { personaUI, type PersonaPartyMember } from '../../../data/pages/home.persona';

interface PartyChipProps {
  member: PersonaPartyMember;
}

const PartyChip = ({ member }: PartyChipProps) => {
  const [hover, setHover] = useState(false);
  const accent = accentVar(member.color);

  return (
    <a
      href={member.href}
      target="_blank"
      rel="noopener noreferrer"
      title={member.name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="block w-[46px] no-underline"
      style={{
        transform: hover ? 'translateY(-6px) skewX(-9deg)' : 'skewX(-9deg)',
        transition: 'transform 0.22s var(--p5-ease-snap)',
      }}
    >
      <span
        className="block bg-p5-ink h-11 relative overflow-hidden"
        style={{
          border: `1.5px solid ${hover ? accent : 'rgba(245,245,244,0.3)'}`,
          borderBottom: `5px solid ${accent}`,
        }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center text-p5-bone"
          style={{
            transform: 'skewX(9deg)',
            fontFamily: 'var(--p5-font-tall)',
            fontSize: '20px',
          }}
        >
          {member.id}
        </span>
      </span>
      <span
        className="block text-center mt-1 uppercase"
        style={{
          transform: 'skewX(9deg)',
          fontFamily: 'var(--font-inter)',
          fontSize: '8px',
          letterSpacing: '0.1em',
          color: hover ? accent : 'rgba(245,245,244,0.55)',
        }}
      >
        {member.name}
      </span>
    </a>
  );
};

const HudParty = () => {
  const { party, partyLabel } = personaUI;

  return (
    <div className="flex items-end gap-[9px]">
      <span
        className="uppercase mr-1 pb-[18px]"
        style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '10px',
          letterSpacing: '0.18em',
          color: 'rgba(245,245,244,0.5)',
          transform: 'skewX(-8deg)',
        }}
      >
        {partyLabel}
      </span>
      {party.map(m => (
        <PartyChip key={m.id} member={m} />
      ))}
    </div>
  );
};

export default HudParty;
