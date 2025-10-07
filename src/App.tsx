import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {
    const [scrolled, setScrolled] = useState(false);
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

    const services = [
        {
            icon: 'code-slash',
            title: 'Custom Systems Development',
            description: 'From school systems and e-commerce platforms to reporting dashboards and admin panels.',
            color: '#598392'
        },
        {
            icon: 'globe',
            title: 'Web & App Development',
            description: 'Creating fast, responsive, and user-friendly interfaces using React, Laravel, and Flask.',
            color: '#aec3b0'
        },
        {
            icon: 'graph-up-arrow',
            title: 'Consulting & Optimization',
            description: 'Helping clients streamline operations with tailored tech strategies.',
            color: '#124559'
        }
    ];

    const portfolio = [
        {
            title: 'iScholar',
            category: 'Web Systems & Platforms',
            description: 'iScholar is a web-based platform that applies fuzzy logic and prescriptive analytics to evaluate and recommend scholarships based on student profiles.',
            tech: ['Flask', 'MySQL', 'React'],
            gradient: 'linear-gradient(135deg, #124559 0%, #598392 100%)'
        },
        {
            title: 'VaxKid',
            category: 'Healthcare',
            description: 'VaxKid is a digital immunization platform designed to improve child vaccination coverage and reporting accuracy across a community.',
            tech: ['PHP', 'Javascript', 'MySQL'],
            gradient: 'linear-gradient(135deg, #598392 0%, #aec3b0 100%)'
        },
        {
            title: 'ISPSC Tagudin Website',
            category: 'Web Systems & Platforms',
            description: 'The ISPSC Tagudin Website provides campus updates, academic info, and announcements with a responsive design.',
            tech: ['PHP', 'MySQL', 'HTML'],
            gradient: 'linear-gradient(135deg, #124559 0%, #01161e 100%)'
        },
        {
            title: 'AgriServe',
            category: 'Web Systems & Platforms',
            description: 'A web-based farmer information management system that simplifies data collection and agricultural recordkeeping.',
            tech: ['PHP', 'MySQL', 'HTML'],
            gradient: 'linear-gradient(135deg, #aec3b0 0%, #eff6e0 100%)'
        }
    ];

    const techStack = [
        'React', 'Laravel', 'Flask', 'Python', 'JavaScript', 'PHP',
        'MySQL', 'Redis', 'API Integration'
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <style>{`
                @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css');
                @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
                    overflow-x: hidden;
                    line-height: 1.6;
                }

                ::-webkit-scrollbar {
                    width: 10px;
                }

                ::-webkit-scrollbar-track {
                    background: #01161e;
                }

                ::-webkit-scrollbar-thumb {
                    background: #124559;
                    border-radius: 5px;
                }

                ::-webkit-scrollbar-thumb:hover {
                    background: #598392;
                }

                .app-container {
                    background: linear-gradient(to bottom, #01161e 0%, #0a1821 100%);
                    min-height: 100vh;
                    color: #eff6e0;
                }

                .navbar-custom {
                    background: rgba(1, 22, 30, 0.9);
                    backdrop-filter: blur(10px);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    padding: 1rem 0;
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
                }

                .navbar-custom.scrolled {
                    box-shadow: 0 4px 30px rgba(18, 69, 89, 0.3);
                }

                .navbar-brand {
                    font-size: 1.5rem;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    color: #eff6e0;
                    text-decoration: none;
                }

                .navbar-brand:hover {
                    transform: translateY(-2px);
                    color: #eff6e0;
                }

                .brand-icon {
                    color: #598392;
                    font-size: 1.5rem;
                }

                .nav-link-custom {
                    position: relative;
                    padding: 0.5rem 1rem;
                    margin: 0 0.25rem;
                    color: #aec3b0;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    font-weight: 500;
                    text-decoration: none;
                }

                .nav-link-custom::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    width: 0;
                    height: 2px;
                    background: linear-gradient(135deg, #124559 0%, #598392 100%);
                    transform: translateX(-50%);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .nav-link-custom:hover,
                .nav-link-custom.active {
                    color: #eff6e0;
                }

                .nav-link-custom:hover::after,
                .nav-link-custom.active::after {
                    width: 80%;
                }

                .hero-badge {
                    background: rgba(89, 131, 146, 0.2);
                    border: 1px solid rgba(89, 131, 146, 0.3);
                }

                .hero-gradient {
                    background: linear-gradient(135deg, #124559 0%, #598392 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    display: inline-block;
                }

                .glow {
                    filter: drop-shadow(0 0 20px rgba(89, 131, 146, 0.5));
                    animation: glow-pulse 3s ease-in-out infinite;
                }

                @keyframes glow-pulse {
                    0%, 100% {
                        filter: drop-shadow(0 0 20px rgba(89, 131, 146, 0.5));
                    }
                    50% {
                        filter: drop-shadow(0 0 30px rgba(89, 131, 146, 0.8));
                    }
                }

                .fade-in-up {
                    animation: fadeInUp 1s ease-out;
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .floating {
                    animation: float 6s ease-in-out infinite;
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                .hero-glow-orb {
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(89, 131, 146, 0.4) 0%, transparent 70%);
                    filter: blur(40px);
                }

                .btn-gradient {
                    background: linear-gradient(135deg, #124559 0%, #598392 100%);
                    border: none;
                    color: #eff6e0;
                    font-weight: 600;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 4px 15px rgba(18, 69, 89, 0.4);
                    text-decoration: none;
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    border-radius: 50rem;
                }

                .btn-gradient:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 6px 25px rgba(18, 69, 89, 0.6);
                    color: #eff6e0;
                }

                .btn-outline-custom {
                    border: 2px solid #aec3b0;
                    color: #aec3b0;
                    font-weight: 600;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    background: transparent;
                    text-decoration: none;
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    border-radius: 50rem;
                }

                .btn-outline-custom:hover {
                    background: #aec3b0;
                    color: #01161e;
                    transform: translateY(-3px);
                    box-shadow: 0 6px 25px rgba(174, 195, 176, 0.3);
                }

                .section-title {
                    position: relative;
                    display: inline-block;
                }

                .section-title::after {
                    content: '';
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60px;
                    height: 4px;
                    background: linear-gradient(135deg, #124559 0%, #598392 100%);
                    border-radius: 2px;
                }

                .about-icon {
                    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                .about-card:hover .about-icon {
                    transform: scale(1.1) rotate(5deg);
                }

                .service-card {
                    background: rgba(18, 69, 89, 0.3);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(174, 195, 176, 0.1);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    height: 100%;
                    position: relative;
                    overflow: hidden;
                }

                .service-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(135deg, rgba(89, 131, 146, 0.1) 0%, rgba(174, 195, 176, 0.1) 100%);
                    opacity: 0;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 0;
                }

                .service-card:hover {
                    transform: translateY(-10px);
                    border-color: rgba(174, 195, 176, 0.3);
                    box-shadow: 0 10px 40px rgba(18, 69, 89, 0.4);
                }

                .service-card:hover::before {
                    opacity: 1;
                }

                .service-card-content {
                    position: relative;
                    z-index: 1;
                }

                .service-icon {
                    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                .service-card:hover .service-icon {
                    transform: scale(1.1) rotate(5deg);
                }

                .portfolio-card {
                    background: rgba(18, 69, 89, 0.2);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(174, 195, 176, 0.1);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    overflow: hidden;
                }

                .portfolio-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 50px rgba(18, 69, 89, 0.5);
                    border-color: rgba(174, 195, 176, 0.3);
                }

                .portfolio-image-container {
                    height: 250px;
                    overflow: hidden;
                    position: relative;
                }

                .portfolio-gradient-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.9;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .portfolio-card:hover .portfolio-gradient-overlay {
                    opacity: 0.7;
                }

                .portfolio-icon {
                    font-size: 4rem;
                    color: #eff6e0;
                    opacity: 0.3;
                }

                .tech-badge {
                    display: inline-block;
                    padding: 0.5rem 1rem;
                    margin: 0.25rem;
                    background: rgba(89, 131, 146, 0.2);
                    border: 1px solid rgba(174, 195, 176, 0.2);
                    border-radius: 20px;
                    font-size: 0.9rem;
                    font-weight: 500;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    color: #eff6e0;
                }

                .tech-badge:hover {
                    background: rgba(89, 131, 146, 0.4);
                    border-color: #aec3b0;
                    transform: translateY(-2px);
                }

                .contact-form .form-control {
                    background: rgba(18, 69, 89, 0.3);
                    border: 1px solid rgba(174, 195, 176, 0.2);
                    color: #eff6e0;
                    padding: 0.75rem 1rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .contact-form .form-control::placeholder {
                    color: rgba(174, 195, 176, 0.5);
                }

                .contact-form .form-control:focus {
                    background: rgba(18, 69, 89, 0.5);
                    border-color: #598392;
                    color: #eff6e0;
                    box-shadow: 0 0 20px rgba(89, 131, 146, 0.2);
                    outline: none;
                }

                .contact-icon {
                    display: block;
                    font-size: 2rem;
                    color: #598392;
                    margin-bottom: 1rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .contact-info-item:hover .contact-icon {
                    transform: translateY(-5px);
                    color: #aec3b0;
                }

                footer {
                    background: rgba(1, 22, 30, 0.8);
                    border-top: 1px solid rgba(174, 195, 176, 0.1);
                }

                .footer-link {
                    color: #aec3b0;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    display: inline-block;
                    text-decoration: none;
                }

                .footer-link:hover {
                    color: #598392;
                    transform: translateY(-3px);
                }

                .text-muted-custom {
                    color: rgba(239, 246, 224, 0.6);
                }

                .text-secondary-custom {
                    color: rgba(239, 246, 224, 0.7);
                }

                .text-light-custom {
                    color: rgba(239, 246, 224, 0.8);
                }

                .badge-custom {
                    background: rgba(89, 131, 146, 0.3);
                    color: #eff6e0;
                }

                .badge-tech {
                    background: rgba(18, 69, 89, 0.5);
                    color: #eff6e0;
                }

                @media (max-width: 768px) {
                    .hero-glow-orb {
                        width: 300px;
                        height: 300px;
                    }

                    .service-card:hover,
                    .portfolio-card:hover {
                        transform: translateY(-5px);
                    }
                }
            `}</style>

            <div className="app-container">
                {/* Navigation */}
                <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-custom scrolled' : 'navbar-custom'}`}>
                    <div className="container">
                        <a className="navbar-brand d-flex align-items-center" href="#home">
                            <i className="bi bi-lightning-charge-fill me-2 brand-icon"></i>
                            <span className="fw-bold">Bitressium</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                                    <li key={section} className="nav-item">
                                        <a
                                            className={`nav-link nav-link-custom ${activeSection === section ? 'active' : ''}`}
                                            href={`#${section}`}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="home" className="min-vh-100 d-flex align-items-center position-relative" style={{ paddingTop: '80px' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="fade-in-up">
                                    <div className="mb-3">
                                        <span className="badge rounded-pill px-3 py-2 hero-badge">
                                            <i className="bi bi-lightbulb-fill me-2"></i>
                                            Smart Systems. Real Solutions.
                                        </span>
                                    </div>
                                    <h1 className="display-3 fw-bold mb-4">
                                        Welcome to <br />
                                        <span className="hero-gradient glow">Bitressium</span>
                                    </h1>
                                    <p className="lead mb-4 text-light-custom">
                                        A technology solutions studio focused on developing intelligent, efficient, and modern systems for businesses, organizations, and individuals.
                                    </p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <a href="#services" className="btn btn-lg btn-gradient rounded-pill">
                                            Explore Services <i className="bi bi-arrow-right ms-2"></i>
                                        </a>
                                        <a href="#portfolio" className="btn btn-lg btn-outline-custom rounded-pill">
                                            View Portfolio <i className="bi bi-grid-3x3-gap ms-2"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="floating">
                                    <div className="d-flex justify-content-center">
                                        <div className="hero-glow-orb"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-title display-5 fw-bold mb-4">About Bitressium</h2>
                                <p className="lead text-light-custom">
                                    We combine <strong>software engineering</strong>, <strong>AI-driven automation</strong>, and <strong>data-centric design</strong> to build products that don't just work — they <strong>adapt, analyze, and evolve</strong>.
                                </p>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-md-4">
                                <div className="text-center about-card">
                                    <div className="mb-3">
                                        <i className="bi bi-gear-fill about-icon" style={{ fontSize: '3rem', color: '#598392' }}></i>
                                    </div>
                                    <h4>Core Philosophy</h4>
                                    <p className="text-secondary-custom">
                                        "Technology should simplify, not complicate."
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-center about-card">
                                    <div className="mb-3">
                                        <i className="bi bi-bullseye about-icon" style={{ fontSize: '3rem', color: '#aec3b0' }}></i>
                                    </div>
                                    <h4>Our Mission</h4>
                                    <p className="text-secondary-custom">
                                        Practical innovation — building tools that real people actually need.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="text-center about-card">
                                    <div className="mb-3">
                                        <i className="bi bi-flag-fill about-icon" style={{ fontSize: '3rem', color: '#124559' }}></i>
                                    </div>
                                    <h4>Our Vision</h4>
                                    <p className="text-secondary-custom">
                                        Empowering Filipino developers and businesses with homegrown solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-10 mx-auto">
                                <h4 className="mb-4 text-center">Technologies We Master</h4>
                                <div className="text-center">
                                    {techStack.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-title display-5 fw-bold mb-4">What We Do</h2>
                                <p className="lead text-light-custom">
                                    Comprehensive technology solutions tailored to your needs
                                </p>
                            </div>
                        </div>
                        <div className="row g-4">
                            {services.map((service, idx) => (
                                <div key={idx} className="col-lg-4 col-md-6">
                                    <div className="service-card rounded-3 p-4">
                                        <div className="service-card-content">
                                            <div className="mb-3">
                                                <i className={`bi bi-${service.icon} service-icon`} style={{ fontSize: '2.5rem', color: service.color }}></i>
                                            </div>
                                            <h4 className="mb-3">{service.title}</h4>
                                            <p className="text-secondary-custom">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section id="portfolio" className="py-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-title display-5 fw-bold mb-4">Our Portfolio</h2>
                                <p className="lead text-light-custom">
                                    Recent projects showcasing our expertise
                                </p>
                            </div>
                        </div>
                        <div className="row g-4">
                            {portfolio.map((project, idx) => (
                                <div key={idx} className="col-lg-6">
                                    <div className="portfolio-card rounded-3">
                                        <div className="portfolio-image-container">
                                            <div className="portfolio-gradient-overlay" style={{ background: project.gradient }}>
                                                <i className="bi bi-journal-code portfolio-icon"></i>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <span className="badge badge-custom mb-2">{project.category}</span>
                                            <h4 className="mb-3">{project.title}</h4>
                                            <p className="text-secondary-custom">
                                                {project.description}
                                            </p>
                                            <div className="mt-3">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="badge badge-tech me-2 mb-2">{t}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-5">
                    <div className="container">
                        <div className="row mb-5">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-title display-5 fw-bold mb-4">Get In Touch</h2>
                                <p className="lead text-light-custom">
                                    Let's discuss how we can help transform your ideas into reality
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <div className="contact-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control form-control-lg" placeholder="Your Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control form-control-lg" placeholder="Your Email" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control form-control-lg" placeholder="Subject" />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control form-control-lg" rows={5} placeholder="Your Message"></textarea>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button className="btn btn-lg btn-gradient rounded-pill px-5">
                                                Send Message <i className="bi bi-send ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-md-4 text-center contact-info-item">
                                        <i className="bi bi-envelope-fill contact-icon"></i>
                                        <p>info@bitressium.com</p>
                                    </div>
                                    <div className="col-md-4 text-center contact-info-item">
                                        <i className="bi bi-telephone-fill contact-icon"></i>
                                        <p>+63 123 456 7890</p>
                                    </div>
                                    <div className="col-md-4 text-center contact-info-item">
                                        <i className="bi bi-geo-alt-fill contact-icon"></i>
                                        <p>Angeles City, Philippines</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-4">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                            <p className="mb-0" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                                © 2025 Bitressium. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </motion.div>
    );
};

export default App;