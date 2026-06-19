interface ComicTextureProps {
  opacity?: number;
}

const ComicTexture = ({ opacity = 1 }: ComicTextureProps) => (
  <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity }}>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1.4px, transparent 1.7px)',
        backgroundSize: '13px 13px',
        maskImage: 'radial-gradient(120% 110% at 12% 88%, black, transparent 58%)',
        WebkitMaskImage: 'radial-gradient(120% 110% at 12% 88%, black, transparent 58%)',
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'repeating-linear-gradient(-22deg, transparent 0 46px, rgba(255,255,255,0.03) 46px 48px)',
      }}
    />
  </div>
);

export default ComicTexture;
