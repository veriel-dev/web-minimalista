import { LucideIcon } from 'lucide-react';

interface Props {
  title: string;
  Icon: LucideIcon;
}
export const ElementTitle = ({ title, Icon }: Props) => {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold mb-12 flex items-center justify-center flex-wrap gap-4 text-green-400">
      <div className="w-16 h-16  border-2 border-green-400 rounded-none flex items-center justify-center">
        <Icon className="h-8 w-8" />
      </div>
      {title.toLocaleUpperCase()}
    </h2>
  );
};
