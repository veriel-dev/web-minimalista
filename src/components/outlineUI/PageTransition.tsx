import { type ReactNode, useEffect, useState } from 'react'
import { cn } from '../../../libs/utils'

type TransitionType = 'fade' | 'slide' | 'scale'

interface PageTransitionProps {
  children: ReactNode
  type?: TransitionType
  duration?: number
  className?: string
}

export function PageTransition({
  children,
  type = 'fade',
  duration = 300,
  className,
}: PageTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = requestAnimationFrame(() => {
      setIsVisible(true)
    })
    return () => cancelAnimationFrame(timer)
  }, [])

  const transitionStyles: Record<TransitionType, { base: string; visible: string }> = {
    fade: {
      base: 'opacity-0',
      visible: 'opacity-100',
    },
    slide: {
      base: 'opacity-0 translate-y-4',
      visible: 'opacity-100 translate-y-0',
    },
    scale: {
      base: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100',
    },
  }

  const { base, visible } = transitionStyles[type]

  return (
    <div
      className={cn(
        'transition-all ease-out',
        isVisible ? visible : base,
        className
      )}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  )
}

export default PageTransition
