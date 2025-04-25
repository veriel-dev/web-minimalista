import { Languages } from 'lucide-react';
import { cvPage } from '../../data/pages/cv';

const LanguagesComponent = () => {
  const { languages } = cvPage;
  return (
    <section className="mb-12">
      <div className="flex items-center gap-2 mb-6 border-b-2 border-blue-400 text-blue-600">
        <Languages className="w-5 h-5 text-blue-600" />
        <h2 className="text-2xl font-bold">{languages.title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-6">
        <ul className="mt-4 space-y-2 list-disc text-gray-700">
          {languages.expertise.map((item, index) => (
            <li key={index} className="ml-8 list-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default LanguagesComponent;
