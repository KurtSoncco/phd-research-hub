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
                            <h3 className="text-lg font-bold text-white mb-3">Journal Publications</h3>
                            <ul className="space-y-4 text-slate-300 list-none">
                                <li className="flex gap-3">
                                    <span className="text-teal-400 font-mono text-sm mt-1">2021</span>
                                    <div>
                                        <p className="leading-relaxed">
                                            <strong className="text-white">Soncco, K.</strong>, et al. "Postbuckling analysis of nonlocal functionally graded beams," <em className="text-slate-400">Latin American Journal of Solids and Structures</em>.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-teal-400 font-mono text-sm mt-1">Conf.</span>
                                    <div>
                                        <p className="leading-relaxed">
                                            <strong className="text-white">Soncco, K.</strong> "Post Buckling Analysis of Functionally Graded Beams," <em className="text-slate-400">IOP Conf. Series: Materials Science</em>, Korea.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-teal-400 font-mono text-sm mt-1">2020</span>
                                    <div>
                                        <p className="leading-relaxed">
                                            Betancourt, KN; <strong className="text-white">Soncco, K.</strong>; Arciniega, R. "Bending and Buckling of Micropolar Beams," <em className="text-slate-400">LACCEI 2020/ICBMM</em>.
                                        </p>
                                    </div>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-teal-400 font-mono text-sm mt-1">2023</span>
                                    <div>
                                        <p className="leading-relaxed">
                                            Sinchi, K.S., et al. "Under-Canopy Biomass Sensing using UAS-Mounted Radar," <em className="text-slate-400">IEEE IGARSS 2023</em>.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700 hover:border-blue-500/30 transition-colors">
                            <h3 className="text-lg font-bold text-white mb-3">Selected Presentations</h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex gap-3 items-start">
                                    <div className="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide mt-1">Keynote</div>
                                    <div>
                                        <p className="font-medium text-white">"From Complexity to Efficiency: Site Response Simulations with ML"</p>
                                        <p className="text-sm text-slate-500">GEOWEEK 2025</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="bg-emerald-900/40 text-emerald-300 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide mt-1">Invited</div>
                                    <div>
                                        <p className="font-medium text-white">"Practical Use of AI in Construction Projects"</p>
                                        <p className="text-sm text-slate-500">HLC SAC Forum, Lima (2025)</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 items-start">
                                    <div className="bg-slate-700/40 text-slate-300 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide mt-1">Talk</div>
                                    <div>
                                        <p className="font-medium text-white">New structural engineering technologies and international experiences</p>
                                        <p className="text-sm text-slate-500">UPC, Lima (2023)</p>
                                    </div>
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
