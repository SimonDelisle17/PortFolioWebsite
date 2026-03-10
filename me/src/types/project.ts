export interface Project {
  id: number;
  title: string;
  category: 'backend' | 'frontend' | 'mobile' | 'ai' | 'fullstack' | 'devops';
  tags: string[];
  shortDescription: string;
  icon: string;
  impact: string;
  detailedDescription: string;
  features: string[];
  technologies: {
    [key: string]: string[];
  };
  metrics: {
    [key: string]: string;
  };
  architecture: string;
  liveUrl: string | null;
  featured?: boolean;
  problem?: string;
  lesson?: string;
}

export type ProjectCategory = 'all' | 'backend' | 'frontend' | 'mobile' | 'ai' | 'fullstack' | 'devops';
