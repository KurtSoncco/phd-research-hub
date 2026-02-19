const Teaching = () => {
    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <header className="space-y-4 border-b border-slate-800 pb-8">
                <h1 className="text-4xl font-bold text-white">Teaching</h1>
                <p className="text-xl text-slate-400 max-w-3xl">
                    My teaching philosophy and course experience at UC Berkeley.
                </p>
            </header>

            <div className="max-w-4xl space-y-12">
                {/* Philosophy Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-teal-400">Philosophy</h2>
                    <div className="prose prose-invert max-w-none text-slate-300">
                        <p>
                            I believe in an interactive referencing of theoretical concepts with practical engineering applications.
                            My goal is to empower students to understand not just the 'how', but the 'why' behind engineering principles.
                        </p>
                    </div>
                </section>

                {/* Courses Section */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-teal-400">Experience</h2>

                    <div className="space-y-6">
                        <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">Graduate Student Instructor (GSI)</h3>
                                <span className="text-slate-400 text-sm">UC Berkeley</span>
                            </div>
                            {/* Placeholder for specific courses - user can add later */}
                            <ul className="space-y-3 mt-4">
                                <li className="flex gap-4">
                                    <span className="text-slate-500 font-mono w-24">Fall 202X</span>
                                    <div>
                                        <p className="font-medium text-slate-200">Course Name</p>
                                        <p className="text-sm text-slate-400">Description of role and responsibilities.</p>
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

export default Teaching;
