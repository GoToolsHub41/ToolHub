
import React from 'react';

export enum ToolCategory {
  FILE = 'File Tools',
  IMAGE = 'Image Tools',
  TEXT = 'Text & Data Tools',
  VIDEO = 'Video & Audio Tools',
  SECURITY = 'Security Tools',
  AI = 'AI Tools',
  CODING = 'Coding & Web Tools',
  SEO = 'SEO & Analytics',
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: React.ComponentType<{ className?: string }>;
  component: React.ComponentType;
  keywords: string[];
}
