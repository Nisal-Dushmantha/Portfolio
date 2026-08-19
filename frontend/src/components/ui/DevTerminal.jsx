import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCopy, FaCheck, FaPlay, FaTerminal, FaCode, FaCheckCircle } from 'react-icons/fa';

const tabsData = [
  {
    id: 'developer.ts',
    label: 'developer.ts',
    icon: '⚡',
    code: `// Nisal Dushmantha - Software Engineer Profile
interface SoftwareEngineer {
  name: string;
  role: string[];
  education: string;
  location: string;
  focus: string[];
  status: "available_for_hire" | "building_projects";
}

export const engineer: SoftwareEngineer = {
  name: "Nisal Dushmantha",
  role: [
    "MERN Full-Stack Developer",
    "Android & Kotlin Engineer",
    "UI/UX Systems Designer"
  ],
  education: "BSc (Hons) in Information Technology - SLIIT",
  location: "Kaduwela, Sri Lanka (UTC+5:30)",
  focus: [
    "Scalable Web Architecture",
    "Intuitive Micro-Interactions",
    "RESTful API & Database Engineering",
    "Native Mobile Applications"
  ],
  status: "available_for_hire"
};`
  },
  {
    id: 'techStack.json',
    label: 'techStack.json',
    icon: '📦',
    code: `{
  "core": {
    "languages": ["TypeScript", "JavaScript", "Kotlin", "Python", "HTML5", "CSS3"],
    "frontend": ["React.js", "Tailwind CSS", "Vite", "Framer Motion", "Material Design"],
    "backend": ["Node.js", "Express.js", "REST APIs", "JWT", "Axios"],
    "database": ["MongoDB", "Mongoose", "Firebase Firestore"],
    "mobile": ["Android Studio", "Kotlin", "XML Layouts", "Google Maps SDK"]
  },
  "design": ["Figma", "Design Systems", "Prototyping", "Wireframing"],
  "devOps_and_tools": ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"]
}`
  },
  {
    id: 'status.log',
    label: 'system.log',
    icon: '🟢',
    code: `[2026-08-19 22:15:00] [SYSTEM] Initializing developer environment...
[2026-08-19 22:15:01] [SUCCESS] MERN Stack modules loaded.
[2026-08-19 22:15:02] [SUCCESS] Android Studio & Kotlin SDK connected.
[2026-08-19 22:15:03] [DEPLOY] PowerSense deployed to Vercel (https://powersense-af.vercel.app).
[2026-08-19 22:15:04] [INFO] SLIIT Degree coursework in progress.
[2026-08-19 22:15:05] [STATUS] 🟢 Ready to collaborate on high-impact software projects.`
  }
];

const DevTerminal = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [runSuccess, setRunSuccess] = useState(false);

  const currentTab = tabsData.find(t => t.id === activeTab) || tabsData[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setRunSuccess(false);
    setTimeout(() => {
      setIsRunning(false);
      setRunSuccess(true);
      setTimeout(() => setRunSuccess(false), 3000);
    }, 1200);
  };

  // Helper to colorize code
  const formatCode = (code) => {
    return code.split('\n').map((line, idx) => {
      let formatted = line;
      // Keywords
      formatted = formatted.replace(
        /\b(export|const|interface|string|number|boolean|type|import|from|return)\b/g,
        '<span class="text-purple-400 font-semibold">$1</span>'
      );
      // Properties
      formatted = formatted.replace(
        /(["']?[a-zA-Z0-9_]+["']?)(?=:)/g,
        '<span class="text-sky-300">$1</span>'
      );
      // Strings
      formatted = formatted.replace(
        /(["'`][^"'`]*["'`])/g,
        '<span class="text-emerald-300">$1</span>'
      );
      // Comments
      if (line.trim().startsWith('//')) {
        formatted = `<span class="text-gray-500 italic">${line}</span>`;
      }
      // Logs
      if (line.includes('[SUCCESS]')) {
        formatted = formatted.replace('[SUCCESS]', '<span class="text-emerald-400 font-bold">[SUCCESS]</span>');
      }
      if (line.includes('[SYSTEM]') || line.includes('[DEPLOY]')) {
        formatted = formatted.replace(/(\[(SYSTEM|DEPLOY|INFO|STATUS)\])/g, '<span class="text-blue-400 font-bold">$1</span>');
      }

      return (
        <div key={idx} className="table-row">
          <span className="table-cell select-none text-right pr-4 text-gray-600 text-xs font-mono w-8">
            {idx + 1}
          </span>
          <span
            className="table-cell whitespace-pre font-mono text-xs sm:text-sm text-gray-200"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        </div>
      );
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full rounded-3xl bg-gray-950/95 border border-gray-800 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col font-mono"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900/90 border-b border-gray-800">
        {/* Mac OS Window Controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:opacity-80 transition-opacity cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 hover:opacity-80 transition-opacity cursor-pointer"></div>
          <span className="ml-3 text-xs text-gray-400 font-medium hidden sm:inline-block">
            nisal@developer-station: ~/{currentTab.id}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-lg text-xs font-semibold transition-all disabled:opacity-50"
            title="Execute simulation"
          >
            {isRunning ? (
              <span className="animate-spin text-[10px]">⚙️</span>
            ) : runSuccess ? (
              <FaCheckCircle className="text-emerald-400" />
            ) : (
              <FaPlay className="text-[10px]" />
            )}
            <span className="hidden sm:inline">
              {isRunning ? 'Compiling...' : runSuccess ? 'Compiled 0 errors' : 'Run Test'}
            </span>
          </button>

          <button
            onClick={handleCopy}
            className="p-1.5 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg text-xs transition-colors"
            title="Copy code"
          >
            {copied ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center bg-gray-900/40 border-b border-gray-800/80 px-2 overflow-x-auto">
        {tabsData.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-medium border-b-2 transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-red-500 text-white bg-gray-800/50'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/20'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-6 overflow-x-auto bg-gradient-to-b from-gray-950 to-gray-900/90 max-h-[380px] custom-scrollbar">
        <div className="table w-full">
          {formatCode(currentTab.code)}
        </div>
      </div>

      {/* Terminal Footer Info Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900/90 border-t border-gray-800/80 text-[11px] text-gray-500">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            TypeScript 5.8
          </span>
          <span className="hidden sm:inline">UTF-8</span>
          <span className="hidden sm:inline">Prettier Active</span>
        </div>
        <span className="text-gray-400 font-medium">SLIIT IT Undergraduate</span>
      </div>
    </motion.div>
  );
};

export default DevTerminal;
