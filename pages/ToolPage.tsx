import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { TOOLS } from '../constants';
import AdPlaceholder from '../components/AdPlaceholder';

const ToolPage: React.FC = () => {
  const { toolId } = useParams<{ toolId: string }>();
  const tool = TOOLS.find(t => t.id === toolId);

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  const ToolComponent = tool.component;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": tool.name,
    "applicationCategory": "BrowserApplication",
    "operatingSystem": "Any",
    "description": tool.description,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
  
  const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://example.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": tool.name
      }]
  };

  return (
    <>
      <title>{`${tool.name} | ToolGalaxyHub`}</title>
      <meta name="description" content={tool.description} />
      <meta name="keywords" content={['ToolGalaxyHub', tool.name, ...tool.keywords].join(', ')} />
      <link rel="canonical" href={`https://example.com/#/tool/${tool.id}`} />
      <meta property="og:title" content={`${tool.name} | ToolGalaxyHub`} />
      <meta property="og:description" content={tool.description} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      
      <div className="space-y-8 animate-fade-in">
        <div>
           <div className="text-sm text-gray-400 mb-4">
             <Link to="/" className="hover:text-cyan-400">Home</Link>
             <span className="mx-2">&gt;</span>
             <span>{tool.name}</span>
           </div>
          <div className="flex items-center space-x-4 mb-2">
             <tool.icon className="h-10 w-10 text-cyan-400" />
             <h1 className="text-3xl md:text-4xl font-bold text-white">{tool.name}</h1>
          </div>
          <p className="text-gray-300">{tool.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-9">
                <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30">
                    <ToolComponent />
                </div>
            </div>
            <aside className="lg:col-span-3 space-y-6">
                <AdPlaceholder className="h-64" text="Sidebar Ad (300x250)" />
                <AdPlaceholder className="h-64" text="Affiliate Banner" />
            </aside>
        </div>

        <div className="mt-12 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/30">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-cyan-300">Is the {tool.name} tool free to use?</h3>
              <p className="text-gray-400">Yes, absolutely! The {tool.name} and all other tools on ToolGalaxyHub are completely free to use without any limits or sign-up requirements.</p>
            </div>
             <div>
              <h3 className="font-semibold text-cyan-300">Is my data safe?</h3>
              <p className="text-gray-400">Your privacy is our priority. All processing for this tool happens directly in your browser. No data is ever sent to or stored on our servers.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolPage;