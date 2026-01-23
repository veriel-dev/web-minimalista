import { type ReactNode } from 'react'
import { cn } from '../../../libs/utils'
import { OutlineText } from './OutlineText'

type OutlineColor = 'white' | 'violet' | 'cyan' | 'emerald' | 'rose'

interface SectionHeaderProps {
  number?: string
  title: string
  subtitle?: string
  color?: OutlineColor
  align?: 'left' | 'center' | 'right'
  children?: ReactNode
  className?: string
}

export function SectionHeader({
  number,
  title,
  subtitle,
  color = 'white',
  align = 'left',
  children,
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <header className={cn('mb-12', alignClasses[align], className)}>
      {number && (
        <span className="block text-zinc-500 font-mono text-sm mb-2">
          {number}
        </span>
      )}
      <OutlineText as="h2" size="xl" color={color} hoverFill>
        {title}
      </OutlineText>
      {subtitle && (
        <p className="mt-4 text-zinc-400 text-lg font-inter max-w-2xl">
          {subtitle}
        </p>
      )}
      {children}
    </header>
  )
}

export default SectionHeader
