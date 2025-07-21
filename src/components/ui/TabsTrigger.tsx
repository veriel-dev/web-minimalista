import { LucideIcon } from 'lucide-react';
import { TabType } from '../homePage/TechSkillsCardsSection';

interface TabsTriggerProps {
  tab: TabType;
  activeTab: TabType;
  icon: LucideIcon;
  onClick: (tab: TabType) => void;
}

const TabsTrigger = ({ tab, activeTab, icon: IconComponent, onClick }: TabsTriggerProps) => {
  return (
    <button
      onClick={() => onClick(tab)}
      className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors text-lg
                        ${
                          activeTab === tab
                            ? 'text-green-400 border-b-2 border-green-400'
                            : 'text-green-300 hover:text-green-400'
                        }`}
    >
      <IconComponent size={20} />
      {tab.charAt(0).toUpperCase() + tab.slice(1)}
    </button>
  );
};

export default TabsTrigger;
