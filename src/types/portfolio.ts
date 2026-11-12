export interface SkillItem {
  name: string;
  level: 'Beginner' | 'Learning' | 'Foundational';
  description: string;
  iconName: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface DevelopingCapability {
  id: string;
  number: string;
  title: string;
  description: string;
  focusAreas: string[];
  toolsUsed: string[];
  iconName: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  type: 'Hackathon & Ideathon' | 'Technical Learning' | 'Coding Exploration';
  period: string;
  description: string;
  tags: string[];
  highlights: string[];
}

export interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  description: string;
  code: string;
  output: string;
}
