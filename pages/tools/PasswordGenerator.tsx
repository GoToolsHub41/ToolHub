
import React, { useState, useCallback, useEffect } from 'react';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

export const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [isCopied, copy] = useCopyToClipboard();

  const generatePassword = useCallback(() => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let charPool = lower;
    if (includeUppercase) charPool += upper;
    if (includeNumbers) charPool += numbers;
    if (includeSymbols) charPool += symbols;

    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }
    setPassword(newPassword);
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          readOnly
          value={password}
          className="w-full p-4 pr-24 bg-gray-900 border border-gray-700 rounded-md text-xl font-mono tracking-wider"
          placeholder="Your password will appear here"
        />
        <button onClick={() => copy(password)} className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-md text-white transition-colors">
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="length" className="block text-sm font-medium text-gray-300">Password Length: {length}</label>
          <input
            id="length"
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <input id="uppercase" type="checkbox" checked={includeUppercase} onChange={(e) => setIncludeUppercase(e.target.checked)} className="w-4 h-4 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary"/>
            <label htmlFor="uppercase" className="ml-2 text-sm font-medium">Include Uppercase (A-Z)</label>
          </div>
          <div className="flex items-center">
            <input id="numbers" type="checkbox" checked={includeNumbers} onChange={(e) => setIncludeNumbers(e.target.checked)} className="w-4 h-4 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary"/>
            <label htmlFor="numbers" className="ml-2 text-sm font-medium">Include Numbers (0-9)</label>
          </div>
          <div className="flex items-center">
            <input id="symbols" type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="w-4 h-4 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary"/>
            <label htmlFor="symbols" className="ml-2 text-sm font-medium">Include Symbols (!@#$...)</label>
          </div>
        </div>
      </div>
      <button onClick={generatePassword} className="w-full py-3 text-lg font-bold bg-primary hover:bg-indigo-700 rounded-md transition-colors">
        Generate New Password
      </button>
    </div>
  );
};
