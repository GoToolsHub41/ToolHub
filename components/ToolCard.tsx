import React from 'react';
import { Link } from 'react-router-dom';
import type { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <Link 
      to={`/tool/${tool.id}`} 
      className="relative block p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 animate-fade-in group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-3">
          <tool.icon className="h-8 w-8 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">{tool.name}</h3>
        </div>
        <p className="text-gray-400 text-sm">{tool.description}</p>
      </div>
    </Link>
  );
};

export default ToolCard;