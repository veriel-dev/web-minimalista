import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '../../../libs/utils';

interface Props {
  variant?: 'scrollToTop' | 'scrollToTopAlt' | 'scrollToTopMinimal' | 'scrollToTopMinimalMatrix';
}
export const ScrollToTop = ({ variant = 'scrollToTop' }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollVariants = {
    scrollToTop:
      'fixed bottom-8 right-8 p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 z-50 group',
    scrollToTopAlt:
      'fixed bottom-8 right-8 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-blue-400 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 z-50 flex items-center gap-2 group',
    scrollToTopMinimal:
      'fixed bottom-8 right-8 w-10 h-10 border-main border-2 backdrop-blur-sm text-primary hover:text-white rounded-full cursor-pointer transition-all duration-300 ease-in-out focus:outline-none z-50 flex items-center justify-center group',
    scrollToTopMinimalMatrix:
      'fixed bottom-8 right-2 sm:right-8 w-10 h-10 border-main border-2  border-green-400/70  backdrop-blur-sm text-primary hover:text-white rounded-full cursor-pointer transition-all duration-300 ease-in-out focus:outline-none z-50 flex items-center justify-center group',
  };
  return (
    <>
      {isVisible && (
        <button
          className={cn(scrollVariants[variant])}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp
            className={`w-6 h-6 group-hover:animate-bounce ${
              variant === 'scrollToTopMinimalMatrix' ? 'text-green-400/70' : 'text-white'
            }`}
          />
        </button>
      )}
    </>
  );
};
