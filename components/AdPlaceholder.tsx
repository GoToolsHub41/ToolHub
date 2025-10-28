
import React from 'react';

interface AdPlaceholderProps {
  className?: string;
  text?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = 'h-64', text = 'Ad Placeholder' }) => {
  return (
    <div className={`flex items-center justify-center bg-gray-800/60 border-2 border-dashed border-gray-600 rounded-lg ${className}`}>
      <span className="text-gray-500">{text}</span>
    </div>
  );
};

export default AdPlaceholder;
