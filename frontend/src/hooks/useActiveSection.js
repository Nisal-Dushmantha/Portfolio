import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'skills', 'projects', 'experience', 'education', 'contact'];
    
    const observerOptions = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    if (typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return activeSection;
};
