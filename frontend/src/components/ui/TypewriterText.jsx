import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  words = ["Full-Stack MERN Developer", "Native Android & Kotlin Engineer", "UI/UX Craftsman", "Open Source Enthusiast"], 
  typingSpeed = 80, 
  deletingSpeed = 40, 
  pauseDuration = 1800 
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[index] || words[0] || '';

  useEffect(() => {
    if (!currentWord) return;

    if (subIndex === currentWord.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, currentWord, words.length, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="inline-flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 font-bold">
        {currentWord.substring(0, subIndex)}
      </span>
      <span className="w-0.5 h-6 bg-red-600 ml-1 inline-block animate-pulse" />
    </span>
  );
};

export default TypewriterText;
