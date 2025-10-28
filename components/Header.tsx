import React from 'react';
import { Link } from 'react-router-dom';

const LogoIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#6366f1" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#glow)">
      {/* Planet */}
      <circle cx="50" cy="50" r="40" fill="url(#logoGrad)" />
      {/* Ring */}
      <ellipse cx="50" cy="50" rx="60" ry="18"
        stroke="#06b6d4" strokeWidth="5" fill="none"
        transform="rotate(-30 50 50)" />
      {/* Gear */}
      <path
        d="M50 30 A20 20 0 1 1 50 70 A20 20 0 1 1 50 30 M50 38 A12 12 0 1 0 50 62 A12 12 0 1 0 50 38 Z"
        fill="#fff"
      />
      {[0, 60, 120, 180, 240, 300].map(angle => (
        <path
          key={angle}
          d="M50 25 L50 18"
          stroke="#fff"
          strokeWidth="6"
          strokeLinecap="round"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </g>
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm border-b border-purple-500/30 sticky top-0 z-50 animate-fade-in-down">
      <div className="container mx-auto px-4 py-3">
        <Link to="/" className="flex items-center space-x-3">
          <LogoIcon className="h-12 w-12" />
          <div>
            <h1 className="text-2xl font-bold text-white tracking-wider">ToolGalaxyHub</h1>
            <p className="text-sm text-cyan-400">Your Free Online Tools Universe</p>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;