import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            role: "Research Assistant",
            company: "UC Berkeley",
            period: "May 2023 – Present",
            location: "Berkeley, CA",
            description: "Conducts earthquake simulations (FEM/FDM) and developed a soil randomization program."
        },
        {
            role: "PhD Resident",
            company: "X, the Moonshot Factory",
            period: "May 2024 – August 2024",
            location: "Mountain View, CA", // Assumed location
            description: "Worked on Generative AI workflows and stochastic generative programs for industrial applications."
        },
        {
            role: "Research Assistant",
            company: "University of Illinois Urbana-Champaign",
            period: "May 2022 – May 2023",
            location: "Urbana-Champaign, IL",
            description: "Developed Digital Twins using ML for GPR measurements and leveraged radar data for wildfire simulations."
        },
        {
            role: "Construction Engineer Supervisor",
            company: "KS Distribuciones",
            period: "Dec 2020 – Jan 2022",
            location: "Peru", // Assumed
            description: "Supervised structural design and implemented Power BI/BIM for budget reviews."
        },
        {
            role: "Research Assistant",
            company: "Universidad Peruana de Ciencias Aplicadas (UPC)",
            period: "Jan 2019 – Dec 2021",
            location: "Lima, Peru",
            description: "Developed Finite Element models for micro/nano beams and assisted in structural engineering lectures."
        },
        {
            role: "Quality Junior Engineer",
            company: "HLC SAC",
            period: "Jan 2020 – May 2020",
            location: "Peru",
            description: "Managed QA for engineering designs and developed 4D models within a BIM framework."
        },
        {
            role: "Structural Engineer",
            company: "CAMZ Ingenieria",
            period: "Aug 2019 – Dec 2019",
            location: "Lima, Peru",
            description: "Developed structural models and RC designs for market shops in Lima."
        },
        {
            role: "Construction Engineer Assistant",
            company: "Grupo Acuarius",
            period: "Aug 2018 – Dec 2018",
            location: "Peru",
            description: "Improved blueprints and managed costs using 3D Revit models."
        }
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <header className="space-y-4 border-b border-slate-800 pb-8">
                <h1 className="text-4xl font-bold text-white">Experience</h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                    My professional journey in research and engineering.
                </p>
            </header>

            <div className="relative border-l border-slate-800 ml-3 md:ml-6 space-y-12">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-12 group">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-teal-400 group-hover:scale-125 transition-all duration-300 ring-4 ring-slate-900" />

                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="text-lg text-blue-400 font-medium flex items-center gap-2">
                                    <Briefcase size={16} />
                                    {exp.company}
                                </div>
                            </div>
                            <div className="flex flex-col sm:items-end text-sm text-slate-500 gap-1">
                                <span className="flex items-center gap-1.5 bg-slate-800/50 px-3 py-1 rounded-full">
                                    <Calendar size={14} />
                                    {exp.period}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin size={14} />
                                    {exp.location}
                                </span>
                            </div>
                        </div>

                        <p className="text-slate-300 leading-relaxed max-w-3xl bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                            {exp.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
