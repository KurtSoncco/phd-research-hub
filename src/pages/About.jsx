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
                                    <span className="text-teal-400 font-mono text-sm">May 2028 (Expected)</span>
                                </div>
                                <p className="text-lg text-slate-300">PhD in Civil Engineering</p>
                                <p className="text-sm text-slate-500 mb-2">Major: Geosystems Engineering</p>
                                <div className="text-slate-400 text-sm space-y-1 bg-slate-800/30 p-3 rounded-lg">
                                    <p>• <span className="text-slate-300">GPA:</span> 4.00/4.00</p>
                                    <p>• <span className="text-slate-300">Minor:</span> Structural Engineering, High Computing and Data Science Applications</p>
                                </div>
                            </div>

                            {/* Master's */}
                            <div className="relative pl-8 border-l-2 border-slate-700 hover:border-blue-500 transition-colors group">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-blue-500 transition-colors" />
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <h3 className="text-xl font-bold text-white">University of Illinois Urbana-Champaign</h3>
                                    <span className="text-slate-500 font-mono text-sm">May 2023</span>
                                </div>
                                <p className="text-lg text-slate-300">Master's in Science in Structural Engineering</p>
                                <div className="text-slate-400 text-sm space-y-1 bg-slate-800/30 p-3 rounded-lg mt-2">
                                    <p>• <span className="text-slate-300">GPA:</span> 4.00/4.00</p>
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
                                <p className="text-lg text-slate-300">Bachelor of Science in Civil Engineering</p>
                                <div className="text-slate-400 text-sm space-y-1 bg-slate-800/30 p-3 rounded-lg mt-2">
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
                                { category: "Programming", skills: "Python, MATLAB, C++, LaTeX, SQL" },
                                { category: "Structural", skills: "ETABS, SAP 2000, Robot Structural, RISA 3D, ABAQUS, ANSYS, CYPE" },
                                { category: "Geotechnical", skills: "PLAXIS 3D/2D, SLOPE W, DeepSoil, FLAC2D/3D" },
                                { category: "BIM & Tools", skills: "AutoCAD, Revit, Dynamo, Civil 3D, MathCad, Navisworks, Power BI" },
                                { category: "Languages", skills: "Spanish, English, French, Quechua" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors">
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
                                { role: "DataScience for Justice Fellow", desc: "Selected from 1,000+ applicants for an interdisciplinary LLM/data scraping project.", year: "2023–2024" },
                                { role: "Berkeley Leadership Academy Fellow", desc: "Participated in the university's first leadership program (selected from 450 students)." },
                                { role: "President, Peruvian Student Organization (UIUC)", desc: "Led the organization to win 'Best International Student Organization' at UIUC in 2023." },
                                { role: "UPC Excellence Students Group", desc: "2-year Transcendent Leadership scholarship for top 10% students." },
                                { role: "Santander Scholarships", desc: "Participated in MIT Professional Education programs for 'Leading Innovation' and 'Machine Learning'." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 items-start group">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
                                    <div>
                                        <h4 className="font-semibold text-white">{item.role} <span className="text-slate-500 text-sm font-normal">{item.year}</span></h4>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
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

