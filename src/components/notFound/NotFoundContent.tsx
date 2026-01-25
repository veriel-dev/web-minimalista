import { Link } from 'wouter';
import { cn } from '../../lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { OutlineText } from '../ui';
import { Home, ArrowLeft } from 'lucide-react';

interface NotFoundContentProps {
  className?: string;
}

export function NotFoundContent({ className }: NotFoundContentProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: [0, 0, 0.2, 1] },
    }),
  };

  return (
    <div
      className={cn(
        'min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-6 py-12',
        className,
      )}
    >
      {/* 404 Number */}
      <motion.div
        className="mb-8"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={0}
      >
        <h1 className="font-black font-syne leading-none text-center">
          <OutlineText as="span" size="3xl" color="violet" hoverFill>
            404
          </OutlineText>
        </h1>
      </motion.div>

      {/* Message */}
      <motion.h2
        className="text-xl sm:text-2xl font-syne font-bold text-white mb-4 text-center"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={1}
      >
        Página no encontrada
      </motion.h2>

      <motion.p
        className="text-zinc-400 text-center max-w-md mb-10"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={2}
      >
        La página que buscas no existe o ha sido movida a otra ubicación.
      </motion.p>

      {/* Actions */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial="hidden"
        animate="visible"
        variants={variants}
        custom={3}
      >
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-900 hover:bg-zinc-200 transition-colors font-mono text-sm"
        >
          <Home size={18} />
          Ir al inicio
        </Link>

        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-colors font-mono text-sm"
        >
          <ArrowLeft size={18} />
          Volver atrás
        </button>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-violet-500/30 to-transparent hidden lg:block" />
    </div>
  );
}

export default NotFoundContent;
