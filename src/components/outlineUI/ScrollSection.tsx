import { type ReactNode } from 'react'
import { cn } from '../../../libs/utils'

interface ScrollSectionProps {
  id: string
  children: ReactNode
  className?: string
  fullHeight?: boolean
  centered?: boolean
  padded?: boolean
}

export function ScrollSection({
  id,
  children,
  className,
  fullHeight = true,
  centered = false,
  padded = true,
}: ScrollSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-snap-align-start scroll-snap-stop-always',
        fullHeight && 'min-h-[100svh] py-20 md:py-0',
        centered && 'flex items-center justify-center',
        padded && 'px-4 sm:px-6 md:px-8 lg:px-12',
        className
      )}
    >
      {children}
    </section>
  )
}

export default ScrollSection
