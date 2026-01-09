import { useState, useRef, useEffect } from 'react';

interface Props {
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

const options = [
  { value: 'all', name: 'Todos' },
  { value: 'backend', name: 'Backend' },
  { value: 'frontend', name: 'Frontend' },
  { value: 'fullstack', name: 'Fullstack' },
  { value: 'completed', name: 'Completado' },
  { value: 'progress', name: 'En progreso' },
  { value: 'games', name: 'Juegos' },
];

export const Selector = ({ activeFilter, setActiveFilter }: Props) => {
  const [selectedOption, setSelectedOption] = useState(activeFilter || 'all');
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const selectId = 'filter-selector';

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedOption(activeFilter);
  }, [activeFilter]);

  const handleOptionClick = (value: string) => {
    setSelectedOption(value);
    setActiveFilter(value);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const selectedOptionData = options.find(option => option.value === selectedOption);

  return (
    <div className="relative w-[180px]" ref={selectRef}>
      <label
        htmlFor={selectId}
        className="absolute w-px h-px p-0 overflow-hidden whitespace-nowrap border-0 -m-px]"
      >
        Filter projects by status
      </label>

      <button
        id={selectId}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        className="w-full appearance-none px-4 py-2 rounded-lg transition-colors bg-black/20 backdrop-blur-sm shadow-2xl border-2 md:border-2 border-green-900/50 text-green-300 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 cursor-pointer flex justify-between items-center text-left"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedOptionData?.name}</span>

        <svg
          className={`h-6 w-6 fill-current text-green-700 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>

      {/* Dropdown de opciones con todos los estilos personalizados */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full mt-1 z-[9999] rounded-lg overflow-hidden bg-black/20 backdrop-blur-sm shadow-2xl border-2 border-green-900/50"
          role="listbox"
        >
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className={`
                px-4 py-2 text-green-300 text-lg cursor-pointer transition-colors
                hover:bg-green-500/10
                ${
                  option.value === selectedOption ? 'bg-green-500/20 font-medium' : 'bg-transparent'
                }
              `}
              role="option"
              aria-selected={option.value === selectedOption}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
