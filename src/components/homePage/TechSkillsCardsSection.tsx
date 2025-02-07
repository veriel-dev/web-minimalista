import { Code, Cog, Computer, Container, Database, LucideIcon, Server } from "lucide-react";
import { Card, Section, TabsList } from "../ui";
import { useState } from "react";
import TabsTrigger from "../ui/TabsTrigger";
import { motion } from "framer-motion";
import { homePage } from "../../data/pages";
export type TabType = 'frontend' | 'backend' | 'database' | "languages" | "devOps";


interface TabIconsMap {
    [key: string]: LucideIcon;
}

const TechSkillsCardsSection = () => {
    const [activeTab, setActiveTab] = useState<TabType>('frontend');
    const { skillsSection } = homePage

    const technologies = skillsSection.technologies

    const tabIcons: TabIconsMap = {
        frontend: Code,
        backend: Server,
        database: Database,
        languages: Computer,
        devOps: Container
    };
    return (
        <Section variant="light" className="rounded-lg">
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-2 text-blue-500">
                <Cog className="h-8 w-8" />
                {skillsSection.title}
            </h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies[activeTab].map((tech, index) => (
                    <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card
                            key={tech.name}
                            className="rounded-lg p-4 border-2 hover:border-blue-500 transition-colors h-[160px]"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <h3 className="text-lg font-bold">{tech.name}</h3>
                            </div>
                            <p className="text-sm text-gray-400 font-semibold mb-4">
                                {tech.description}
                            </p>
                            <div className="w-full bg-secondary h-2 rounded-full overflow-hidden ">
                                <div
                                    className="h-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500"
                                    style={{ width: `${tech.level}%` }}
                                />
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    )
}

export default TechSkillsCardsSection