import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export const QrCodeGenerator: React.FC = () => {
    const [text, setText] = useState('https://example.com');
    const [dataUrl, setDataUrl] = useState('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!text) {
            setDataUrl('');
            if (canvasRef.current) {
                const context = canvasRef.current.getContext('2d');
                context?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            }
            return;
        }

        QRCode.toDataURL(text, {
            width: 256,
            margin: 2,
            color: {
                dark: '#FFFFFF',
                light: '#00000000'
            }
        }, (err, url) => {
            if (err) console.error(err);
            setDataUrl(url);
        });
        
        QRCode.toCanvas(canvasRef.current, text, {
             width: 256,
            margin: 2,
            color: {
                dark: '#FFFFFF',
                light: '#00000000'
            }
        }, (err) => {
            if (err) console.error(err);
        });

    }, [text]);
    
    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = dataUrl;
        link.click();
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-lg">
                <label htmlFor="qr-text" className="block text-sm font-medium text-gray-300 mb-2">
                    Enter Text or URL
                </label>
                <input
                    id="qr-text"
                    type="text"
                    className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md focus:ring-2 focus:ring-accent focus:outline-none transition"
                    placeholder="https://your-website.com"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            
            <div className="p-4 bg-gray-700/50 rounded-lg border border-purple-500/30">
                 <canvas ref={canvasRef} />
            </div>

            {text && (
                <button 
                    onClick={handleDownload}
                    className="px-6 py-3 text-lg font-bold bg-accent hover:bg-cyan-700 rounded-md transition-colors text-white"
                >
                    Download QR Code
                </button>
            )}
        </div>
    );
};
