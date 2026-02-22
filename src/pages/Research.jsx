import { ExternalLink, BookOpen, Mic2 } from 'lucide-react';

const researchProjects = [
    {
        title: 'Generative AI for Vs Profile Generation',
        summary: 'Developing generative deep learning models to synthesize realistic shear-wave velocity (Vs) profiles conditioned on real field measurements. These surrogate profiles power faster geotechnical site response analyses at scale.',
        image: 'research_vs_profile.png',
        tags: ['Generative AI', 'Geotechnical', 'ML'],
        color: '#c25b3f',
        status: 'Active',
    },
    {
        title: 'Liquefaction Prediction via Symbolic Regression',
        summary: 'Applying AI-driven symbolic regression to derive interpretable, physics-consistent equations for soil liquefaction. The approach yields transparent models that outperform black-box alternatives on benchmark datasets.',
        image: 'research_liquefaction.png',
        tags: ['Symbolic Regression', 'Liquefaction', 'XAI'],
        color: '#d4a017',
        status: 'Active',
    },
    {
        title: 'Surrogate Wave Propagation via Operator Learning',
        summary: 'Training Neural Operator architectures (FNO / U-Net) as surrogate models for elastic wave propagation in layered geological media. Achieves orders-of-magnitude speedup over traditional finite element solvers.',
        image: 'research_wave_propagation.png',
        tags: ['Neural Operators', 'Wave Physics', 'HPC'],
        color: '#2d5a3d',
        status: 'Active',
    },
];

const Research = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-700">
            {/* Header */}
            <header className="space-y-4 border-b pb-8" style={{ borderColor: 'rgba(212,160,23,0.12)' }}>
                <h1 className="text-4xl font-bold font-heading text-andean">Research &amp; Publications</h1>
                <p className="text-lg max-w-3xl leading-relaxed" style={{ color: '#a09080' }}>
                    My work bridges geotechnical mechanics and modern machine learning — building fast, reliable surrogate simulators and probabilistic tools for earthquake site analysis.
                </p>
            </header>

            {/* Active Research — Card Grid */}
            <section className="space-y-6">
                <div className="flex items-center gap-3">
                    <div className="pulse-dot" />
                    <h2 className="text-2xl font-semibold font-heading" style={{ color: '#d4a017' }}>Active Projects</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {researchProjects.map((proj, idx) => (
                        <div key={idx} className="andean-card rounded-2xl overflow-hidden flex flex-col group">
                            {/* Graphical Abstract */}
                            <div className="relative overflow-hidden aspect-[4/3] bg-slate-900">
                                <img
                                    src={`${import.meta.env.BASE_URL}images/${proj.image}`}
                                    alt={proj.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Status badge */}
                                <div
                                    className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5"
                                    style={{ background: `${proj.color}30`, color: proj.color, border: `1px solid ${proj.color}50` }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: proj.color }} />
                                    {proj.status}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <h3
                                    className="text-base font-bold font-heading mb-2 leading-snug transition-colors duration-200"
                                    style={{ color: 'white' }}
                                >
                                    {proj.title}
                                </h3>
                                <p className="text-sm leading-relaxed flex-1" style={{ color: '#8a7a6a' }}>
                                    {proj.summary}
                                </p>
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {proj.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2.5 py-1 rounded-full font-medium"
                                            style={{ background: `${proj.color}15`, color: proj.color }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Publications */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Journal Publications */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold font-heading flex items-center gap-2" style={{ color: '#c25b3f' }}>
                        <BookOpen size={22} /> Journal Publications
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                year: '2023',
                                title: 'Under-Canopy Biomass Sensing using UAS-Mounted Radar',
                                venue: 'IEEE IGARSS 2023',
                                authors: 'Sinchi, K.S., et al.',
                            },
                            {
                                year: '2021',
                                title: 'Postbuckling analysis of nonlocal functionally graded beams',
                                venue: 'Latin American Journal of Solids and Structures',
                                authors: 'Soncco, K., et al.',
                            },
                            {
                                year: '2021',
                                title: 'Post Buckling Analysis of Functionally Graded Beams',
                                venue: 'IOP Conf. Series: Materials Science, Korea',
                                authors: 'Soncco, K.',
                            },
                            {
                                year: '2020',
                                title: 'Bending and Buckling of Micropolar Beams',
                                venue: 'LACCEI 2020 / ICBMM',
                                authors: 'Betancourt, KN; Soncco, K.; Arciniega, R.',
                            },
                        ].map((pub, idx) => (
                            <div
                                key={idx}
                                className="andean-card rounded-xl p-4 flex gap-4"
                            >
                                <span
                                    className="text-xs font-mono font-bold mt-0.5 shrink-0 w-10 text-center pt-0.5"
                                    style={{ color: '#d4a017' }}
                                >
                                    {pub.year}
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-white leading-snug">{pub.title}</p>
                                    <p className="text-xs mt-1" style={{ color: '#6a5a4a' }}>{pub.authors}</p>
                                    <p className="text-xs italic mt-0.5" style={{ color: '#8a7a6a' }}>{pub.venue}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Presentations */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold font-heading flex items-center gap-2" style={{ color: '#3b2f6e' }}>
                        <Mic2 size={22} style={{ color: '#5a4898' }} /> Selected Presentations
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                badge: 'Keynote',
                                badgeColor: '#3b2f6e',
                                title: '"From Complexity to Efficiency: Site Response Simulations with ML"',
                                event: 'GEOWEEK 2025',
                            },
                            {
                                badge: 'Invited',
                                badgeColor: '#2d5a3d',
                                title: '"Practical Use of AI in Construction Projects"',
                                event: 'HLC SAC Forum, Lima (2025)',
                            },
                            {
                                badge: 'Talk',
                                badgeColor: '#8c3a25',
                                title: 'New structural engineering technologies and international experiences',
                                event: 'UPC, Lima (2023)',
                            },
                        ].map((p, idx) => (
                            <div key={idx} className="andean-card rounded-xl p-4 flex gap-4 items-start">
                                <span
                                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md shrink-0 mt-0.5"
                                    style={{ background: `${p.badgeColor}25`, color: p.badgeColor === '#3b2f6e' ? '#8b7fd4' : p.badgeColor === '#2d5a3d' ? '#4a8a5f' : '#e07a5f' }}
                                >
                                    {p.badge}
                                </span>
                                <div>
                                    <p className="text-sm font-semibold text-white leading-snug">{p.title}</p>
                                    <p className="text-xs mt-1" style={{ color: '#6a5a4a' }}>{p.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Research;
