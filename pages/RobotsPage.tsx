import React from 'react';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const robotsContent = `User-agent: *
Allow: /

Sitemap: https://example.com/sitemap.xml
`;

const RobotsPage: React.FC = () => {
    const [isCopied, copy] = useCopyToClipboard();

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-4">Recommended robots.txt</h1>
            <p className="text-gray-300 mb-6">
                Create a file named <code className="bg-gray-900 p-1 rounded">robots.txt</code> in the root directory of your website and paste the content below. This configuration allows all search engines to crawl your site and points them to your sitemap.
            </p>
            <div className="relative">
                <pre className="w-full p-4 bg-gray-900 border border-gray-700 rounded-md whitespace-pre-wrap text-sm overflow-auto">
                    <code>{robotsContent}</code>
                </pre>
                <button
                    onClick={() => copy(robotsContent)}
                    className="absolute top-3 right-3 px-4 py-2 bg-accent hover:bg-cyan-700 rounded-md text-white transition-colors font-semibold"
                >
                    {isCopied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

export default RobotsPage;
