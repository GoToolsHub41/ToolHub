import React, { useState } from 'react';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

export const JsonFormatter: React.FC = () => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isCopied, copy] = useCopyToClipboard();

    const handleFormat = () => {
        try {
            const parsed = JSON.parse(jsonInput);
            setJsonInput(JSON.stringify(parsed, null, 2));
            setError(null);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Invalid JSON');
        }
    };
    
    const handleMinify = () => {
        try {
            const parsed = JSON.parse(jsonInput);
            setJsonInput(JSON.stringify(parsed));
            setError(null);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'Invalid JSON');
        }
    };

    const handleClear = () => {
        setJsonInput('');
        setError(null);
    };

    return (
        <div className="space-y-4">
            <textarea
                className={`w-full h-80 p-4 bg-gray-900 border ${error ? 'border-red-500' : 'border-gray-700'} rounded-md focus:ring-2 focus:ring-accent focus:outline-none transition font-mono`}
                placeholder="Paste your JSON here..."
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                aria-invalid={!!error}
            />
            {error && (
                <div className="p-3 bg-red-900/50 border border-red-500/50 text-red-300 rounded-md">
                    <strong>Error:</strong> {error}
                </div>
            )}
            <div className="flex flex-wrap gap-2">
                <button onClick={handleFormat} className="px-4 py-2 bg-primary hover:bg-indigo-700 rounded-md text-white transition-colors font-semibold">Format / Beautify</button>
                <button onClick={handleMinify} className="px-4 py-2 bg-secondary hover:bg-purple-700 rounded-md text-white transition-colors font-semibold">Minify</button>
                <button onClick={() => copy(jsonInput)} className="px-4 py-2 bg-accent hover:bg-cyan-700 rounded-md text-white transition-colors font-semibold">{isCopied ? 'Copied!' : 'Copy'}</button>
                <button onClick={handleClear} className="px-4 py-2 bg-transparent border border-red-500 text-red-400 hover:bg-red-500 hover:text-white rounded-md transition-colors font-semibold">Clear</button>
            </div>
        </div>
    );
};
