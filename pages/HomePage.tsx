import React, { useState, useMemo } from 'react';
import ToolCard from '../components/ToolCard';
import { TOOLS } from '../constants';
import type { Tool } from '../types';
import { ToolCategory } from '../types';
import { useLocation } from 'react-router-dom';

const SearchBar: React.FC<{ value: string; onChange: (value: string) => void; }> = ({ value, onChange }) => (
    <div className="relative mb-12 animate-fade-in">
        <input
            type="text"
            placeholder="Search for a tool..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full max-w-2xl mx-auto block p-4 pl-12 text-lg bg-gray-800/70 border border-purple-500/30 rounded-full focus:ring-2 focus:ring-accent focus:outline-none backdrop-blur-sm"
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
    </div>
);

const HomePage: React.FC = () => {
  const location = useLocation();
  const initialQuery = new URLSearchParams(location.search).get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const filteredTools = useMemo(() => {
    if (!searchQuery) return TOOLS;
    const lowercasedQuery = searchQuery.toLowerCase();
    return TOOLS.filter(tool => 
      tool.name.toLowerCase().includes(lowercasedQuery) ||
      tool.description.toLowerCase().includes(lowercasedQuery) ||
      tool.keywords.some(keyword => keyword.toLowerCase().includes(lowercasedQuery))
    );
  }, [searchQuery]);

  const categorizedTools = filteredTools.reduce((acc, tool) => {
    (acc[tool.category] = acc[tool.category] || []).push(tool);
    return acc;
  }, {} as Record<ToolCategory, Tool[]>);

  const categoryOrder = Object.values(ToolCategory);

  return (
    <div className="space-y-12">
      <section className="text-center animate-fade-in-down">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Your Free Online Tools Universe
        </h1>
        <p className="text-lg md:text-xl text-cyan-300 max-w-3xl mx-auto">
          Instantly access dozens of powerful, client-side tools. No tracking, no limits, no login required.
        </p>
      </section>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />

      {filteredTools.length > 0 ? (
        categoryOrder.map(category => {
          const tools = categorizedTools[category];
          if (!tools || tools.length === 0) return null;
          
          return (
            <section key={category} className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-white border-b-2 border-purple-500/50 pb-2 mb-6">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                   <div key={tool.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                      <ToolCard tool={tool} />
                   </div>
                ))}
              </div>
            </section>
          )
        })
      ) : (
        <div className="text-center py-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-white">No Tools Found</h3>
          <p className="text-gray-400 mt-2">Try adjusting your search query.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;