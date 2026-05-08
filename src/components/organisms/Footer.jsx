import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline py-xl mt-auto">
      <div className="container-empatho flex flex-col gap-xl">
        <nav aria-label="Footer Navigation" className="flex flex-wrap gap-md uppercase">
          <Link to="/privacy-policy" className="caption-md text-text-secondary hover:text-text-primary transition-colors">PRIVACY POLICY</Link>
          <Link to="/terms-of-use" className="caption-md text-text-secondary hover:text-text-primary transition-colors">TERMS OF USE</Link>
        </nav>
        
        <div className="border-t border-hairline pt-md flex flex-col md:flex-row justify-between items-center gap-md">
          <div className="flex items-center gap-md utility-xs text-text-secondary uppercase">
            <span className="text-text-primary font-bold">Sheridan, Wyoming, USA.</span>
            <span>&copy; {new Date().getFullYear()} EmpathoAI</span>
          </div>
          <div className="flex gap-md utility-xs text-text-secondary">
            <span>Cookie Protocol: Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
