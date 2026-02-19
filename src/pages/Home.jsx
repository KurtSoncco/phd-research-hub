import { ArrowRight, Brain, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="space-y-20">
            {/* Hero Section */}
            <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <div className="space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent pb-2">
                        Kurt Soncco Sinchi
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-light">
                        PhD Candidate in Civil & Environmental Engineering
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-slate-400">
                        <span>University of California, Berkeley</span>
                        <span>•</span>
                        <span>Adviser: Prof. Mohamad Hallal</span>
                    </div>
                </div>

                <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
                    Bridging the gap between <span className="text-blue-400 font-semibold">Geotechnical Engineering</span> and <span className="text-teal-400 font-semibold">Machine Learning</span> to develop robust surrogate physical simulators and probabilistic spatial analysis tools.
                </p>

                <div className="flex justify-center gap-4 pt-4">
                    <Link to="/research" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all hover:scale-105 flex items-center gap-2">
                        View Research <ArrowRight size={18} />
                    </Link>
                    <Link to="/projects" className="px-6 py-3 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold transition-all hover:scale-105">
                        Explore Projects
                    </Link>
                </div>
            </section>

            {/* Featured Areas */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        icon: <Activity size={32} className="text-blue-400" />,
                        title: "Simulators",
                        desc: "Developing surrogate models for earthquake physical simulators."
                    },
                    {
                        icon: <Brain size={32} className="text-teal-400" />,
                        title: "Machine Learning",
                        desc: "Applying generative AI for Vs profile generation and liquefaction analysis."
                    },
                    {
                        icon: <Database size={32} className="text-emerald-400" />,
                        title: "Site Analysis",
                        desc: "Probabilistic spatial correlated generation for site characterization."
                    }
                ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors">
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-slate-400">{item.desc}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
