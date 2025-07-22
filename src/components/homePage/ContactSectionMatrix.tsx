import { ContactRound, Github, Linkedin, Mail } from 'lucide-react';
import { Card, ElementTitle, Section } from '../ui';

import { homePage } from '../../data/pages';
import { FormSendEmailMatrix } from './formSendEmail/FormSendEmailMatrix';
import { motion } from 'framer-motion';
import { configAnimate } from '../../config/animation';

const ContactSectionMatrix = () => {
  const { contactSetion } = homePage;
  const {
    animateHeroSecion: { initial, animate },
  } = configAnimate;
  return (
    <Section
      variant="light"
      className="z-10 relative  bg-black/20  backdrop-blur-sm  shadow-2xl p-12 rounded-lg sm:mt-20"
      id="contact"
    >
      <motion.div
        initial={{ opacity: initial.opacity, y: initial.y }}
        animate={{ opacity: animate.opacity, y: animate.y }}
      >
        <ElementTitle title={contactSetion.title} Icon={ContactRound} />
        <Card className="p-6 rounded-lg bg-black/20  backdrop-blur-sm shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-4 text-green-500">
                {contactSetion.subTitles.one}
              </h3>
              <h4 className="text-xl text-green-400 font-bold">{contactSetion.subTitles.two}</h4>
              <p className="text-green-300">{contactSetion.description}</p>
              <div className="flex items-center justify-strart gap-4">
                <a href="mailto:vmordiales@gmail.com" title="Email">
                  <Mail className="h-5 w-5 text-green-400" />
                </a>
                <a href="https://github.com/samuraiOrDev" target="_blank" title="GitHub">
                  <Github className="h-5 w-5 text-green-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/"
                  target="_blank"
                  title="Linkedin"
                >
                  <Linkedin className="h-5 w-5 text-green-400" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <FormSendEmailMatrix />
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};
export default ContactSectionMatrix;
