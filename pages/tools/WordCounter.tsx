
import React, { useState, useMemo } from 'react';

export const WordCounter: React.FC = () => {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmedText = text.trim();
    const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const characters = text.length;
    const sentences = text.match(/[^.!?]+[.!?]+/g)?.length || 0;
    const paragraphs = trimmedText ? trimmedText.split(/\n+/).length : 0;
    return { words, characters, sentences, paragraphs };
  }, [text]);

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-64 p-4 bg-gray-900 border border-gray-700 rounded-md focus:ring-2 focus:ring-accent focus:outline-none transition"
        placeholder="Start typing or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <p className="text-2xl font-bold text-cyan-400">{stats.words}</p>
          <p className="text-sm text-gray-400">Words</p>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <p className="text-2xl font-bold text-cyan-400">{stats.characters}</p>
          <p className="text-sm text-gray-400">Characters</p>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <p className="text-2xl font-bold text-cyan-400">{stats.sentences}</p>
          <p className="text-sm text-gray-400">Sentences</p>
        </div>
        <div className="p-4 bg-gray-700/50 rounded-lg">
          <p className="text-2xl font-bold text-cyan-400">{stats.paragraphs}</p>
          <p className="text-sm text-gray-400">Paragraphs</p>
        </div>
      </div>
    </div>
  );
};
