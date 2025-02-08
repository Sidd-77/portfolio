import { useState, useEffect } from 'react';
import { Terminal, MapPin, Building2, Mail, Github, Linkedin, ArrowRight, Command, Sparkles, Code2, Award, Calendar, FileText } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import portfolioData from './data/portfolio.json';

function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center pt-[20vh] z-50" onClick={onClose}>
      <div className="bg-[#0c1118] border border-slate-800 rounded-lg w-full max-w-md p-4" onClick={e => e.stopPropagation()}>
        <div className="flex items-center gap-2 text-slate-500 mb-4">
          <Command size={14} />
          <span>Command Palette</span>
        </div>
        <div className="space-y-2">
          <NavLink to="/" className="block p-2 hover:bg-slate-800 rounded transition-colors" onClick={onClose}>
            Jump to Home
          </NavLink>
          <NavLink to="/blog" className="block p-2 hover:bg-slate-800 rounded transition-colors" onClick={onClose}>
            Jump to Blog
          </NavLink>
          <NavLink to="/projects" className="block p-2 hover:bg-slate-800 rounded transition-colors" onClick={onClose}>
            Jump to Projects
          </NavLink>
          <a href={portfolioData.links.resume} className="block p-2 hover:bg-slate-800 rounded transition-colors">
            View Resume
          </a>
          <a href={`mailto:${portfolioData.links.email}`} className="block p-2 hover:bg-slate-800 rounded transition-colors">
            Send Email
          </a>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  const location = useLocation();
  return (
    <nav className="flex gap-6 text-sm mb-12 text-slate-400">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive ? "text-slate-100" : "hover:text-slate-300 transition-colors"
        }
      >
        [ home ]
      </NavLink>
      <NavLink 
        to="/blog" 
        className={({ isActive }) => 
          isActive ? "text-slate-100" : "hover:text-slate-300 transition-colors"
        }
      >
        [ blog ]
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => 
          isActive ? "text-slate-100" : "hover:text-slate-300 transition-colors"
        }
      >
        [ projects ]
      </NavLink>
    </nav>
  );
}

function TerminalHeader() {
  const location = useLocation();
  const path = location.pathname === '/' ? '~/portfolio' : `~/portfolio${location.pathname}`;
  
  return (
    <div className="border border-slate-800 rounded-lg p-4 mb-12 bg-[#0c1118]">
      <div className="flex items-center gap-2 mb-4 text-slate-500">
        <Terminal size={14} />
        <span>{path}</span>
      </div>
      <div className="space-y-2">
        <p className="text-emerald-400">$ whoami</p>
        <h1 className="text-3xl font-bold text-slate-100">{portfolioData.basics.name}</h1>
        <div className="flex items-center gap-2 text-sm">
          <MapPin size={14} className="text-purple-400" />
          <span>{portfolioData.basics.location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Building2 size={14} className="text-purple-400" />
          <span>{portfolioData.basics.role}</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="space-y-12">
      <section className="max-w-2xl">
        <p className="leading-relaxed text-slate-300">{portfolioData.basics.about}</p>
      </section>

      {/* Experience */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Terminal size={16} className="text-purple-400" />
          <h2 className="text-lg font-semibold text-slate-100">work</h2>
        </div>
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="group max-w-2xl">
              <div className="flex items-center gap-2 text-slate-100">
                <ArrowRight size={14} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3>{exp.company}</h3>
              </div>
              <p className="text-sm text-slate-400 ml-6">{exp.role} • {exp.period}</p>
              <p className="text-sm ml-6 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Code2 size={16} className="text-purple-400" />
          <h2 className="text-lg font-semibold text-slate-100">skills</h2>
        </div>
        <div className="space-y-4 max-w-2xl">
          {Object.entries(portfolioData.skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm text-slate-400 mb-2">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded bg-slate-800/50 border border-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Blog() {
  return (
    <div className="max-w-2xl">
      <div className="space-y-6">
        {portfolioData.writing.map((post, index) => (
          <a key={index} href={post.link} className="block group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowRight size={14} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-slate-100 group-hover:text-slate-300 transition-colors">
                  {post.title}
                </span>
              </div>
              <span className="text-sm text-slate-500 flex items-center gap-2">
                <Calendar size={12} />
                {post.date}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="max-w-2xl">
      <div className="space-y-8">
        {portfolioData.projects.map((project, index) => (
          <a key={index} href={project.link} className="block group">
            <div className="flex items-center gap-2">
              <ArrowRight size={14} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-slate-100 group-hover:text-slate-300 transition-colors">
                {project.name}
              </h3>
            </div>
            <p className="text-sm text-slate-400 ml-6">{project.role}</p>
            <p className="text-sm ml-6 mt-2">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800 pt-8">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <a href={`mailto:${portfolioData.links.email}`} className="hover:text-purple-400 transition-colors flex items-center gap-2">
            <Mail size={16} /> email
          </a>
          <a href={portfolioData.links.github} className="hover:text-purple-400 transition-colors flex items-center gap-2">
            <Github size={16} /> github
          </a>
          <a href={portfolioData.links.linkedin} className="hover:text-purple-400 transition-colors flex items-center gap-2">
            <Linkedin size={16} /> linkedin
          </a>
              <a href={portfolioData.links.resume} className="hover:text-purple-400 transition-colors flex items-center gap-2">
              <FileText size={16} /> resume
              </a>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-slate-500">
          <span>press</span>
          <kbd className="px-2 py-1 bg-slate-800 rounded text-xs flex items-center gap-1">
            <Command size={12} /> K
          </kbd>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [showCommand, setShowCommand] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setShowCommand(true);
    } else if (e.key === 'Escape') {
      setShowCommand(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-[#0a0f16] text-slate-300 font-mono flex flex-col">
        <div className="flex-1 p-4 md:p-12">
          <div className="max-w-4xl mx-auto">
            <TerminalHeader />
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
            </main>
          </div>
        </div>
        <div className="p-4 md:p-12">
          <div className="max-w-4xl mx-auto">
            <Footer />
          </div>
        </div>
        <CommandPalette isOpen={showCommand} onClose={() => setShowCommand(false)} />
      </div>
    </Router>
  );
}

export default App;