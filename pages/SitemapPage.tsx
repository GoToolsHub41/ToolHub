import React from 'react';
import { TOOLS } from '../constants';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const SitemapPage: React.FC = () => {
    const [isCopied, copy] = useCopyToClipboard();

    const generateSitemap = () => {
        const today = new Date().toISOString().split('T')[0];
        const baseUrl = "https://example.com/#"; // Base URL for hash router

        const staticPages = [
            { loc: '/', priority: '1.00', lastmod: today },
        ];

        const toolPages = TOOLS.map(tool => ({
            loc: `/tool/${tool.id}`,
            priority: '0.80',
            lastmod: today
        }));

        const allPages = [...staticPages, ...toolPages];

        const urls = allPages.map(page => `
  <url>
    <loc>${baseUrl}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('');

        return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;
    };
    
    const sitemapContent = generateSitemap();

    return (
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30 animate-fade-in">
            <h1 className="text-3xl font-bold text-white mb-4">Generated sitemap.xml</h1>
            <p className="text-gray-300 mb-6">
                Create a file named <code className="bg-gray-900 p-1 rounded">sitemap.xml</code> in the root directory of your website and paste the content below. This helps search engines discover and index all of your tool pages.
            </p>
            <div className="relative">
                <pre className="w-full h-96 p-4 bg-gray-900 border border-gray-700 rounded-md whitespace-pre-wrap text-sm overflow-auto">
                    <code>{sitemapContent}</code>
                </pre>
                 <button
                    onClick={() => copy(sitemapContent)}
                    className="absolute top-3 right-3 px-4 py-2 bg-accent hover:bg-cyan-700 rounded-md text-white transition-colors font-semibold"
                >
                    {isCopied ? 'Copied!' : 'Copy'}
                </button>
            </div>
        </div>
    );
};

export default SitemapPage;
