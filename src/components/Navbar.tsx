import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Winners', href: '/winners' },
  { name: 'Stats', href: '/stats' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="font-heading text-2xl font-bold">
              <span className="text-brand-blue">Prize</span>
              <span className="text-brand-gold">Payout</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="font-body text-brand-gray-dark hover:text-brand-blue transition-colors">
                {item.name}
              </Link>
            ))}
            <button className="font-body bg-brand-orange hover:bg-brand-gold text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Claim Prize
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-gray-dark hover:text-brand-blue transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="block px-3 py-2 font-body text-brand-gray-dark hover:text-brand-blue transition-colors">
              {item.name}
            </Link>
          ))}
          <button className="w-full mt-2 font-body bg-brand-orange hover:bg-brand-gold text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Claim Prize
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;