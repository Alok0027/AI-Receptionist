import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";
import kairologo from "../assets/kairologo.png";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToSection = (sectionId) => {
        if (location.pathname === '/') {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl flex flex-row justify-between items-center my-4 mx-auto">
                <h1>
                    <Link
                        to="/"
                        className="text-3xl font-medium relative text-black drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]"
                    >
                        <img src={kairologo} alt="Kairo Logo" className="w-auto h-12 inline-block mr-2" />
                    </Link>
                </h1>
                <div className="flex gap-4 text-sm">
                    <a
                        href="/#features"
                        onClick={(e) => { e.preventDefault(); handleScrollToSection('features'); }}
                        className="px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white hover:text-black hover:shadow-[inset_0_6px_6px_-4px_rgba(0,0,0,0.2)] cursor-pointer"
                    >
                        Features
                    </a>
                    <Link
                        to="/#pricing"
                        onClick={(e) => {
                            e.preventDefault();
                            const pricingSection = document.getElementById('pricing');
                            if (pricingSection) {
                                pricingSection.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                window.location.href = '/#pricing';
                            }
                        }}
                        className="px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white hover:text-black hover:shadow-[inset_0_6px_6px_-4px_rgba(0,0,0,0.2)]"
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/updates"
                        className="px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white hover:text-black hover:shadow-[inset_0_6px_6px_-4px_rgba(0,0,0,0.2)]"
                    >
                        Services
                    </Link>
                    <Link
                        to="/updates"
                        className="px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white hover:text-black hover:shadow-[inset_0_6px_6px_-4px_rgba(0,0,0,0.2)]"
                    >
                        Updates
                    </Link>
                    <Link
                        to="/contact"
                        className="px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white hover:text-black hover:shadow-[inset_0_6px_6px_-4px_rgba(0,0,0,0.2)]"
                    >
                        Contact
                    </Link>
                </div>
                <div>
                    <Link to="/login">
                        <button className="bg-black shadow-2xl shadow-black text-white px-6 py-2 rounded-lg text-base hover:shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-shadow duration-200">
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;