import { Code, Cog, Computer, Database, LucideIcon, Server } from "lucide-react";
import { Card, Section, TabsList } from "../ui";
import { useState } from "react";
import TabsTrigger from "../ui/TabsTrigger";
import { homePage } from "../../const";
export type TabType = 'frontend' | 'backend' | 'database' | "languages";


interface TabIconsMap {
    [key: string]: LucideIcon;
}

const TechSkillsCardsSection = () => {
    const [activeTab, setActiveTab] = useState<TabType>('frontend');
    const {skillsSection} = homePage

    const technologies = skillsSection.technologies

    const tabIcons: TabIconsMap = {
        frontend: Code,
        backend: Server,
        database: Database,
        languages: Computer
    };
    return (
        <Section variant="light" className="rounded-lg">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 text-blue-500">
                <Cog className="h-8 w-8" />
                {skillsSection.title}
            </h2>
            {/* Tabs */}
            <TabsList>
                {Object.keys(technologies).map((tab) => {
                    return (
                        <TabsTrigger
                            key={tab}
                            tab={tab as TabType}
                            activeTab={activeTab}
                            icon={tabIcons[tab]}
                            onClick={setActiveTab}
                        />
                    );
                })}
            </TabsList>
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies[activeTab].map((tech) => (
                    <Card
                        key={tech.name}
                        className="rounded-lg p-4 border-2 hover:border-blue-500 transition-colors"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <h3 className="text-lg font-bold">{tech.name}</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {tech.description}
                        </p>

                        {/* <div className="mt-4">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                                <div
                                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                                    style={{ width: `${tech.level}%` }}
                                ></div>
                            </div>
                            <p className="text-right text-sm text-gray-600 dark:text-gray-400">
                                {tech.level}%
                            </p>
                        </div> */}
                    </Card>
                ))}
            </div>

        </Section>
    )
}

export default TechSkillsCardsSection