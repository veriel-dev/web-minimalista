import React from 'react';

import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollElement';
import { NavBarNew } from './NavBarNew';
import { useMatrixEffect } from '../../hooks/useMatrixt';

export interface MatrixDrop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
}

interface Props {
  children: React.ReactNode;
}
export const MainLayoutMatrix = ({ children }: Props) => {
  const { canvasRef } = useMatrixEffect({
    fontSize: 14,
    fadeSpeed: 0.65,
    charChangeRate: 0.1,
    speedRange: [1, 4],
    opacityRange: [0.3, 0.8],
  });
  return (
    <div className="min-h-screen bg-black">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none h-full w-full"
        style={{ zIndex: 0 }}
      />
      <NavBarNew />
      {children}
      <Footer />
      <ScrollToTop variant="scrollToTopMinimalMatrix" />
    </div>
  );
};
