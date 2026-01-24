import { type ReactNode, type CSSProperties } from 'react'
import { cn } from '../../../libs/utils'

type OutlineColor = 'white' | 'violet' | 'cyan' | 'emerald' | 'rose' | 'amber' | 'blue'
type OutlineSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
type OutlineTag = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p'

interface OutlineTextProps {
  children: ReactNode
  as?: OutlineTag
  color?: OutlineColor
  size?: OutlineSize
  thick?: boolean
  filled?: boolean
  hoverFill?: boolean
  className?: string
}

const sizeClasses: Record<OutlineSize, string> = {
  sm: 'text-base sm:text-lg lg:text-xl',
  md: 'text-lg sm:text-xl lg:text-2xl',
  lg: 'text-xl sm:text-2xl lg:text-4xl',
  xl: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl',
  '2xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl',
  '3xl': 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl',
}

const colorValues: Record<OutlineColor, string> = {
  white: '#ffffff',
  violet: '#a78bfa',
  cyan: '#22d3ee',
  emerald: '#34d399',
  rose: '#fb7185',
  amber: '#fbbf24',
  blue: '#60a5fa',
}

export function OutlineText({
  children,
  as: Tag = 'span',
  color = 'white',
  size = 'lg',
  thick = false,
  filled = false,
  hoverFill = false,
  className,
}: OutlineTextProps) {
  const strokeWidth = thick ? '3px' : '2px'
  const colorValue = colorValues[color]

  const style: CSSProperties & Record<string, string> = {
    '--outline-color': colorValue,
    WebkitTextStroke: `${strokeWidth} ${colorValue}`,
    WebkitTextFillColor: filled ? colorValue : 'transparent',
    transition: '-webkit-text-fill-color 0.3s ease',
  }

  return (
    <Tag
      className={cn(
        'font-syne font-bold',
        sizeClasses[size],
        hoverFill && 'outline-text-hover cursor-pointer',
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  )
}

export default OutlineText
