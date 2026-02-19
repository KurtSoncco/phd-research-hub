import { Mail, Github, Linkedin, MapPin, Download } from 'lucide-react';

const About = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Sidebar Info */}
                <div className="space-y-8">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
                        {/* Placeholder for profile image */}
                        <div className="w-full h-full flex items-center justify-center bg-slate-800 text-slate-600">
                            <span className="text-sm">Profile Image</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Contact</h3>
                        <div className="space-y-3 text-slate-300">
                            <a href="mailto:kurtwal98@berkeley.edu" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                                <Mail size={18} />
                                kurtwal98@berkeley.edu
                            </a>
                            <div className="flex items-center gap-3 text-slate-400">
                                <MapPin size={18} />
                                Berkeley, CA
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/KurtSoncco" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/kurtsonccosinchi/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 text-slate-300 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    <section className="space-y-6">
                        <h1 className="text-4xl font-bold text-white">About Me</h1>
                        <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4">
                            <p>
                                I am a PhD Candidate in the Department of Civil and Environmental Engineering at the University of California, Berkeley.
                                My academic journey is driven by a passion for integrating advanced computational methods with geotechnical engineering challenges.
                            </p>
                            <p>
                                Advised by Professor Mohamad Hallal, my work specifically addresses the need for robust surrogate physical simulators capable of
                                handling complex earthquake scenarios. By leveraging machine learning, particularly operator learning and generative models,
                                I aim to enhance the efficiency and accuracy of site response analysis and seismic risk assessment.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-teal-400">Education</h2>
                        <div className="space-y-8 border-l border-slate-800 ml-3 pl-8 relative">
                            <div className="relative">
                                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-teal-500" />
                                <h3 className="text-xl font-bold text-white">PhD in Civil & Environmental Engineering</h3>
                                <p className="text-blue-400">University of California, Berkeley</p>
                                <p className="text-slate-500 text-sm">Present</p>
                            </div>

                            <div className="relative">
                                <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-600" />
                                <h3 className="text-xl font-bold text-white">Previous Degree</h3>
                                <p className="text-blue-400">Previous Institution</p>
                                <p className="text-slate-500 text-sm">Year</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;
