import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className="fixed w-full z-50 bg-matte/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-light tracking-wider">
            João G. Eng<span className="text-gold">.</span>
          </Link>
          
          <button 
            className="md:hidden text-ice hover:text-gold transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex space-x-12">
            <Link to="/" className="text-sm tracking-wider hover:text-gold transition-colors">HOME</Link>
            <Link to="/services" className="text-sm tracking-wider hover:text-gold transition-colors">SERVIÇOS</Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-sm tracking-wider hover:text-gold transition-colors py-2"
              >
                HOME
              </Link>
              <Link 
                to="/services" 
                className="block text-sm tracking-wider hover:text-gold transition-colors py-2"
              >
                SERVIÇOS
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;