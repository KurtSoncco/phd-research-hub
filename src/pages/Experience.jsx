import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "PhD Resident - Generative AI",
            company: "X, the Moonshot Factory",
            period: "May 2024 – Aug 2024",
            location: "Mountain View, CA",
            description: [
                "Generative Design at Scale: Engineered an SFT-enhanced LLM workflow that compressed the design lifecycle of 1,000+ projects to minutes, achieving multi-objective optimization across zoning, structural, and ecological constraints.",
                "Multi-Resolution Geospatial Intelligence: Fused meteorological and biological data scales with AlphaEarth foundational models to automate 'Nature-First' landscape optimization.",
                "Ecological Optimization: Developed stochastic algorithms that mathematically encode native ecological patterns into architectural design, prioritizing environmental regeneration alongside compliance."
            ]
        },
        {
            role: "Graduate Research Assistant & AI4CEE Project Lead",
            company: "University of California, Berkeley",
            period: "May 2023 – Present",
            location: "Berkeley, CA",
            description: [
                "AI Education Strategy: Architecting the department-wide AI framework, deploying Gemini agents and RAG workflows across 7 courses (700+ students) to establish new standards for AI-assisted engineering pedagogy.",
                "Physics-ML Acceleration: Engineered a custom Neural Operator framework to replace expensive Monte Carlo simulations, compressing the runtime of stochastic soil generation and Uncertainty Quantification (UQ) from hours to seconds.",
                "Massive-Scale Simulation: Orchestrated 70,000+ parallel OpenSees simulations on Savio HPC clusters to map spatial soil variability, creating high-fidelity probabilistic models for site response."
            ]
        },
        {
            role: "NCSA Research Fellow - IDEA Lab",
            company: "University of Illinois Urbana-Champaign",
            period: "May 2022 – May 2023",
            location: "Urbana-Champaign, IL",
            description: [
                "AI-Driven Wildfire Prevention: Engineered a Convolutional Neural Network (CNN) architecture to translate high-frequency radar signals into precise biomass density profiles, directly enhancing the fidelity of wildfire spread simulations.",
                "Supercomputing at Scale: Leveraged the Delta GPU Supercomputer to train deep learning inverse-scattering models, processing terabytes of radar data to solve complex non-linear mapping problems.",
                "Autonomous Environmental Mapping: Integrated this AI framework with UAV-mounted sensor systems to autonomously map forest ecosystems in Florida, replacing manual sampling with high-speed, broad-area aerial characterization."
            ]
        },
        {
            role: "Construction Engineer Supervisor",
            company: "KS Distribuciones",
            period: "Dec 2020 – Jan 2022",
            location: "Peru",
            description: [
                "Data-Driven Digital Transformation: Spearheaded the adoption of Power BI for real-time project tracking, using data visualization to drive stakeholder consensus and achieve a 10% reduction in budget while ensuring on-time delivery.",
                "Multi-Stakeholder Orchestration: Managed a technical team of 3 civil engineers and coordinated workflows across multiple external contractors, ensuring seamless integration of complex residential and commercial deliverables.",
                "Precision BIM Procurement: Implemented BIM-based material quantification workflows to optimize procurement strategies, significantly reducing material waste and estimation errors."
            ]
        },
        {
            role: "Research Assistant & Lab Leader",
            company: "UPC Mechanical Computational Laboratory",
            period: "Jan 2019 – Dec 2021",
            location: "Lima, Peru",
            description: [
                "Custom FEM Solver Development: Engineered a novel Finite Element Method (FEM) solver from scratch in MATLAB, formulating custom constitutive equations to capture non-classical stress behaviors in micro-structures that commercial software could not model.",
                "Research Team Leadership: Directed the technical roadmap for the lab, mentoring 4 undergraduate researchers through the development of their own FEM solvers, resulting in 4 successful thesis defenses and publications.",
                "Theoretical Physics Breakthroughs: Investigated dimensionality effects, proving that classical continuum mechanics fails in high-order rotation regimes, and validated findings through non-local and micropolar field theory simulations."
            ]
        },
        {
            role: "Quality Junior Engineer",
            company: "HLC SAC",
            period: "Jan 2020 – May 2020",
            location: "Peru",
            description: [
                "Capital Project Systems Assurance: Helped the central technical node for 10+ engineering disciplines, enforcing strict QA/QC integration standards for $50M+ capital projects (Bolivar Port, Tambomayo Truck Shop).",
                "4D Predictive Simulation: Deployed 4D BIM workflows (Space + Time) to simulate construction sequencing, identifying and resolving critical scheduling bottlenecks in silico to prevent costly onsite delays.",
                "Interdisciplinary Clash Resolution: Orchestrated digital coordination between Engineering and BIM teams, utilizing automated clash detection to preemptively resolve complex structural-mechanical conflicts."
            ]
        },
        {
            role: "Structural Engineer",
            company: "CAMZ Ingenieria",
            period: "Aug 2019 – Dec 2019",
            location: "Lima, Peru",
            description: [
                "Developed structural ETABS/SAP2000 models and RC designs for 6 market shops in Lima, Peru.",
                "Developed retrofitting strategies for structural elements damaged by corrosion issues."
            ]
        },
        {
            role: "Construction Engineer Assistant",
            company: "Grupo Acuarius",
            period: "Aug 2018 – Dec 2018",
            location: "Lima, Peru",
            description: [
                "Managed costs and production metrics for 0.5M soles projects using Revit 3D modeling to reduce errors.",
                "Assisted in construction sites of two electrical substations in Lima."
            ]
        }
    ];

    // Helper function to generate logo filename from company name
    const getLogoPath = (companyName) => {
        // e.g., "University of California, Berkeley" -> "university_of_california_berkeley.png"
        const filename = companyName.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');
        return `${import.meta.env.BASE_URL}images/${filename}.png`;
    };

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <header className="space-y-4 border-b border-slate-800 pb-8">
                <h1 className="text-4xl font-bold text-white">Experience</h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                    My professional journey in research, AI, and engineering.
                </p>
            </header>

            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-12 group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-teal-400 group-hover:scale-125 transition-all duration-300 ring-4 ring-slate-900" />

                        <div className="flex flex-col gap-4 mb-4">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <div className="text-lg text-blue-400 font-medium flex items-center gap-3">
                                        {/* Logo or Icon */}
                                        <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center overflow-hidden shrink-0 border border-slate-700">
                                            <img
                                                src={getLogoPath(exp.company)}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.style.display = 'none'; // Hide broken image
                                                    e.target.nextSibling.style.display = 'flex'; // Show fallback icon
                                                }}
                                                alt={`${exp.company} logo`}
                                                className="w-full h-full object-contain p-1"
                                            />
                                            <div className="hidden w-full h-full items-center justify-center text-slate-500">
                                                <Building2 size={16} />
                                            </div>
                                        </div>
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:items-end text-sm text-slate-500 gap-1.5 shrink-0">
                                    <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
                                        <Calendar size={14} className="text-teal-400" />
                                        {exp.period}
                                    </span>
                                    <span className="flex items-center gap-1.5 px-3">
                                        <MapPin size={14} />
                                        {exp.location}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                            {Array.isArray(exp.description) ? (
                                <ul className="space-y-3">
                                    {exp.description.map((point, i) => {
                                        const [title, ...rest] = point.split(':');
                                        const content = rest.join(':');
                                        return (
                                            <li key={i} className="flex gap-3">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-500/50 shrink-0" />
                                                <span>
                                                    {content ? (
                                                        <>
                                                            <strong className="text-slate-200">{title}:</strong>{content}
                                                        </>
                                                    ) : (
                                                        title
                                                    )}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            ) : (
                                <p>{exp.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
