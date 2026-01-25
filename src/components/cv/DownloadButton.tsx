import { cn } from '../../lib/utils';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  className?: string;
}

export function DownloadButton({ className }: DownloadButtonProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={cn('flex justify-center', className)}>
      <button
        onClick={handlePrint}
        className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-700 hover:border-white text-zinc-300 hover:text-white transition-all group"
      >
        <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
        <span className="font-mono text-sm">Descargar / Imprimir CV</span>
      </button>
    </div>
  );
}

export default DownloadButton;
