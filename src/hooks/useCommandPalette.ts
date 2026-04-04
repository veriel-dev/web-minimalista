import { useState, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'wouter';
import { mainNavLinks, homeSections, socialLinks } from '../config/navigation';
import { projectsOutlineData } from '../data/pages/projects.outline';
import { useScrollToSection } from './useScrollToSection';

export interface PaletteItem {
  id: string;
  label: string;
  category: 'pages' | 'sections' | 'projects' | 'links';
  href: string;
  action: 'navigate' | 'scroll' | 'external';
}

const pageItems: PaletteItem[] = mainNavLinks.map(link => ({
  id: `page-${link.href}`,
  label: link.label,
  category: 'pages',
  href: link.href,
  action: 'navigate',
}));

const sectionItems: PaletteItem[] = homeSections
  .filter(s => s.id !== 'hero')
  .map(section => ({
    id: `section-${section.id}`,
    label: section.label,
    category: 'sections',
    href: section.id,
    action: 'scroll',
  }));

const projectItems: PaletteItem[] = projectsOutlineData.projects.map(project => ({
  id: `project-${project.slug}`,
  label: project.title,
  category: 'projects',
  href: `/projects/${project.slug}`,
  action: 'navigate',
}));

const linkItems: PaletteItem[] = socialLinks.map(link => ({
  id: `link-${link.label}`,
  label: link.label,
  category: 'links',
  href: link.href,
  action: 'external',
}));

const allItems: PaletteItem[] = [...pageItems, ...sectionItems, ...projectItems, ...linkItems];

export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [location, setLocation] = useLocation();
  const scrollToSection = useScrollToSection();

  const isHomePage = location === '/';

  const filteredItems = useMemo(() => {
    const items = isHomePage ? allItems : allItems.filter(item => item.category !== 'sections');

    if (!query.trim()) return items;

    const normalized = query.toLowerCase().trim();
    return items.filter(item => item.label.toLowerCase().includes(normalized));
  }, [query, isHomePage]);

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  const execute = useCallback(
    (item: PaletteItem) => {
      close();
      switch (item.action) {
        case 'navigate':
          setLocation(item.href);
          break;
        case 'scroll':
          scrollToSection(item.href);
          break;
        case 'external':
          window.open(item.href, '_blank', 'noopener,noreferrer');
          break;
      }
    },
    [close, setLocation, scrollToSection],
  );

  // Global keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          close();
        } else {
          open();
        }
        return;
      }

      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          close();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(i => (i < filteredItems.length - 1 ? i + 1 : 0));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(i => (i > 0 ? i - 1 : filteredItems.length - 1));
          break;
        case 'Enter':
          e.preventDefault();
          if (filteredItems[selectedIndex]) {
            execute(filteredItems[selectedIndex]);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, open, close, filteredItems, selectedIndex, execute]);

  // Reset selected index when filtered items change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  return {
    isOpen,
    query,
    setQuery,
    selectedIndex,
    setSelectedIndex,
    filteredItems,
    open,
    close,
    execute,
  };
}
