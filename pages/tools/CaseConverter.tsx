import React, { useState } from 'react';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

type CaseType = 'uppercase' | 'lowercase' | 'sentence' | 'capitalized';

export const CaseConverter: React.FC = () => {
  const [text, setText] = useState('');
  const [isCopied, copy] = useCopyToClipboard();

  const convertCase = (type: CaseType) => {
    switch (type) {
      case 'uppercase':
        setText(text.toUpperCase());
        break;
      case 'lowercase':
        setText(text.toLowerCase());
        break;
      case 'sentence':
        setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()));
        break;
      case 'capitalized':
        setText(text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()));
        break;
    }
  };
  
  return (
    <>
      <style>{`
        .btn, .btn-secondary, .btn-danger {
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 600;
          transition: all 0.2s;
          border: 1px solid transparent;
        }
        .btn {
          background-color: #6366f1; /* primary */
          color: white;
        }
        .btn:hover {
          background-color: #4f46e5;
        }
        .btn-secondary {
          background-color: #06b6d4; /* accent */
          color: white;
        }
          .btn-secondary:hover {
          background-color: #0891b2;
        }
        .btn-danger {
          background-color: transparent;
          border-color: #f43f5e;
          color: #f43f5e;
        }
        .btn-danger:hover {
            background-color: #f43f5e;
            color: white;
        }
      `}</style>
      <div className="space-y-4">
        <textarea
          className="w-full h-64 p-4 bg-gray-900 border border-gray-700 rounded-md focus:ring-2 focus:ring-accent focus:outline-none transition"
          placeholder="Type or paste your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          <button onClick={() => convertCase('uppercase')} className="btn">UPPERCASE</button>
          <button onClick={() => convertCase('lowercase')} className="btn">lowercase</button>
          <button onClick={() => convertCase('sentence')} className="btn">Sentence case</button>
          <button onClick={() => convertCase('capitalized')} className="btn">Capitalized Case</button>
          <button onClick={() => copy(text)} className="btn-secondary">{isCopied ? 'Copied!' : 'Copy'}</button>
          <button onClick={() => setText('')} className="btn-danger">Clear</button>
        </div>
      </div>
    </>
  );
};