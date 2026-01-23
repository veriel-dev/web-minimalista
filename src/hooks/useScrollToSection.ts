import { useCallback } from 'react'

export function useScrollToSection(): (sectionId: string) => void {
  const scrollTo = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [])

  return scrollTo
}

export default useScrollToSection
