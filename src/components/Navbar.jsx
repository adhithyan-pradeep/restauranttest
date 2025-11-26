import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Party', path: '/party' },
    { name: 'Mess', path: '/mess' },
    { name: 'Loyalty', path: '/loyalty' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Vote', path: '/vote' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
        }`}
    >
      <div className="container flex-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-gray-900">
            KL10 <span className="text-gold">RESTAURANT</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-gold ${isActive(link.path) ? 'text-gold' : scrolled ? 'text-gray-800' : 'text-white'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className={`p-2 transition-colors hover:text-gold ${scrolled ? 'text-gray-800' : 'text-white'
              }`}
          >
            <User size={24} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-gray-800' : 'text-white'
            }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '0' }}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsOpen(false)} className="text-gray-800">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center justify-center flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-2xl font-heading font-bold ${isActive(link.path) ? 'text-gold' : 'text-gray-800'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="mt-4 btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Login / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
