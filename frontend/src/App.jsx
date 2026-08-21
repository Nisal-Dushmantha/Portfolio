import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import AllProjects from './components/AllProjects';
import ProjectDetail from './components/ProjectDetail';
import { ThemeProvider } from './context/ThemeContext';
import FloatingThemeSwitcher from './components/ui/FloatingThemeSwitcher';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App min-h-screen bg-white dark:bg-[#0b0f19] text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
          {/* Always-visible Floating Theme Switcher Button */}
          <FloatingThemeSwitcher />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
