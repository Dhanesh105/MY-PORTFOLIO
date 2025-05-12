import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [ripple, setRipple] = useState(null);

  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Active section detection
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveLink(section.getAttribute('id'));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'education', text: 'Education' },
    { id: 'contact', text: 'Contact' },
  ];

  // Ripple effect for click feedback
  const handleNavLinkClick = (e, id) => {
    const rect = e.target.getBoundingClientRect();
    setRipple({
      left: e.clientX - rect.left,
      top: e.clientY - rect.top,
      key: Date.now(),
      id
    });
    setActiveLink(id);
    setTimeout(() => setRipple(null), 500);
  };

  return (
    <nav className={`fixed w-full h-[80px] flex justify-between items-center px-6 z-50 transition-all duration-500 ${scrolled ? 'bg-gradient-to-r from-primary/95 to-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center gap-2">
        <FaCode className="text-secondary text-xl" />
        <h1 className="text-2xl font-bold bg-gradient-to-r from-secondary to-quaternary bg-clip-text text-transparent">DT.</h1>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-8">
        {navLinks.map(({ id, text }) => (
          <li key={id} className="relative group overflow-hidden">
            <Link
              to={id}
              smooth={true}
              duration={600}
              spy={true}
              activeClass="text-secondary"
              className={`cursor-pointer font-medium px-3 py-2 rounded-lg transition-all duration-300 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/40 ${activeLink === id ? 'text-secondary scale-105 shadow-md bg-tertiary/10' : 'text-quaternary'}`}
              onClick={e => handleNavLinkClick(e, id)}
            >
              {text}
              {/* Ripple animation */}
              {ripple && ripple.id === id && (
                <span
                  key={ripple.key}
                  className="absolute pointer-events-none rounded-full bg-secondary/30 animate-ripple"
                  style={{
                    left: ripple.left - 40,
                    top: ripple.top - 40,
                    width: 80,
                    height: 80,
                    opacity: 0.7
                  }}
                />
              )}
            </Link>
            <span className={`absolute -bottom-2 left-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full ${activeLink === id ? 'w-full' : 'w-0'}`}></span>
          </li>
        ))}
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer p-2 rounded-full hover:bg-tertiary/20 transition-all duration-300">
        {nav ? <FaTimes size={24} className="text-secondary" /> : <FaBars size={24} />}
      </div>
      {/* Mobile Menu and Backdrop remain unchanged */}
      <div className={`${nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 md:hidden`} onClick={closeMenu}></div>
      <div className={`${nav ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 w-[70%] h-screen bg-gradient-to-b from-primary to-primary/95 shadow-2xl flex flex-col justify-center transition-all duration-500 ease-in-out md:hidden z-20 p-8`}>
        <ul className="space-y-6">
          {navLinks.map(({ id, text }) => (
            <li key={id} className="border-b border-tertiary/20 pb-2">
              <Link
                onClick={closeMenu}
                to={id}
                smooth={true}
                duration={500}
                className="nav-link text-xl font-medium block transition-all hover:pl-2 hover:text-secondary"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Ripple animation keyframes */}
      <style>{`
        .animate-ripple {
          animation: ripple 0.5s linear;
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.7; }
          80% { transform: scale(1.5); opacity: 0.3; }
          100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;