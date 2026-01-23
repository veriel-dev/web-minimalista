import { useState, useEffect, useCallback } from 'react'

export function useScrollProgress(): number {
  const [progress, setProgress] = useState<number>(0)

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0

    setProgress(Math.min(100, Math.max(0, scrollPercent)))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return progress
}

export default useScrollProgress
