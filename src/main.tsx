import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/outline.css';
import './styles/transitions.css';
import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async';

if (import.meta.env.PROD) {
  const styles = [
    'color: #a78bfa; font-size: 14px; font-weight: bold; font-family: monospace',
    'color: #71717a; font-size: 11px; font-family: monospace',
    'color: #22c55e; font-size: 11px; font-family: monospace',
  ];

  console.log(
    `%c
 ██╗   ██╗███████╗██████╗ ██╗███████╗██╗
 ██║   ██║██╔════╝██╔══██╗██║██╔════╝██║
 ██║   ██║█████╗  ██████╔╝██║█████╗  ██║
 ╚██╗ ██╔╝██╔══╝  ██╔══██╗██║██╔══╝  ██║
  ╚████╔╝ ███████╗██║  ██║██║███████╗███████╗
   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
`,
    styles[0],
  );

  console.log(
    '%cSi estás leyendo esto, probablemente seas dev. Echa un vistazo al código:',
    styles[1],
  );
  console.log('%chttps://github.com/veriel-dev/web-minimalista', styles[2]);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
