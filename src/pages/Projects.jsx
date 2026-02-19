import { Github, ExternalLink, Star, GitFork, Trophy, Cpu, Database } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "GNN Framework for Inverse Structural Design",
            desc: "Won 1st Place at NHERI 2024 Hackathon (TACC). A Graph Neural Network framework for optimizing structural designs.",
            tags: ["Python", "GNN", "Structural Optimization", "Hackathon Winner"],
            repo: "https://github.com/KurtSoncco", // Placeholder if no specific repo provided
            status: "Completed",
            icon: <Trophy className="text-yellow-400" size={20} />
        },
        {
            title: "MechGAIA-AgentBeats",
            desc: "Agentic implementation of the MechGAIA structural framework. Automating structural analysis workflows using AI agents.",
            tags: ["AI Agents", "Python", "Structural Engineering"],
            repo: "https://github.com/KurtSoncco",
            status: "In Progress",
            icon: <Cpu className="text-teal-400" size={20} />
        },
        {
            title: "LLM-based Concrete Mix Design",
            desc: "Small-to-medium local LLM development for specialized concrete design optimization. Poster presented in Spring Machine Learning School by YuyayAI Lab mentees.",
            tags: ["LLM", "Materials Science", "Optimization"],
            repo: "https://github.com/KurtSoncco",
            status: "Completed",
            icon: <Database className="text-blue-400" size={20} />
        },
        {
            title: "Generative AI for Vs profiles",
            desc: "Study of Generative models and algorithms for generation of Vs profiles, conditional on real measurements.",
            tags: ["Python", "PyTorch", "Generative AI"],
            repo: "https://github.com/KurtSoncco/gen-ai-soil-profiles.git",
            status: "In Progress"
        },
        {
            title: "Symbolic AI for Liquefaction",
            desc: "Symbolic regression approach for Liquefaction data analysis and definition.",
            tags: ["Python", "Symbolic Regression", "Geotech"],
            repo: "https://github.com/KurtSoncco/symbolic-ai-liquefaction",
            status: "In Progress"
        },
        {
            title: "Surrogate Seismic Waves",
            desc: "Surrogate physics model of elastic wave propagation into layered medium using Operator Learning.",
            tags: ["Deep Learning", "Physics-Informed", "Seismology"],
            repo: "https://github.com/KurtSoncco/surrogate-seismic-waves",
            status: "In Progress"
        }
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <header className="space-y-4 border-b border-slate-800 pb-8">
                <h1 className="text-4xl font-bold text-white">Technical Projects</h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                    Open-source implementations, hackathon wins, and experimental AI projects.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <div key={idx} className="flex flex-col h-full bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-500 transition-all hover:shadow-lg hover:shadow-blue-900/10 group">
                        <div className="p-6 flex-grow space-y-4">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                                    {project.icon}
                                    {project.title}
                                </h3>
                                <span className={`px-2 py-1 text-xs rounded-full border ${project.status === 'Completed'
                                        ? 'bg-emerald-900/30 text-emerald-400 border-emerald-900/50'
                                        : 'bg-slate-700 text-slate-300 border-slate-600'
                                    }`}>
                                    {project.status}
                                </span>
                            </div>

                            <p className="text-slate-400 text-sm leading-relaxed">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="px-6 py-4 bg-slate-900/50 border-t border-slate-800 flex justify-between items-center">
                            <div className="flex gap-4 text-slate-500 text-sm">
                                <span className="flex items-center gap-1"><Star size={14} /> 0</span>
                                <span className="flex items-center gap-1"><GitFork size={14} /> 0</span>
                            </div>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                <Github size={16} />
                                View Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
