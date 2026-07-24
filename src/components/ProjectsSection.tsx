import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Eye, 
  Sparkles, 
  Clock, 
  Layers,
  Play
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (projectId: string) => void;
  onOpenLiveDemo: (project: Project) => void;
  onOpenOrderWithProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenLiveDemo,
  onOpenOrderWithProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Demos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All Demos',
    'E-Commerce',
    'Portfolio & Brand',
    'Blog Website',
    'Restaurant Website',
    'Gym & Fitness',
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All Demos' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#050505]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111] border border-white/10 text-xs font-mono uppercase tracking-widest text-blue-400">
            <Layers className="w-3.5 h-3.5" />
            <span>// Skyloop Demos & Completed Work</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            See How Ahmed <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Builds Websites
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 font-light">
            Check out website demos across E-Commerce, Portfolios, Blogs, Restaurants, and Gyms built by Ahmed Raza Khan. Click "Live Demo" to inspect how your future website will look!
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#111] p-3 rounded-2xl border border-white/10 backdrop-blur-md">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search website demos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-[#050505] border border-white/10 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl bg-[#111] border border-white/10 overflow-hidden hover:border-blue-500 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  {/* Image & Header Overlay */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#050505]">
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.accentBg} opacity-60 group-hover:opacity-40 transition-opacity z-10`} />

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      referrerPolicy="no-referrer"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 z-20">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#050505]/90 border border-white/10 text-blue-400 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Metric Badge */}
                    {project.metrics && (
                      <div className="absolute top-3 right-3 z-20">
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#050505]/90 border border-blue-500/40 text-blue-300 backdrop-blur-md flex items-center gap-1">
                          <span>{project.metrics.label}:</span>
                          <span>{project.metrics.value}</span>
                        </span>
                      </div>
                    )}

                    {/* Completion Time */}
                    <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1 text-[10px] font-mono text-white/60 bg-[#050505]/90 px-2.5 py-1 rounded-md border border-white/10">
                      <Clock className="w-3 h-3 text-blue-400" />
                      <span>Delivery: {project.completionTime}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-white/50 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-white/70 line-clamp-2 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/5 text-white/60 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenLiveDemo(project)}
                      className="py-2.5 rounded-full font-mono font-bold uppercase tracking-wider text-xs text-white bg-blue-600 hover:bg-blue-500 transition-all flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30"
                      id={`project-live-demo-${project.id}`}
                    >
                      <Play className="w-3.5 h-3.5 fill-white text-white" />
                      <span>Live Demo</span>
                    </button>

                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="py-2.5 rounded-full font-mono font-bold uppercase tracking-wider text-xs text-white/80 bg-[#1a1a1a] hover:bg-[#252525] border border-white/10 transition-all flex items-center justify-center gap-1.5"
                      id={`project-view-${project.id}`}
                    >
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                      <span>Details</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onOpenOrderWithProject(project.title)}
                    className="w-full py-2 rounded-full text-[10px] font-mono uppercase tracking-wider text-white/50 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3 h-3 text-blue-400" />
                    <span>Order Website Like This</span>
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-[#111] rounded-2xl border border-white/10 mt-8 space-y-3">
            <p className="text-white/60 text-sm">No website demos found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory('All Demos');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-blue-600 text-xs font-mono font-bold text-white uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
