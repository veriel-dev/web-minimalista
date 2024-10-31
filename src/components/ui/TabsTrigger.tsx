import { LucideIcon } from "lucide-react";
import { TabType } from "../homePage/TechSkillsCardsSection";





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
            className={
                    `flex items-center gap-2 px-6 py-3 font-medium text-sm transition-colors
                        ${activeTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`
            }
        >
            <IconComponent size={20} />
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
    )
}

export default TabsTrigger