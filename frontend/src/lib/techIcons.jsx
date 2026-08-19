import React from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaPaintBrush, 
  FaAndroid, FaGoogle, FaPython, FaDatabase, FaCode, FaMobileAlt, FaLayerGroup
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiVite, 
  SiJavascript, SiTypescript, SiFigma, SiKotlin, SiAndroid, 
  SiMaterialdesign, SiNextdotjs, SiDocker, SiGit, SiPostman
} from 'react-icons/si';

export const getTechIcon = (tech) => {
  const normalized = tech?.toLowerCase()?.trim() || '';
  
  switch (normalized) {
    case 'react':
    case 'react.js':
    case 'reactjs':
      return <FaReact className="text-cyan-500" />;
    case 'node.js':
    case 'nodejs':
    case 'node':
      return <FaNodeJs className="text-emerald-500" />;
    case 'mongodb':
    case 'mongo':
      return <SiMongodb className="text-emerald-600" />;
    case 'express':
    case 'express.js':
      return <SiExpress className="text-gray-600 dark:text-gray-300" />;
    case 'tailwind css':
    case 'tailwindcss':
    case 'tailwind':
      return <SiTailwindcss className="text-sky-500" />;
    case 'firebase':
      return <SiFirebase className="text-amber-500" />;
    case 'vite':
      return <SiVite className="text-purple-500" />;
    case 'python':
      return <FaPython className="text-blue-500" />;
    case 'javascript':
    case 'js':
      return <SiJavascript className="text-amber-400" />;
    case 'typescript':
    case 'ts':
      return <SiTypescript className="text-blue-600" />;
    case 'html5':
    case 'html':
      return <FaHtml5 className="text-orange-500" />;
    case 'css3':
    case 'css':
      return <FaCss3 className="text-blue-500" />;
    case 'mern':
      return <FaReact className="text-cyan-500" />;
    case 'figma':
      return <SiFigma className="text-purple-500" />;
    case 'ui/ux design':
    case 'ui/ux':
    case 'ui ux':
      return <FaPaintBrush className="text-pink-500" />;
    case 'android':
      return <SiAndroid className="text-emerald-500" />;
    case 'android studio':
      return <SiAndroid className="text-emerald-600" />;
    case 'kotlin':
      return <SiKotlin className="text-purple-600" />;
    case 'google maps api':
    case 'google maps':
      return <FaGoogle className="text-red-500" />;
    case 'material design':
      return <SiMaterialdesign className="text-blue-500" />;
    case 'xml layouts':
    case 'xml':
      return <FaCode className="text-emerald-600" />;
    case 'next.js':
    case 'nextjs':
      return <SiNextdotjs className="text-gray-900" />;
    case 'docker':
      return <SiDocker className="text-blue-500" />;
    case 'git':
      return <SiGit className="text-orange-600" />;
    case 'postman':
      return <SiPostman className="text-orange-500" />;
    default:
      return <FaCode className="text-gray-500" />;
  }
};
