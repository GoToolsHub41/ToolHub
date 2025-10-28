import type { Tool } from './types';
import { ToolCategory } from './types';
import { WordCounter } from './pages/tools/WordCounter';
import { CaseConverter } from './pages/tools/CaseConverter';
import { PasswordGenerator } from './pages/tools/PasswordGenerator';
import { AITextSummarizer } from './pages/tools/AITextSummarizer';
import { ColorPicker } from './pages/tools/ColorPicker';
import { JsonFormatter } from './pages/tools/JsonFormatter';
import { QrCodeGenerator } from './pages/tools/QrCodeGenerator';
import { MetaTagGenerator } from './pages/tools/MetaTagGenerator';
import { TextIcon, SecurityIcon, AIIcon, CodeIcon, FileIcon, ImageIcon, VideoIcon, SEOIcon } from './components/icons/CategoryIcons';
import React from 'react';

// A placeholder component for tools that are not yet implemented.
const PlaceholderTool: React.FC = () => (
    React.createElement('div', { className: "text-center p-8 bg-gray-800/50 rounded-lg" },
        React.createElement('h2', { className: "text-2xl font-bold text-accent mb-4" }, "Tool Coming Soon!"),
        React.createElement('p', null, "This tool is under construction and will be available shortly.")
    )
);


export const TOOLS: Tool[] = [
  // Implemented Tools
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    category: ToolCategory.TEXT,
    icon: TextIcon,
    component: WordCounter,
    keywords: ['word count', 'character counter', 'text analysis', 'online tool'],
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text to uppercase, lowercase, sentence case, and more.',
    category: ToolCategory.TEXT,
    icon: TextIcon,
    component: CaseConverter,
    keywords: ['case converter', 'uppercase', 'lowercase', 'text tool'],
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Create strong, secure, and random passwords for your accounts.',
    category: ToolCategory.SECURITY,
    icon: SecurityIcon,
    component: PasswordGenerator,
    keywords: ['password generator', 'secure password', 'random password', 'security tool'],
  },
  {
    id: 'qr-code-generator',
    name: 'QR Code Generator',
    description: 'Create custom QR codes for URLs, text, Wi-Fi, and more.',
    category: ToolCategory.SECURITY,
    icon: SecurityIcon,
    component: QrCodeGenerator,
    keywords: ['qr code generator', 'free qr code', 'security tool'],
  },
  {
    id: 'ai-text-summarizer',
    name: 'AI Text Summarizer',
    description: 'Use AI to summarize long articles or text into concise points.',
    category: ToolCategory.AI,
    icon: AIIcon,
    component: AITextSummarizer,
    keywords: ['ai summarizer', 'text summary', 'gemini ai', 'content tool'],
  },
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'An interactive color picker to find the perfect hex, RGB, and HSL codes.',
    category: ToolCategory.CODING,
    icon: CodeIcon,
    component: ColorPicker,
    keywords: ['color picker', 'hex code', 'rgb color', 'web design tool'],
  },
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate, and beautify your JSON data for readability.',
    category: ToolCategory.CODING,
    icon: CodeIcon,
    component: JsonFormatter,
    keywords: ['json formatter', 'json validator', 'beautify json', 'coding tool'],
  },
  {
    id: 'meta-tag-generator',
    name: 'Meta Tag Generator',
    description: 'Create SEO-friendly meta tags for your website pages.',
    category: ToolCategory.SEO,
    icon: SEOIcon,
    component: MetaTagGenerator,
    keywords: ['meta tag generator', 'seo tool', 'on-page seo'],
  },
  
  // Placeholder Tools
  {
    id: 'pdf-compressor',
    name: 'PDF Compressor',
    description: 'Reduce the file size of your PDF documents quickly and easily.',
    category: ToolCategory.FILE,
    icon: FileIcon,
    component: PlaceholderTool,
    keywords: ['pdf compressor', 'reduce pdf size', 'file tool'],
  },
  {
    id: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images to your desired dimensions without losing quality.',
    category: ToolCategory.IMAGE,
    icon: ImageIcon,
    component: PlaceholderTool,
    keywords: ['image resizer', 'photo resizer', 'image tool'],
  },
  {
    id: 'mp4-to-mp3',
    name: 'MP4 to MP3 Converter',
    description: 'Extract audio from your video files and convert them to MP3.',
    category: ToolCategory.VIDEO,
    icon: VideoIcon,
    component: PlaceholderTool,
    keywords: ['mp4 to mp3', 'video to audio', 'converter'],
  },
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator',
    description: 'Generate creative text content for blogs, ads, and social media.',
    category: ToolCategory.AI,
    icon: AIIcon,
    component: PlaceholderTool,
    keywords: ['ai writer', 'content generator', 'copywriting tool'],
  },
];