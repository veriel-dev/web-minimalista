import { PhantomButton } from '../primitives';
import { copy } from '../../../data/copy';

const prettyHref = (href: string): string => {
  if (href.startsWith('mailto:')) return href.slice(7);
  let url = href.replace(/^https?:\/\//, '').replace(/\/$/, '');
  try {
    url = decodeURI(url);
  } catch {
    // ignore malformed URI
  }
  return url;
};

const ContactPanel = () => {
  const { contact } = copy;

  return (
    <div>
      <p
        className="text-p5-bone/90 font-light"
        style={{
          fontSize: '20px',
          maxWidth: '44ch',
          margin: '0 0 26px',
          lineHeight: 1.5,
        }}
      >
        {contact.subtitle}
      </p>

      <div className="flex flex-col gap-3 mb-7" style={{ maxWidth: '460px' }}>
        {contact.socialLinks.map(s => (
          <a
            key={s.platform}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link flex items-center justify-between gap-5 no-underline px-5 py-4"
            style={{
              background: '#141416',
              border: '1px solid rgba(245,245,244,0.18)',
              transition: 'background 0.18s, transform 0.18s var(--p5-ease-snap)',
            }}
          >
            <span
              className="text-p5-bone font-bold"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '18px' }}
            >
              {s.label}
            </span>
            <span
              className="text-p5-bone/85 truncate"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                maxWidth: '60%',
                direction: 'rtl',
                textAlign: 'right',
              }}
            >
              {prettyHref(s.href)} →
            </span>
          </a>
        ))}
      </div>

      <PhantomButton variant="solid" color="red" href={`mailto:${contact.email}`}>
        Enviar mensaje
      </PhantomButton>
    </div>
  );
};

export default ContactPanel;
