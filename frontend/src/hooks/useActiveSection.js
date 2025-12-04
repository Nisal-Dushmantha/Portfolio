import { useState, useEffect } from 'react'

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact']
    
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% into view
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all sections
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId)
      if (section) {
        observer.observe(section)
      }
    })

    // Cleanup
    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  return activeSection
}
