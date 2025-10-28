import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 border-t border-purple-500/30 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-400">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/#about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link to="/#privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <Link to="/#contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
          <Link to="/robots" className="hover:text-cyan-400 transition-colors">Robots.txt</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} ToolGalaxyHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;