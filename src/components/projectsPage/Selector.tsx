import { useState } from 'react'

interface Props {
  activeFilter: string
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>
}


const options = [
  { value: "all", name: "Todos" },
  { value: "backend", name: "Backend" },
  { value: "frontend", name: "Frontend" },
  { value: "completed", name: "Completado" },
  { value: "progress", name: "En progreso" }
];
export const Selector = ({ activeFilter, setActiveFilter }: Props) => {
  const [selectedOption, setSelectedOption] = useState(activeFilter || 'all');
  const selectId = "filter-selector";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedOption(newValue);
    setActiveFilter(newValue);
  };
  return (
    <div className='relative w-[180px]'>
      <label htmlFor={selectId} className="absolute w-px h-px p-0 overflow-hidden whitespace-nowrap border-0 -m-px">
        Filter projects by status
      </label>
      <select
        id={selectId}
        value={selectedOption}
        onChange={handleChange}
        className="w-full appearance-none px-4 py-2 rounded-lg transition-colors bg-zinc-800 text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="h-6 w-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}
