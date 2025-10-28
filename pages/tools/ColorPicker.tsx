
import React, { useState } from 'react';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';

// Simple conversion functions
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

const ColorValue: React.FC<{ label: string; value: string }> = ({ label, value }) => {
    const [isCopied, copy] = useCopyToClipboard();
    return (
        <div className="bg-gray-700/50 p-3 rounded-lg flex items-center justify-between">
            <div>
                <span className="text-xs text-gray-400">{label}</span>
                <p className="font-mono text-white">{value}</p>
            </div>
            <button onClick={() => copy(value)} className="text-sm px-3 py-1 bg-cyan-600 hover:bg-cyan-700 rounded-md transition-colors">{isCopied ? 'Copied!' : 'Copy'}</button>
        </div>
    );
};


export const ColorPicker: React.FC = () => {
    const [color, setColor] = useState('#6366f1');

    const rgb = hexToRgb(color);
    const hsl = rgb ? rgbToHsl(rgb.r, rgb.g, rgb.b) : null;
    
    const rgbString = rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : 'N/A';
    const hslString = hsl ? `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` : 'N/A';

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="relative">
                <div style={{ backgroundColor: color }} className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-gray-700 shadow-2xl shadow-purple-500/20"></div>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>
            <div className="w-full md:w-auto md:min-w-[300px] space-y-3">
                <ColorValue label="HEX" value={color} />
                <ColorValue label="RGB" value={rgbString} />
                <ColorValue label="HSL" value={hslString} />
            </div>
        </div>
    );
};
