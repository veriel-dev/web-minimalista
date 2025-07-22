import { Code, Cog, Computer, Container, Database, LucideIcon, Server } from 'lucide-react';
import { Card, ElementTitle, Section, TabsList } from '../ui';
import { useState } from 'react';
import TabsTrigger from '../ui/TabsTrigger';
import { motion } from 'framer-motion';
import { homePage } from '../../data/pages';
import { configAnimate } from '../../config/animation';
export type TabType = 'frontend' | 'backend' | 'database' | 'languages' | 'devOps';

interface TabIconsMap {
  [key: string]: LucideIcon;
}

const TechSkillsCardsSectionMatrix = () => {
  const [activeTab, setActiveTab] = useState<TabType>('frontend');
  const { skillsSection } = homePage;

  const technologies = skillsSection.technologies;
  const {
    animateHeroSecion: { initial, animate },
  } = configAnimate;

  const tabIcons: TabIconsMap = {
    frontend: Code,
    backend: Server,
    database: Database,
    languages: Computer,
    devOps: Container,
  };
  return (
    <Section
      variant="light"
      className="z-10 relative  bg-black/20  backdrop-blur-sm  shadow-2xl p-12 rounded-lg sm:mt-20"
    >
      <motion.div
        initial={{ opacity: initial.opacity, y: initial.y }}
        animate={{ opacity: animate.opacity, y: animate.y }}
      >
        <ElementTitle title={skillsSection.title} Icon={Cog} />'
        <TabsList>
          {Object.keys(technologies).map(tab => {
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
                className="bg-black/50 border border-green-900/50 hover:border-green-400 transition-all duration-300 hover:scale-105 p-6 rounded-lg shadow-lg h-[160px]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-lg font-bold text-green-300">{tech.name}</h3>
                </div>
                <p className="text-sm text-green-400 font-semibold mb-4">{tech.description}</p>
                <div className="w-full bg-secondary h-2 rounded-full overflow-hidden ">
                  <motion.div
                    className="h-full bg-gradient-to-r from-green-300 to-green-400"
                    initial={{ width: '0%' }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{
                      duration: 1,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

export default TechSkillsCardsSectionMatrix;
