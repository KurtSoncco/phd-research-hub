import { Mail, Github, Linkedin, MapPin, Phone, Download } from 'lucide-react';

const About = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Sidebar Info */}
                <div className="space-y-8">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 relative group shadow-2xl shadow-blue-900/10">
                        <img
                            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                            onError={(e) => {
                                e.target.onerror = null;
                                // Fallback to cover if profile doesn't exist, or placeholder
                                e.target.src = `${import.meta.env.BASE_URL}images/cover.jpg`;
                            }}
                            alt="Kurt Soncco Sinchi"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    <div className="glass-card p-6 rounded-2xl space-y-6">
                        <h3 className="text-xl font-semibold text-white border-b border-slate-700 pb-2">Contact</h3>
                        <div className="space-y-4 text-slate-300">
                            <a href="mailto:kurtwal98@berkeley.edu" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                                <div className="p-2 rounded-lg bg-slate-800 group-hover:bg-blue-900/30 transition-colors">
                                    <Mail size={18} />
                                </div>
                                <span className="text-sm">kurtwal98@berkeley.edu</span>
                            </a>
                            <div className="flex items-center gap-3 text-slate-400 group">
                                <div className="p-2 rounded-lg bg-slate-800">
                                    <Phone size={18} />
                                </div>
                                <span className="text-sm">217-974-0919</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-400 group">
                                <div className="p-2 rounded-lg bg-slate-800">
                                    <MapPin size={18} />
                                </div>
                                <span className="text-sm">580 Ohlone Avenue, Apt 306<br />Albany, CA</span>
                            </div>
                        </div>

                        <div className="pt-4 flex gap-3">
                            <a href="https://github.com/KurtSoncco" target="_blank" rel="noopener noreferrer" className="flex-1 p-2 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex justify-center">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/kurtsonccosinchi/" target="_blank" rel="noopener noreferrer" className="flex-1 p-2 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex justify-center">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">
                    {/* Education Section */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Education</h2>
                        <div className="space-y-8">
                            {/* PhD */}
                            <div className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors group">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">University of California, Berkeley</h3>
                                    <span className="text-teal-400 font-mono text-sm">Expected May 2028</span>
                                </div>
                                <p className="text-lg text-slate-300">PhD in Civil Engineering (Geosystems)</p>
                                <div className="text-slate-400 text-sm space-y-1 bg-slate-800/30 p-3 rounded-lg mt-2 border border-slate-700/50">
                                    <p>• <span className="text-slate-300">GPA:</span> 3.89/4.00</p>
                                    <p>• <span className="text-slate-300">Minors:</span> Structural Engineering, High Computing, and Data Science Applications</p>
                                </div>
                            </div>

                            {/* Master's */}
                            <div className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors group">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">University of Illinois Urbana-Champaign</h3>
                                    <span className="text-slate-500 font-mono text-sm">May 2023</span>
                                </div>
                                <p className="text-lg text-slate-300">MS in Structural Engineering</p>
                                <div className="text-slate-400 text-sm space-y-1 bg-slate-800/30 p-3 rounded-lg mt-2 border border-slate-700/50">
                                    <p>• <span className="text-slate-300">GPA:</span> 3.79/4.00</p>
                                    <p>• <span className="text-slate-300">Minor:</span> Data Science</p>
                                </div>
                            </div>

                            {/* Bachelor's */}
                            <div className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors group">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">Universidad Peruana de Ciencias Aplicadas (UPC)</h3>
                                    <span className="text-slate-500 font-mono text-sm">May 2018</span>
                                </div>
                                <p className="text-lg text-slate-300">BS in Civil Engineering</p>
                                <div className="text-slate-400 text-sm space-y-1 bg-slate-800/30 p-3 rounded-lg mt-2 border border-slate-700/50">
                                    <p>• <span className="text-slate-300">GPA:</span> 16.55/20.00</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { category: "Programming", skills: "Python (SFT, Agents), MATLAB, C++, SQL, LaTeX" },
                                { category: "AI & HPC", skills: "Gemini Coding Agents, LangGraph (RAG), GNNs, Savio HPC (Parallel OpenSees)" },
                                { category: "Structural Apps", skills: "ABAQUS, ANSYS, ETABS, SAP2000, Robot Structural, RISA 3D, CYPE" },
                                { category: "Geotech Apps", skills: "PLAXIS 3D/2D, FLAC3D/2D, SLOPE W, DeepSoil" },
                                { category: "Engineering/BIM", skills: "Revit, Dynamo, Civil 3D, Navisworks, Power BI, Power Query, Autodesk Cloud" },
                                { category: "Languages", skills: "Spanish (Native), English (Fluent), French, Quechua" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors hover:bg-slate-800/80">
                                    <h4 className="text-sm uppercase tracking-wider text-teal-400 font-semibold mb-2">{item.category}</h4>
                                    <p className="text-slate-300 text-sm leading-relaxed">{item.skills}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Leadership */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Leadership & Activities</h2>
                        <div className="space-y-4">
                            {[
                                { role: "Fellow, Data Science for Justice", desc: "Selected (1/1000+) for interdisciplinary LLM data scraping projects.", year: "2024" },
                                { role: "Fellow, Berkeley Leadership Academy", desc: "Selected (1/450) for UCB's inaugural leadership program.", year: "2024" },
                                { role: "President, Peruvian Student Org (UIUC)", desc: "Won Best International Org 2023; led cultural and culinary events." },
                                { role: "UPC Excellence Students Program", desc: "2-year Transcendent Leadership scholarship (Top 10% of university)." },
                                { role: "MIT Leading Innovation Program", desc: "Completed MIT Professional Education in ML and innovation frameworks." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start group bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all hover:bg-slate-800/50">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                                    <div>
                                        <h4 className="font-semibold text-white group-hover:text-emerald-300 transition-colors">{item.role} <span className="text-slate-500 text-sm font-normal ml-2">{item.year}</span></h4>
                                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;

