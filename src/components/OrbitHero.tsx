const OrbitHero = () => {
    return (
        <>
            <style>
                {`
                    :root {
                        --rich-black: #01161e;
                        --midnight-green: #124559;
                        --air-force-blue: #598392;
                        --ash-gray: #aec3b0;
                        --beige: #eff6e0;
                    }

                    .orbit-container {
                        position: relative;
                        height: 50vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .center-element {
                        position: absolute;
                        z-index: 10;
                    }

                    .glow-effect {
                        position: absolute;
                        width: 120px;
                        height: 120px;
                        background: radial-gradient(circle, rgba(89, 131, 146, 0.6) 0%, transparent 70%);
                        filter: blur(40px);
                        border-radius: 50%;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }

                    .center-icon {
                        position: relative;
                        font-size: 3rem;
                        color: var(--beige);
                        animation: float 3s ease-in-out infinite;
                    }

                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-10px);
                        }
                    }

                    .orbit-ring {
                        position: absolute;
                        pointer-events: none;
                        top: 50%;
                        left: 50%;
                    }

                    .orbit-ring-outer {
                        width: 320px;
                        height: 320px;
                        margin-left: -160px;
                        margin-top: -160px;
                    }

                    .orbit-ring-inner {
                        width: 200px;
                        height: 200px;
                        margin-left: -100px;
                        margin-top: -100px;
                    }

                   .orbit-icon {
                      position: absolute;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border-radius: 50%;
                      background: rgba(18, 69, 89, 0.3);
                      backdrop-filter: blur(10px);
                      border: 1px solid rgba(174, 195, 176, 0.2);
                      color: var(--ash-gray);
                      top: 50%;
                      left: 50%;
                      animation: orbit var(--duration) linear infinite;
                      transform-origin: center;
                    }


                 .orbit-icon-outer {
                      width: 40px;
                      height: 40px;
                      font-size: 24px;
                      margin-left: -20px;
                      margin-top: -20px;
                      --duration: 20s;
                      --radius: 160px;
                    }
                    
                    .orbit-icon-inner {
                      width: 30px;
                      height: 30px;
                      font-size: 18px;
                      margin-left: -15px;
                      margin-top: -15px;
                      animation-direction: reverse;
                      --duration: 10s;
                      --radius: 100px;
                    }
                    
                    /* Individual positions (offset by rotation delay instead of static transform) */
                    .orbit-icon-outer:nth-of-type(1) { animation-delay: 0s; }
                    .orbit-icon-outer:nth-of-type(2) { animation-delay: -5s; }
                    .orbit-icon-outer:nth-of-type(3) { animation-delay: -10s; }
                    .orbit-icon-outer:nth-of-type(4) { animation-delay: -15s; }
                    
                    .orbit-icon-inner:nth-of-type(5) { animation-delay: 0s; }
                    .orbit-icon-inner:nth-of-type(6) { animation-delay: -3.33s; }
                    .orbit-icon-inner:nth-of-type(7) { animation-delay: -6.66s; }
                    
                    @keyframes orbit {
                      from {
                        transform: rotate(0deg) translateX(var(--radius)) rotate(0deg);
                      }
                      to {
                        transform: rotate(360deg) translateX(var(--radius)) rotate(-360deg);
                      }
                    }

                    .hero-content {
                        text-align: center;
                        padding: 2rem;
                    }

                    .hero-title {
                        font-size: 3rem;
                        font-weight: 700;
                        background: linear-gradient(135deg, var(--midnight-green) 0%, var(--air-force-blue) 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-clip: text;
                        margin-bottom: 1rem;
                    }

                    .hero-subtitle {
                        color: rgba(239, 246, 224, 0.6);
                        font-size: 1.25rem;
                    }

                    @media (max-width: 991.98px) {
                        .orbit-container {
                            display: none !important;
                        }
                    }

                    @media (max-width: 768px) {
                        .hero-title {
                            font-size: 2rem;
                        }

                        .hero-subtitle {
                            font-size: 1rem;
                        }
                    }

                    /* Bootstrap Icons via CDN */
                    @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css');
                `}
            </style>

                    <div className="orbit-container">
                        {/* Center Element */}
                        <div className="center-element">
                            <div className="glow-effect"></div>
                            <i className="bi bi-rocket-takeoff center-icon"></i>
                        </div>

                        {/* Outer Orbit Ring */}
                        <svg className="orbit-ring orbit-ring-outer" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50%" cy="50%" r="160" fill="none" stroke="rgba(174, 195, 176, 0.1)" strokeWidth="1"/>
                        </svg>

                        {/* Outer Orbit Icons */}
                        <div className="orbit-icon orbit-icon-outer orbit-icon-1">
                            <i className="bi bi-code-slash"></i>
                        </div>
                        <div className="orbit-icon orbit-icon-outer orbit-icon-2">
                            <i className="bi bi-palette"></i>
                        </div>
                        <div className="orbit-icon orbit-icon-outer orbit-icon-3">
                            <i className="bi bi-lightbulb"></i>
                        </div>
                        <div className="orbit-icon orbit-icon-outer orbit-icon-4">
                            <i className="bi bi-stars"></i>
                        </div>

                        {/* Inner Orbit Ring */}
                        <svg className="orbit-ring orbit-ring-inner" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50%" cy="50%" r="100" fill="none" stroke="rgba(174, 195, 176, 0.1)" strokeWidth="1"/>
                        </svg>

                        {/* Inner Orbit Icons (Reverse Direction) */}
                        <div className="orbit-icon orbit-icon-inner orbit-icon-5">
                            <i className="bi bi-cpu"></i>
                        </div>
                        <div className="orbit-icon orbit-icon-inner orbit-icon-6">
                            <i className="bi bi-graph-up"></i>
                        </div>
                        <div className="orbit-icon orbit-icon-inner orbit-icon-7">
                            <i className="bi bi-shield-check"></i>
                        </div>
                    </div>
        </>
    );
};

export default OrbitHero;