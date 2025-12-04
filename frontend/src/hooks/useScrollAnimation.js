import React from 'react';

// Simple placeholder for AnimatedElement to prevent import errors
export const AnimatedElement = ({ children, ...props }) => {
  return React.createElement('div', props, children);
};
