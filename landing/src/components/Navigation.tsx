import { Github, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: '#how-it-works', label: 'How it works' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#features', label: 'Features' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src="/Website.png"
                alt="Hands Free Cooking"
                className="h-8 md:h-10"
              />
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-brand transition-colors font-lurpak-regular"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#get-started"
        className="fixed top-4 right-4 sm:right-6 lg:right-8 z-[60] bg-brand text-white px-6 py-2.5 rounded-lg hover:bg-brand-dark transition-all hover:scale-105 font-lurpak-regular shadow-md min-h-[44px] flex items-center"
      >
        Get the code
      </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand hover:bg-brand/10 rounded-lg transition-colors mr-32"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 text-gray-600 hover:bg-brand/5 hover:text-brand transition-colors rounded-lg font-lurpak-regular"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 text-brand hover:bg-brand/5 transition-colors rounded-lg font-lurpak-regular"
            >
              <Github size={20} />
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
