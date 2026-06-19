const HomePagePersona = () => {
  return (
    <main className="min-h-screen flex items-center justify-center text-p5-bone bg-p5-ink">
      <div className="text-center px-6">
        <h1
          className="text-6xl md:text-8xl tracking-tight"
          style={{ fontFamily: 'var(--p5-font-tall)' }}
        >
          VERIEL<span className="text-p5-red">.DEV</span>
        </h1>
        <p
          className="mt-4 text-sm uppercase tracking-[0.4em] text-p5-bone/70"
          style={{ fontFamily: 'var(--p5-font)' }}
        >
          Phantom Menu — work in progress
        </p>
      </div>
    </main>
  );
};

export default HomePagePersona;
