import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style>
                {`
                    /* Color Variables from SCSS */
                    :root {
                        --rich-black: #01161e;
                        --midnight-green: #124559;
                        --air-force-blue: #598392;
                        --ash-gray: #aec3b0;
                        --beige: #eff6e0;
                    }

                    .navbar-wrapper {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 10000;
                        padding-top: 1rem;
                        padding-bottom: 0.5rem;
                    }

                    .navbar-custom {
                        background: rgba(1, 22, 30, 0.9);
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        border: 1px solid rgba(174, 195, 176, 0.15);
                        border-radius: 1.5rem;
                        padding: 1rem 1.5rem;
                        min-height: 3.5rem;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    }

                    .navbar-brand-text {
                        font-size: 1.25rem;
                        font-weight: 500;
                        color: var(--beige);
                        margin-left: 0.5rem;
                    }

                    .nav-link-custom {
                        color: var(--ash-gray);
                        padding: 0.5rem 1rem;
                        border-radius: 0.5rem;
                        transition: all 0.2s;
                        text-decoration: none;
                        background: transparent;
                        border: none;
                        cursor: pointer;
                        font-size: 0.95rem;
                        font-weight: 500;
                    }

                    .nav-link-custom:hover,
                    .nav-link-custom.active {
                        background-color: rgba(174, 195, 176, 0.1);
                        color: var(--beige);
                        transform: translateY(-1px);
                    }

                    .btn-login {
                        border: 1px solid rgba(174, 195, 176, 0.3);
                        background-color: rgba(174, 195, 176, 0.05);
                        color: var(--ash-gray);
                        border-radius: 1rem;
                        padding: 0.5rem 1.25rem;
                        font-size: 0.875rem;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
                        transition: all 0.2s;
                        text-decoration: none;
                        display: inline-block;
                        font-weight: 500;
                    }

                    .btn-login:hover {
                        background-color: rgba(174, 195, 176, 0.15);
                        color: var(--beige);
                        transform: translateY(-1px);
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.12);
                    }

                    .btn-signup {
                        border: 1px solid rgba(89, 131, 146, 0.5);
                        background: linear-gradient(135deg, var(--midnight-green) 0%, var(--air-force-blue) 100%);
                        color: var(--beige);
                        border-radius: 1rem;
                        padding: 0.5rem 1.25rem;
                        font-size: 0.875rem;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
                        transition: all 0.2s;
                        text-decoration: none;
                        display: inline-block;
                        font-weight: 500;
                    }

                    .btn-signup:hover {
                        background: linear-gradient(135deg, var(--air-force-blue) 0%, var(--midnight-green) 100%);
                        color: var(--beige);
                        transform: translateY(-1px);
                        box-shadow: 0 4px 6px rgba(89, 131, 146, 0.3);
                    }

                    .navbar-toggler-custom {
                        color: var(--beige);
                        border: none;
                        padding: 0.5rem;
                        background: transparent;
                        cursor: pointer;
                        transition: all 0.2s;
                    }

                    .navbar-toggler-custom:hover {
                        background-color: rgba(174, 195, 176, 0.1);
                        border-radius: 0.5rem;
                    }

                    .mobile-menu {
                        margin-top: 1rem;
                        padding-top: 1rem;
                        border-top: 1px solid rgba(174, 195, 176, 0.2);
                    }

                    .mobile-menu .nav-link-custom {
                        display: block;
                        margin-bottom: 0.5rem;
                    }

                    /* Spacer to prevent content from going under navbar */
                    .navbar-spacer {
                        height: 85px;
                    }

                    @media (max-width: 767.98px) {
                        .navbar-wrapper {
                            padding-top: 0.75rem;
                            padding-bottom: 0.5rem;
                        }

                        .navbar-custom {
                            padding: 1rem;
                        }

                        .navbar-spacer {
                            height: 75px;
                        }
                    }
                `}
            </style>
            <div className="navbar-wrapper">
                <div className="container-fluid px-3 px-md-4">
                    <div className="container" style={{ maxWidth: '1200px' }}>
                        <nav className="navbar navbar-expand-md navbar-custom">
                            <a className="navbar-brand d-flex align-items-center" href="/" style={{ textDecoration: 'none' }}>
                                <span className="navbar-brand-text">Bitressium</span>
                            </a>

                            <button
                                className="navbar-toggler-custom d-md-none"
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                aria-label="Toggle navigation"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="4" x2="20" y1="12" y2="12"></line>
                                    <line x1="4" x2="20" y1="6" y2="6"></line>
                                    <line x1="4" x2="20" y1="18" y2="18"></line>
                                </svg>
                            </button>

                            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                                <ul className="navbar-nav mx-auto d-none d-md-flex gap-2">
                                    {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                                        <li key={section} className="nav-item">
                                            <a
                                                className={`nav-link-custom ${activeSection === section ? 'active' : ''}`}
                                                href={`#${section}`}
                                            >
                                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                            </a>
                                        </li>
                                    ))}
                                </ul>


                                <div className="mobile-menu d-md-none">
                                    {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                                        <a
                                            key={section}
                                            className={`nav-link-custom ${activeSection === section ? 'active' : ''}`}
                                            href={`#${section}`}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </a>
                                    ))}

                                    <div className="mt-3 d-flex flex-column gap-2">
                                        <a href="/login" className="btn-login text-center">Login</a>
                                        <a href="/register" className="btn-signup text-center">Apply Now</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;