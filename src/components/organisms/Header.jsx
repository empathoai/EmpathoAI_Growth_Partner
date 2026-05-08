import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
  ];

  return (
    <>
      <header className="h-[64px] bg-canvas flex items-center justify-between px-lg sticky top-0 z-50 hairline">
        <div className="flex items-center gap-md lg:gap-xl w-full lg:w-auto justify-between lg:justify-start">
          {/* Mobile Hamburger */}
          <button 
            className="lg:hidden p-2 -ml-2 text-accent transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Open mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <Link to="/" className="h-8 flex items-center" aria-label="EmpathoAI Home">
            <img src="/images/logo_empathoai.svg" alt="EmpathoAI Logo" className="h-full w-auto bg-transparent" />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main Navigation" className="hidden lg:flex gap-lg items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`body-strong hover:border-b-2 hover:border-accent pb-1 transition-all ${location.pathname === link.path ? 'border-b-2 border-accent text-text-primary' : 'border-b-2 border-transparent text-text-secondary'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div 
            className="fixed inset-0 bg-canvas/80 backdrop-blur-md" 
            onClick={toggleMobileMenu}
            aria-hidden="true"
          />
          <div className="absolute top-0 left-0 w-4/5 max-w-[280px] h-full bg-surface-deep flex flex-col" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="p-lg flex justify-between items-center border-b border-hairline">
              <img src="/images/logo_empathoai.svg" alt="EmpathoAI Logo" className="h-8 w-auto bg-transparent" />
              <button 
                className="p-2 -mr-2 text-accent"
                onClick={toggleMobileMenu}
                aria-label="Close mobile menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col p-lg gap-xl flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  onClick={toggleMobileMenu} 
                  className="heading-lg uppercase text-accent"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-auto pt-lg border-t border-hairline flex flex-col gap-md">
                <Link to="/privacy-policy" onClick={toggleMobileMenu} className="body-strong text-text-secondary uppercase">
                  PRIVACY POLICY
                </Link>
                <Link to="/terms-of-use" onClick={toggleMobileMenu} className="body-strong text-text-secondary uppercase">
                  TERMS OF USE
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
