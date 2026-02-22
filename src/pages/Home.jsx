import { ArrowRight, Brain, Database, Activity, PenLine, BarChart3, Code2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const currentWork = [
    { icon: <PenLine size={15} />, text: 'Writing a paper on surrogate wave-propagation models via Neural Operators', color: '#c25b3f' },
    { icon: <BarChart3 size={15} />, text: 'Analyzing spatial correlation datasets for probabilistic site characterization', color: '#d4a017' },
    { icon: <Code2 size={15} />, text: 'Training generative AI models for Vs profile generation on Savio HPC', color: '#2d5a3d' },
];

const Home = () => {
    const [activeWork, setActiveWork] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActiveWork(w => (w + 1) % currentWork.length), 3200);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="space-y-24">
            {/* ── Hero ── */}
            <section className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 pt-6">
                {/* Profile photo */}
                <div className="flex justify-center">
                    <div className="relative group">
                        <div
                            className="w-32 h-32 rounded-full overflow-hidden border-2 shadow-2xl"
                            style={{ borderColor: 'rgba(212,160,23,0.5)', boxShadow: '0 0 40px rgba(194,91,63,0.25)' }}
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                                onError={e => { e.target.onerror = null; e.target.src = `${import.meta.env.BASE_URL}images/cover.jpg`; }}
                                alt="Kurt Soncco Sinchi"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        {/* Andean ring */}
                        <div className="absolute -inset-1 rounded-full border opacity-40 animate-pulse" style={{ borderColor: '#d4a017' }} />
                    </div>
                </div>

                <div className="space-y-3">
                    {/* Quechua greeting */}
                    <p className="text-shimmer text-sm font-semibold tracking-[0.3em] uppercase">
                        Rimaykullayki — Welcome
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-andean pb-2">
                        Kurt Soncco Sinchi
                    </h1>

                    <p className="text-xl md:text-2xl font-light" style={{ color: '#c8b89a' }}>
                        PhD Candidate in Civil &amp; Environmental Engineering
                    </p>

                    <div className="flex items-center justify-center gap-2 text-sm" style={{ color: '#8a7a6a' }}>
                        <span>University of California, Berkeley</span>
                        <span className="text-gold/40">✦</span>
                        <span>Adviser: Prof. Mohamad Hallal</span>
                    </div>
                </div>

                <p className="max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#a09080' }}>
                    As a proud <span className="font-semibold" style={{ color: '#e07a5f' }}>Quechua scholar from Cusco, Perú</span>, I bridge{' '}
                    <span className="font-semibold" style={{ color: '#d4a017' }}>Geotechnical Engineering</span> and{' '}
                    <span className="font-semibold" style={{ color: '#4a8a5f' }}>Machine Learning</span> to develop robust surrogate physical simulators and probabilistic spatial site analysis tools — bringing an inclusive, community-driven perspective to frontier science.
                </p>

                <div className="flex justify-center gap-4 pt-2 flex-wrap">
                    <Link
                        to="/research"
                        className="px-7 py-3 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2 text-white shadow-lg"
                        style={{ background: 'linear-gradient(135deg, #c25b3f, #d4a017)', boxShadow: '0 4px 20px rgba(194,91,63,0.35)' }}
                    >
                        View Research <ArrowRight size={18} />
                    </Link>
                    <Link
                        to="/about"
                        className="px-7 py-3 rounded-full font-semibold transition-all hover:scale-105 border"
                        style={{ borderColor: 'rgba(212,160,23,0.4)', color: '#d4a017' }}
                    >
                        Let's Collaborate
                    </Link>
                    <a
                        href={`${import.meta.env.BASE_URL}cv.pdf`}
                        className="px-7 py-3 rounded-full font-semibold transition-all hover:scale-105 border"
                        style={{ borderColor: 'rgba(194,91,63,0.35)', color: '#c8b89a' }}
                    >
                        Download CV
                    </a>
                </div>
            </section>

            {/* ── Currently Working On ── */}
            <section className="max-w-3xl mx-auto">
                <div className="andean-card rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="pulse-dot" />
                        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
                            Currently Working On
                        </span>
                    </div>
                    <div className="space-y-3">
                        {currentWork.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3 rounded-xl px-4 py-3 transition-all duration-500"
                                style={{
                                    background: activeWork === idx ? `${item.color}18` : 'transparent',
                                    borderLeft: `2px solid ${activeWork === idx ? item.color : 'transparent'}`,
                                    opacity: activeWork === idx ? 1 : 0.45,
                                }}
                            >
                                <span className="mt-0.5" style={{ color: item.color }}>{item.icon}</span>
                                <p className="text-sm leading-relaxed" style={{ color: '#c8b89a' }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Research Areas ── */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        icon: <Activity size={30} />,
                        title: 'Surrogate Simulators',
                        desc: 'Developing ML-powered surrogate models for earthquake physical simulators using Neural Operators.',
                        color: '#c25b3f',
                    },
                    {
                        icon: <Brain size={30} />,
                        title: 'Generative AI',
                        desc: 'Applying generative models for Vs profile generation and symbolic regression for liquefaction.',
                        color: '#d4a017',
                    },
                    {
                        icon: <Database size={30} />,
                        title: 'Site Analysis',
                        desc: 'Probabilistic spatial correlated generation for geotechnical site characterization.',
                        color: '#2d5a3d',
                    },
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="andean-card rounded-2xl p-6 group cursor-default"
                    >
                        <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                            style={{ background: `${item.color}20`, color: item.color }}
                        >
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-bold font-heading text-white mb-2">{item.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#8a7a6a' }}>{item.desc}</p>
                        <ChevronRight size={16} className="mt-3 transition-transform group-hover:translate-x-1" style={{ color: item.color }} />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
