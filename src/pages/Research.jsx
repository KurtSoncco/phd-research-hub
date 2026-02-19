const Research = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <header className="space-y-4 border-b border-slate-800 pb-8">
                <h1 className="text-4xl font-bold text-white">Research & Publications</h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                    My research focuses on robust surrogated earthquake physical simulators and probabilistic spatial correlated generation of site analysis.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Active Research Projects */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-teal-400 flex items-center gap-2">
                        Active Projects
                    </h2>
                    <div className="space-y-8">
                        {/* Research Item 1 */}
                        <div className="group relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                            <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                Generative AI application for Vs profile generation
                            </h3>
                            <p className="text-slate-400 mt-1">
                                Study of Generative models and algorithms for generation of Vs profiles, conditional on real measurements.
                            </p>
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
                        </div>
                    </div>
                </section>

                {/* Publications & Talks */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-blue-400 flex items-center gap-2">
                        Publications & Talks
                    </h2>

                    <div className="space-y-6">
                        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-white mb-3">Indexed Journals</h3>
                            <ul className="space-y-3 text-slate-300 list-disc pl-4 marker:text-blue-500">
                                <li>
                                    <span>Research on "Bending analysis of Micropolar Beams"</span>
                                </li>
                                <li>
                                    <span>Biomass sensing using UAS-mounted radar</span>
                                </li>
                                <li className="text-slate-500 italic">
                                    Multiple papers on post-buckling analysis (To be submitted)
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-white mb-3">Conference Papers</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex gap-2">
                                    <span className="text-blue-400 font-mono text-sm">2023</span>
                                    <span>IEEE Presentation</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-blue-400 font-mono text-sm">2020</span>
                                    <span>ASAEE Presentation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-white mb-3">Invited Talks</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li>
                                    <p className="font-medium">New structural engineering technologies and international experiences</p>
                                    <p className="text-sm text-slate-500">UPC, Lima (2023)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default Research;
