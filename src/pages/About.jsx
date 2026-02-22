import { Mail, Github, Linkedin, MapPin, Download, GraduationCap, BookOpen, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="space-y-20 animate-in fade-in duration-700">

            {/* ── My Story ── */}
            <section className="andean-card rounded-2xl p-8 md:p-10 relative overflow-hidden">
                {/* Decorative chakana watermark */}
                <div className="absolute right-6 top-6 opacity-5 pointer-events-none select-none">
                    <svg width="120" height="120" viewBox="0 0 30 30" fill="#d4a017">
                        <rect x="10" y="0" width="10" height="30" />
                        <rect x="0" y="10" width="30" height="10" />
                        <rect x="10" y="10" width="10" height="10" fill="#130d06" />
                    </svg>
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <Heart size={18} style={{ color: '#c25b3f' }} />
                    <h2 className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#c25b3f' }}>My Story</h2>
                </div>

                <h3 className="text-3xl font-bold font-heading text-andean mb-6">From the Andes to Berkeley</h3>

                <div className="space-y-4 text-base leading-relaxed" style={{ color: '#a09080' }}>
                    <p>
                        I grew up in <span className="font-semibold" style={{ color: '#e07a5f' }}>Cusco, Perú</span> — the ancient capital of the Inca Empire — surrounded by stone temples, highland agriculture, and a community that has always found ingenious solutions to complex terrain. That upbringing taught me to see engineering not as an abstract discipline, but as a <em>deeply human</em> one.
                    </p>
                    <p>
                        As a <span className="font-semibold" style={{ color: '#d4a017' }}>Quechua-heritage scholar</span>, I am one of the few LatinX researchers at the intersection of geotechnical engineering and machine learning. I believe that bringing diverse perspectives to scientific problems isn't just equitable — it's the fastest path to creative, lasting solutions.
                    </p>
                    <p>
                        My PhD at UC Berkeley focuses on building <span className="font-semibold" style={{ color: '#4a8a5f' }}>surrogate AI simulators</span> for earthquake site response — work that could one day make seismic risk assessment accessible to communities in the Andes and beyond, not just well-funded labs.
                    </p>
                </div>
            </section>

            {/* ── Main grid ── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Profile Photo */}
                    <div
                        className="aspect-square rounded-2xl overflow-hidden relative group shadow-2xl"
                        style={{ border: '1px solid rgba(212,160,23,0.25)' }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                            onError={e => { e.target.onerror = null; e.target.src = `${import.meta.env.BASE_URL}images/cover.jpg`; }}
                            alt="Kurt Soncco Sinchi"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                    {/* Contact Card */}
                    <div className="glass-card p-6 rounded-2xl space-y-5">
                        <h3 className="text-base font-semibold border-b pb-2" style={{ color: '#d4a017', borderColor: 'rgba(212,160,23,0.2)' }}>Contact</h3>
                        <div className="space-y-3">
                            <a href="mailto:kurtwal98@berkeley.edu" className="flex items-center gap-3 transition-colors group hover:text-terracotta" style={{ color: '#a09080' }}>
                                <div className="p-2 rounded-lg" style={{ background: 'rgba(194,91,63,0.12)' }}>
                                    <Mail size={16} style={{ color: '#c25b3f' }} />
                                </div>
                                <span className="text-sm">kurtwal98@berkeley.edu</span>
                            </a>
                            <div className="flex items-center gap-3" style={{ color: '#6a5a4a' }}>
                                <div className="p-2 rounded-lg" style={{ background: 'rgba(212,160,23,0.08)' }}>
                                    <MapPin size={16} style={{ color: '#d4a017' }} />
                                </div>
                                <span className="text-sm">Albany, CA · Berkeley, CA</span>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                            {[
                                { href: 'https://github.com/KurtSoncco', icon: <Github size={18} />, color: '#c25b3f' },
                                { href: 'https://www.linkedin.com/in/kurtsonccosinchi/', icon: <Linkedin size={18} />, color: '#d4a017' },
                                { href: 'https://scholar.google.com/citations?user=X4Zw3cEAAAAJ', icon: <GraduationCap size={18} />, color: '#2d5a3d' },
                            ].map(({ href, icon, color }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 p-2.5 rounded-xl flex justify-center transition-all hover:scale-105"
                                    style={{ background: `${color}15`, color }}
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-14">
                    {/* Education */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold font-heading text-andean">Education</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    school: 'University of California, Berkeley',
                                    degree: 'PhD in Civil Engineering (Geosystems)',
                                    date: 'Expected May 2028',
                                    details: ['GPA: 3.89/4.00', 'Minors: Structural Eng., High Computing & Data Science'],
                                    color: '#c25b3f',
                                    active: true,
                                },
                                {
                                    school: 'University of Illinois Urbana-Champaign',
                                    degree: 'MS in Structural Engineering',
                                    date: 'May 2023',
                                    details: ['GPA: 3.79/4.00', 'Minor: Data Science'],
                                    color: '#d4a017',
                                    active: false,
                                },
                                {
                                    school: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
                                    degree: 'BS in Civil Engineering',
                                    date: 'May 2018',
                                    details: ['GPA: 16.55/20.00'],
                                    color: '#2d5a3d',
                                    active: false,
                                },
                            ].map((edu, idx) => (
                                <div
                                    key={idx}
                                    className="relative pl-8 border-l-2 transition-colors group"
                                    style={{ borderColor: edu.active ? edu.color : 'rgba(255,255,255,0.1)' }}
                                >
                                    <div
                                        className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 transition-colors"
                                        style={{ background: '#130d06', borderColor: edu.active ? edu.color : 'rgba(255,255,255,0.2)' }}
                                    />
                                    <div className="flex justify-between items-start flex-wrap gap-2">
                                        <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                                        <span className="text-xs font-mono px-2 py-1 rounded-md" style={{ color: edu.color, background: `${edu.color}15` }}>{edu.date}</span>
                                    </div>
                                    <p className="mt-1" style={{ color: '#c8b89a' }}>{edu.degree}</p>
                                    <div className="mt-2 rounded-lg p-3 text-sm space-y-1" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                                        {edu.details.map((d, i) => (
                                            <p key={i} style={{ color: '#6a5a4a' }}>• <span style={{ color: '#8a8070' }}>{d}</span></p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Technical Skills */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold font-heading text-andean">Technical Skills</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {[
                                { category: 'Programming', skills: 'Python, MATLAB, C++, SQL, LaTeX', color: '#c25b3f' },
                                { category: 'AI & HPC', skills: 'Gemini Agents, LangGraph (RAG), GNNs, Savio HPC, OpenSees', color: '#d4a017' },
                                { category: 'Structural Apps', skills: 'ABAQUS, ANSYS, ETABS, SAP2000, RISA 3D, CYPE', color: '#3b2f6e' },
                                { category: 'Geotech Apps', skills: 'PLAXIS 3D/2D, FLAC3D/2D, SLOPE W, DeepSoil', color: '#2d5a3d' },
                                { category: 'Engineering/BIM', skills: 'Revit, Dynamo, Civil 3D, Navisworks, Power BI', color: '#8c3a25' },
                                { category: 'Languages', skills: 'Spanish (Native), English (Fluent), French, Quechua', color: '#a07810' },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="andean-card rounded-xl p-4"
                                    style={{ borderLeftColor: item.color, borderLeftWidth: '3px' }}
                                >
                                    <h4 className="text-xs uppercase tracking-wider font-semibold mb-1.5" style={{ color: item.color }}>{item.category}</h4>
                                    <p className="text-sm leading-relaxed" style={{ color: '#8a7a6a' }}>{item.skills}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Leadership */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold font-heading text-andean">Leadership &amp; Activities</h2>
                        <div className="space-y-3">
                            {[
                                { role: 'Fellow, Data Science for Justice', desc: 'Selected (1/1000+) for interdisciplinary LLM data scraping projects.', year: '2024', color: '#c25b3f' },
                                { role: 'Fellow, Berkeley Leadership Academy', desc: 'Selected (1/450) for UCB\'s inaugural leadership program.', year: '2024', color: '#d4a017' },
                                { role: 'President, Peruvian Student Org (UIUC)', desc: 'Won Best International Org 2023; led cultural and culinary events.', year: '2023', color: '#2d5a3d' },
                                { role: 'UPC Excellence Students Program', desc: '2-year Transcendent Leadership scholarship (Top 10% of university).', color: '#3b2f6e' },
                                { role: 'MIT Leading Innovation Program', desc: 'Completed MIT Professional Education in ML and innovation frameworks.', color: '#8c3a25' },
                            ].map((item, idx) => (
                                <div key={idx} className="andean-card rounded-xl p-4 flex gap-4 items-start group">
                                    <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 transition-transform group-hover:scale-150" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}80` }} />
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">
                                            {item.role}
                                            {item.year && <span className="ml-2 text-xs font-normal" style={{ color: '#6a5a4a' }}>{item.year}</span>}
                                        </h4>
                                        <p className="text-xs mt-1 leading-relaxed" style={{ color: '#6a5a4a' }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            {/* ── Let's Collaborate ── */}
            <section
                className="rounded-2xl p-8 md:p-12 text-center space-y-6 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(194,91,63,0.12) 0%, rgba(59,47,110,0.15) 50%, rgba(45,90,61,0.12) 100%)', border: '1px solid rgba(212,160,23,0.2)' }}
            >
                {/* Background Chakana */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                    <svg width="300" height="300" viewBox="0 0 30 30" fill="#d4a017">
                        <rect x="10" y="0" width="10" height="30" />
                        <rect x="0" y="10" width="30" height="10" />
                        <rect x="10" y="10" width="10" height="10" fill="#130d06" />
                    </svg>
                </div>

                <div className="relative space-y-2">
                    <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>✦ Open to Collaboration ✦</p>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-andean">Let's Collaborate</h2>
                    <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: '#a09080' }}>
                        I'm always open to discussing <span style={{ color: '#d4a017' }}>Geotechnical AI</span>, research collaborations, or sharing experiences as a LatinX scholar in academia.
                    </p>
                </div>

                {/* CTA Links */}
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                    <a
                        href={`${import.meta.env.BASE_URL}cv.pdf`}
                        className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 text-white shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #c25b3f, #d4a017)', boxShadow: '0 4px 20px rgba(194,91,63,0.35)' }}
                    >
                        <Download size={18} /> Download CV
                    </a>
                    <a
                        href="https://scholar.google.com/citations?user=X4Zw3cEAAAAJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 border"
                        style={{ borderColor: 'rgba(212,160,23,0.4)', color: '#d4a017' }}
                    >
                        <BookOpen size={18} /> Google Scholar
                    </a>
                    <a
                        href="https://github.com/KurtSoncco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 border"
                        style={{ borderColor: 'rgba(194,91,63,0.35)', color: '#e07a5f' }}
                    >
                        <Github size={18} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/kurtsonccosinchi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 border"
                        style={{ borderColor: 'rgba(45,90,61,0.5)', color: '#4a8a5f' }}
                    >
                        <Linkedin size={18} /> LinkedIn
                    </a>
                    <a
                        href="mailto:kurtwal98@berkeley.edu"
                        className="px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105 border"
                        style={{ borderColor: 'rgba(255,255,255,0.1)', color: '#c8b89a' }}
                    >
                        <Mail size={18} /> kurtwal98@berkeley.edu
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
