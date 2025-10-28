
import React, { useState } from 'react';
import { summarizeText } from '../../services/geminiService';

export const AITextSummarizer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to summarize.');
      return;
    }
    setError('');
    setIsLoading(true);
    setSummary('');
    try {
      const result = await summarizeText(inputText);
      setSummary(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-48 p-4 bg-gray-900 border border-gray-700 rounded-md focus:ring-2 focus:ring-accent focus:outline-none transition"
        placeholder="Paste a long article or text here to summarize..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        disabled={isLoading}
      />
      <button 
        onClick={handleSummarize} 
        disabled={isLoading}
        className="w-full py-3 text-lg font-bold bg-secondary hover:bg-purple-700 rounded-md transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Summarizing...
          </>
        ) : 'Summarize with AI'}
      </button>

      {error && <p className="text-red-400 text-center">{error}</p>}
      
      {summary && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-cyan-300">Summary:</h3>
          <div className="p-4 bg-gray-900 border border-gray-700 rounded-md whitespace-pre-wrap">
            {summary}
          </div>
        </div>
      )}
    </div>
  );
};
