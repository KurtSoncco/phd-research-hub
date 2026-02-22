import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, GraduationCap, Twitter } from 'lucide-react';
import { useState } from 'react';

const ChakanaSVG = () => (
    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
        <rect x="10" y="0" width="10" height="30" fill="#d4a017" />
        <rect x="0" y="10" width="30" height="10" fill="#d4a017" />
        <rect x="10" y="10" width="10" height="10" fill="#130d06" />
    </svg>
);

const AndesDivider = () => (
    <svg viewBox="0 0 1200 60" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 opacity-20" preserveAspectRatio="none">
        <polyline
            points="0,60 80,30 160,45 260,15 380,40 460,8 560,35 640,5 740,28 840,12 920,38 1020,10 1100,32 1200,18 1200,60"
            fill="none" stroke="#d4a017" strokeWidth="1.5"
        />
        <polyline
            points="0,60 60,42 140,55 220,30 320,50 420,22 520,48 620,18 720,40 820,22 940,46 1060,20 1160,44 1200,30 1200,60"
            fill="none" stroke="#c25b3f" strokeWidth="1" opacity="0.6"
        />
    </svg>
);

const Layout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', path: '/' },
        { name: 'Research', path: '/research' },
        { name: 'Projects', path: '/projects' },
        { name: 'Experience', path: '/experience' },
        { name: 'Teaching', path: '/teaching' },
        { name: 'About', path: '/about' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <div className="min-h-screen text-slate-100 font-sans flex flex-col" style={{ backgroundColor: '#130d06' }}>
            {/* Navbar */}
            <nav className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(19,13,6,0.85)', borderColor: 'rgba(212,160,23,0.15)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 flex items-center gap-2.5">
                            <ChakanaSVG />
                            <div className="flex flex-col leading-tight">
                                <Link to="/" className="text-lg font-bold font-heading text-andean">
                                    Kurt Soncco Sinchi
                                </Link>
                                <span className="text-xs text-gold/60 font-medium tracking-wider hidden sm:block">
                                    Rimaykullayki ✦
                                </span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-1">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${isActive(item.path)
                                            ? 'text-gold border-b-2 border-gold'
                                            : 'text-slate-300 hover:text-gold/80 hover:bg-white/5'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-gold hover:bg-white/5 focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t" style={{ backgroundColor: 'rgba(19,13,6,0.95)', borderColor: 'rgba(212,160,23,0.15)' }}>
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.path)
                                        ? 'text-gold border-l-2 border-gold pl-5'
                                        : 'text-slate-300 hover:text-gold/80'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Main Content */}
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                    <Outlet />
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t" style={{ borderColor: 'rgba(212,160,23,0.12)', backgroundColor: 'rgba(19,13,6,0.95)' }}>
                {/* Andes Silhouette Divider */}
                <div className="w-full overflow-hidden" style={{ height: '48px' }}>
                    <AndesDivider />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Social Icons */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <p className="font-heading font-semibold text-andean text-lg">Kurt Soncco Sinchi</p>
                            <p className="text-slate-400 text-sm mt-1">PhD Candidate, UC Berkeley · Quechua Scholar from Cusco, Perú</p>
                            <div className="flex items-center gap-2 mt-1 justify-center md:justify-start">
                                <ChakanaSVG />
                                <span className="text-xs text-gold/50 font-medium tracking-widest">RIMAYKULLAYKI</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {[
                                { href: 'https://github.com/KurtSoncco', icon: <Github size={20} />, label: 'GitHub' },
                                { href: 'https://www.linkedin.com/in/kurtsonccosinchi/', icon: <Linkedin size={20} />, label: 'LinkedIn' },
                                { href: 'https://scholar.google.com/citations?user=X4Zw3cEAAAAJ', icon: <GraduationCap size={20} />, label: 'Google Scholar' },
                                { href: 'mailto:kurtwal98@berkeley.edu', icon: <Mail size={20} />, label: 'Email' },
                            ].map(({ href, icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl border transition-all duration-200 hover:scale-110"
                                    style={{ borderColor: 'rgba(212,160,23,0.2)', color: 'rgba(212,160,23,0.7)' }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#d4a017'; e.currentTarget.style.color = '#d4a017'; e.currentTarget.style.background = 'rgba(212,160,23,0.08)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(212,160,23,0.2)'; e.currentTarget.style.color = 'rgba(212,160,23,0.7)'; e.currentTarget.style.background = 'transparent'; }}
                                    title={label}
                                >
                                    {icon}
                                    <span className="sr-only">{label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                    <p className="text-center text-slate-600 text-xs mt-6">
                        © {new Date().getFullYear()} Kurt Soncco Sinchi · Built with ♥ from Berkeley
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
