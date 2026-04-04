import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { IconHome, IconFolder, IconCode, IconExternalLink, IconSearch } from '@tabler/icons-react';
import { cn } from '../../lib/utils';
import { useCommandPalette, type PaletteItem } from '../../hooks/useCommandPalette';

const categoryLabels: Record<PaletteItem['category'], string> = {
  pages: 'Páginas',
  sections: 'Secciones',
  projects: 'Proyectos',
  links: 'Enlaces',
};

const categoryIcons: Record<PaletteItem['category'], React.ReactNode> = {
  pages: <IconHome size={16} />,
  sections: <IconFolder size={16} />,
  projects: <IconCode size={16} />,
  links: <IconExternalLink size={16} />,
};

function groupByCategory(items: PaletteItem[]) {
  const groups: { category: PaletteItem['category']; items: PaletteItem[] }[] = [];
  const order: PaletteItem['category'][] = ['pages', 'sections', 'projects', 'links'];

  for (const cat of order) {
    const catItems = items.filter(item => item.category === cat);
    if (catItems.length > 0) {
      groups.push({ category: cat, items: catItems });
    }
  }

  return groups;
}

export function CommandPalette() {
  const {
    isOpen,
    query,
    setQuery,
    selectedIndex,
    setSelectedIndex,
    filteredItems,
    close,
    execute,
  } = useCommandPalette();

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Autofocus input when opening
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const selected = listRef.current.querySelector('[data-selected="true"]');
    selected?.scrollIntoView({ block: 'nearest' });
  }, [selectedIndex]);

  // Build flat index for mapping grouped items to flat selectedIndex
  const groups = groupByCategory(filteredItems);
  let flatIndex = -1;

  const isMac = navigator.userAgent.includes('Mac');
  const shortcutLabel = isMac ? '⌘ K' : 'Ctrl K';

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Paleta de comandos"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-lg mx-4 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Search input */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800">
              <IconSearch size={18} className="text-zinc-500 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Buscar página, proyecto o sección..."
                className="flex-1 bg-transparent text-white text-sm placeholder:text-zinc-500 outline-none"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-palette-list"
                aria-activedescendant={
                  filteredItems[selectedIndex]
                    ? `palette-item-${filteredItems[selectedIndex].id}`
                    : undefined
                }
              />
              <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] text-zinc-500 bg-zinc-800 rounded font-mono">
                {shortcutLabel}
              </kbd>
            </div>

            {/* Results */}
            <div
              ref={listRef}
              id="command-palette-list"
              role="listbox"
              className="max-h-72 overflow-y-auto py-2"
            >
              {filteredItems.length === 0 ? (
                <p className="text-zinc-500 text-sm text-center py-8">Sin resultados</p>
              ) : (
                groups.map(group => (
                  <div key={group.category}>
                    <p className="px-4 pt-3 pb-1 text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-mono">
                      {categoryLabels[group.category]}
                    </p>
                    {group.items.map(item => {
                      flatIndex++;
                      const isSelected = flatIndex === selectedIndex;
                      const currentIndex = flatIndex;

                      return (
                        <button
                          key={item.id}
                          id={`palette-item-${item.id}`}
                          role="option"
                          aria-selected={isSelected}
                          data-selected={isSelected}
                          className={cn(
                            'w-full flex items-center gap-3 px-4 py-2 text-sm text-left transition-colors cursor-pointer',
                            isSelected
                              ? 'bg-zinc-800/70 text-white'
                              : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white',
                          )}
                          onClick={() => execute(item)}
                          onMouseEnter={() => setSelectedIndex(currentIndex)}
                        >
                          <span className="text-zinc-500">{categoryIcons[item.category]}</span>
                          <span className="flex-1 truncate">{item.label}</span>
                          {item.category === 'links' && (
                            <IconExternalLink size={12} className="text-zinc-600" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))
              )}
            </div>

            {/* Footer hint */}
            <div className="flex items-center gap-4 px-4 py-2 border-t border-zinc-800 text-[10px] text-zinc-600 font-mono">
              <span>
                <kbd className="px-1 py-0.5 bg-zinc-800 rounded">↑↓</kbd> navegar
              </span>
              <span>
                <kbd className="px-1 py-0.5 bg-zinc-800 rounded">↵</kbd> abrir
              </span>
              <span>
                <kbd className="px-1 py-0.5 bg-zinc-800 rounded">esc</kbd> cerrar
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default CommandPalette;
