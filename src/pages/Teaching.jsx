import { BookOpen, GraduationCap, Users } from 'lucide-react';

const Teaching = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <header className="space-y-4 border-b border-slate-800 pb-8">
                <h1 className="text-4xl font-bold text-white">Teaching</h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                    Experience in academic instruction and mentorship in civil engineering and AI.
                </p>
            </header>

            <div className="space-y-12">
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-teal-400 flex items-center gap-2">
                        <GraduationCap size={24} />
                        Instructor & GSI Roles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* UC Berkeley */}
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                    <BookOpen size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">UC Berkeley</h3>
                                    <p className="text-slate-400 text-sm">Graduate Student Instructor</p>
                                </div>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-start border-b border-slate-700/50 pb-2">
                                    <span className="text-slate-200 font-medium">E7: Intro to Computer Programming for Scientists and Engineers</span>
                                    <span className="text-teal-400 text-sm font-mono whitespace-nowrap ml-4">Fall '24, '25</span>
                                </li>
                                <li className="flex justify-between items-start pt-2">
                                    <span className="text-slate-200 font-medium">CE93: Data Analysis for Civil Engineers</span>
                                    <span className="text-teal-400 text-sm font-mono whitespace-nowrap ml-4">Spring '25</span>
                                </li>
                            </ul>
                        </div>

                        {/* UPC */}
                        <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500 transition-colors group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">UPC, Lima</h3>
                                    <p className="text-slate-400 text-sm">Graduate Student Instructor</p>
                                </div>
                            </div>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Earthquake Engineering
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Structural Analysis
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Solid Mechanics
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-gradient-to-r from-blue-900/20 to-teal-900/20 p-8 rounded-2xl border border-slate-700/50">
                    <h2 className="text-xl font-bold text-white mb-4">Teaching Philosophy</h2>
                    <p className="text-slate-300 leading-relaxed max-w-4xl">
                        I believe in democratizing access to advanced computational tools. By integrating AI agents and RAG workflows into the curriculum (as seen in my work with the AI4CEE initiative), I aim to empower students to tackle complex engineering problems with modern, data-driven approaches. My goal is to bridge the gap between theoretical mechanics and practical, high-performance computing applications.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Teaching;
