import { FolderKanban, Github, Home, Linkedin, Mail } from 'lucide-react';
import { LinkNavBar } from '../ui/LinkNavBar';
import { Link } from 'wouter';
import { Button } from '../ui';
import { memo } from 'react';

export const NavBarNew = memo(() => {
  return (
    <nav className="sticky z-20 bg-black/50 backdrop-blur-sm border-b border-green-900/50 top-0 w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/" title="Inicio">
            <Button
              variant={'ghost'}
              ariaLabel="Aria Inicio"
              title="Incio"
              className="hover:bg-green-900/30 text-green-400 hover:text-green-300 border border-green-900/50"
            >
              <Home className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/projects" title="Proyectos">
            <Button
              variant={'ghost'}
              ariaLabel="Aria Proyectos"
              title="Proyectos"
              className="hover:bg-green-900/30 text-green-400 hover:text-green-300 border border-green-900/50"
            >
              <FolderKanban className="h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <LinkNavBar
            to="mailto:vmordiales@gmail.com"
            title="Email"
            ariaLabel="Aria Email"
            isEmail
            className="hover:bg-green-900/30 text-green-400 hover:text-green-300 border border-green-900/50"
          >
            <Mail className="h-5 w-5" />
          </LinkNavBar>
          <LinkNavBar
            to="https://github.com/veriel-dev/"
            target="_blank"
            title="GitHub"
            ariaLabel="Aria GitHub"
            className="hover:bg-green-900/30 text-green-400 hover:text-green-300 border border-green-900/50"
          >
            <Github className="h-5 w-5" />
          </LinkNavBar>
          <LinkNavBar
            to="https://www.linkedin.com/in/víctor-manuel-ordiales-garcía/"
            target="_blank"
            title="Linkedin"
            ariaLabel="Aria Linkedin"
            className="hover:bg-green-900/30 text-green-400 hover:text-green-300 border border-green-900/50"
          >
            <Linkedin className="h-5 w-5" />
          </LinkNavBar>
        </div>
      </div>
    </nav>
  );
});
