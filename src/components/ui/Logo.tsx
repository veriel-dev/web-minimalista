import { cn } from '../../lib/utils';
import type { OutlineColor } from '../../config/theme';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  color?: OutlineColor;
  hoverFill?: boolean;
  className?: string;
}

const sizes = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
};

const colorValues: Record<OutlineColor, string> = {
  white: '#ffffff',
  violet: '#a78bfa',
  cyan: '#22d3ee',
  emerald: '#34d399',
  rose: '#fb7185',
  amber: '#fbbf24',
  blue: '#60a5fa',
};

export function Logo({ size = 'md', color = 'violet', hoverFill = true, className }: LogoProps) {
  const strokeColor = colorValues[color];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={cn(sizes[size], hoverFill && 'logo-outline-hover', className)}
      aria-label="Veriel.dev logo"
      style={
        {
          '--logo-color': strokeColor,
        } as React.CSSProperties
      }
    >
      <path
        className="logo-path"
        fill="none"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M76.277 22.056a7.02 7.02 0 0 0-10.692 9.022l-8.337 8.337a9.07 9.07 0 0 0-5.196-1.628c-2.09 0-4.018.707-5.558 1.893l-5.856-5.856a5.417 5.417 0 1 0-1.888 1.895l5.885 5.884a9.07 9.07 0 0 0-1.64 4.217h-9.072A7.02 7.02 0 0 0 20 47.101a7.02 7.02 0 0 0 13.902 1.397h9.165a9.15 9.15 0 0 0 7.69 7.444v9.524a7.02 7.02 0 1 0 2.676.034V55.93c4.378-.667 7.743-4.458 7.743-9.02 0-2.138-.739-4.106-1.975-5.662l8.319-8.32a7.02 7.02 0 0 0 8.758-.942 7.02 7.02 0 0 0-.001-9.929M52.052 53.271a6.37 6.37 0 0 1-6.361-6.36c0-3.509 2.853-6.362 6.36-6.362s6.362 2.853 6.362 6.361a6.37 6.37 0 0 1-6.361 6.361"
      />
    </svg>
  );
}

export default Logo;
