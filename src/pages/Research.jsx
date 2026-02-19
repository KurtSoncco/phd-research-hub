const Research = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <header className="space-y-4 border-b border-slate-800 pb-8">
                <h1 className="text-4xl font-bold text-white">Research</h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                    My research focuses on robust surrogated earthquake physical simulators and probabilistic spatial correlated generation of site analysis.
                </p>
            </header>

            <div className="space-y-8">
                <section>
                    <h2 className="text-2xl font-semibold text-teal-400 mb-6">Publications & Preprints</h2>
                    <div className="space-y-6">
                        {/* Research Item 1 */}
                        <div className="group relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                            <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                Generative AI application for Vs profile generation
                            </h3>
                            <p className="text-slate-400 mt-1">
                                Study of Generative models and algorithms for generation of Vs profiles, conditional on real measurements.
                            </p>
                            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                                <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 border border-blue-900/50">In Progress</span>
                                <span>•</span>
                                <span>Preprint pending</span>
                            </div>
                        </div>

                        {/* Research Item 2 */}
                        <div className="group relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                            <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                Liquefaction definition by AI-generated relations
                            </h3>
                            <p className="text-slate-400 mt-1">
                                An study of symbolic regression approach for Liquefaction data.
                            </p>
                            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                                <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 border border-blue-900/50">In Progress</span>
                                <span>•</span>
                                <span>Preprint pending</span>
                            </div>
                        </div>

                        {/* Research Item 3 */}
                        <div className="group relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                            <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                Surrogated Wave Propagation model by Operator Learning
                            </h3>
                            <p className="text-slate-400 mt-1">
                                An study of surrogate physics model of elastic wave propagation into layered medium.
                            </p>
                            <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                                <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-300 border border-blue-900/50">In Progress</span>
                                <span>•</span>
                                <span>Preprint pending</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Research;
