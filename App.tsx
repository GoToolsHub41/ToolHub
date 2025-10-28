import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ToolPage from './pages/ToolPage';
import AdPlaceholder from './components/AdPlaceholder';
import SitemapPage from './pages/SitemapPage';
import RobotsPage from './pages/RobotsPage';

function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-transparent">
        <title>ToolGalaxyHub - Your Free Online Tools Universe</title>
        <meta name="description" content="A free all-in-one platform offering dozens of useful online tools across multiple categories like Text, Image, AI, and Coding. All browser-based, no login required." />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://example.com/",
            "name": "ToolGalaxyHub",
            "description": "Your Free Online Tools Universe. Dozens of free, browser-based tools with no login required.",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://example.com/#/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <AdPlaceholder className="h-24 mb-6" text="Top Banner Ad (728x90)" />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tool/:toolId" element={<ToolPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/robots" element={<RobotsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;