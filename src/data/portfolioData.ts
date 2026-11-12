import { SkillCategory, DevelopingCapability, ActivityItem, CodeSnippet } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Rasaputra Prathap Singh',
  titles: [
    'Aspiring AI Engineer',
    'Python Developer',
    'Web Development Enthusiast',
    'Generative AI Explorer',
  ],
  bio: 'I am a first-year B.Tech CSE (AI) student passionate about Python programming, web development and Generative AI. I am currently exploring the world of artificial intelligence, building my technical foundation and developing problem-solving skills. I enjoy participating in hackathons and ideathons, exploring innovative ideas and continuously learning emerging technologies.',
  status: 'First Year, First Semester',
  degree: 'Bachelor of Technology (B.Tech)',
  department: 'Computer Science Engineering (AI)',
  institution: 'Joy University',
  profileImage: '/assets/aistudio/Composed_Student_Portrait_in_Charcoal_Shirt_2523a5c2.png',
  campusImage: '/assets/aistudio/IMG_20260630_153811_0fbd46b9.jpg',
  hackathonImage: '/src/assets/images/hackathon_collaboration_1794384760815.jpg',
  email: 'prathapsingh2708@gmail.com',
  github: 'https://github.com/prathapsingh27/python-file',
  linkedin: 'https://www.linkedin.com/in/prathap-singh-ab5852441/',
  location: 'Joy University Campus, India',
};

export const CORE_PILLARS = [
  {
    title: 'Algorithmic Curiosity',
    description: 'Developing foundational problem-solving abilities in Python, focusing on modular logic, data representations, and clean code principles.',
    iconName: 'Terminal',
  },
  {
    title: 'Generative AI Exploration',
    description: 'Experimenting with modern LLMs, prompt structuring, and practical AI applications to understand autonomous reasoning and intelligent tooling.',
    iconName: 'Sparkles',
  },
  {
    title: 'Web Craftsmanship',
    description: 'Learning modern web standards with HTML5 and CSS3 to design responsive, user-friendly digital experiences and showcase technical projects.',
    iconName: 'Layout',
  },
  {
    title: 'Ideathons & Collaboration',
    description: 'Actively participating in collegiate hackathons and ideathons to brainstorm solutions, pitch concepts, and iterate fast with peers.',
    iconName: 'Users',
  },
];

export const EDUCATION_DATA = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Computer Science & Engineering (Artificial Intelligence)',
  institution: 'Joy University',
  timeline: '2027 - 2030',
  currentSemester: 'First Year · Semester I',
  overview:
    'Enrolled in an intensive undergraduate curriculum specializing in Artificial Intelligence. Developing fundamental computer science competencies spanning computational logic, programming syntax, and engineering mathematics.',
  coursework: [
    {
      code: 'CS101',
      title: 'Problem Solving & Python Programming',
      description: 'Core concepts including data types, conditional structures, loops, functions, file handling, and algorithmic thinking.',
    },
    {
      code: 'MA101',
      title: 'Engineering Mathematics & Linear Logic',
      description: 'Foundations for future machine learning: matrix operations, calculus fundamentals, and discrete analysis.',
    },
    {
      code: 'IT102',
      title: 'Web Foundations: HTML & CSS',
      description: 'Semantic markup architecture, modern layout techniques (Flexbox, Grid), and responsive styling.',
    },
    {
      code: 'AI100',
      title: 'Introduction to Artificial Intelligence',
      description: 'Conceptual paradigms of intelligence, search strategies, knowledge representation, and contemporary AI societal impacts.',
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    iconName: 'Code',
    skills: [
      {
        name: 'Python',
        level: 'Foundational',
        description: 'Primary programming language for coursework, automation, and algorithmic problem solving.',
        iconName: 'Code2',
      },
    ],
  },
  {
    title: 'Web Development',
    iconName: 'Globe',
    skills: [
      {
        name: 'HTML',
        level: 'Foundational',
        description: 'Semantic page structuring, accessible document layouts, and web page architecture.',
        iconName: 'FileCode',
      },
      {
        name: 'CSS',
        level: 'Learning',
        description: 'Styling, layout models (Flexbox & Grid), responsive design, and CSS animations.',
        iconName: 'Palette',
      },
    ],
  },
  {
    title: 'Artificial Intelligence',
    iconName: 'Brain',
    skills: [
      {
        name: 'Generative AI',
        level: 'Beginner',
        description: 'Exploring LLM workflows, prompt design patterns, and creative multimodal experiments.',
        iconName: 'Bot',
      },
      {
        name: 'AI & ML Fundamentals',
        level: 'Learning',
        description: 'Studying core theoretical models, supervised learning concepts, and mathematical building blocks.',
        iconName: 'Cpu',
      },
    ],
  },
  {
    title: 'Professional & Collaborative',
    iconName: 'Compass',
    skills: [
      {
        name: 'Problem Solving',
        level: 'Foundational',
        description: 'Analytical decomposition of coding challenges and systematic debugging approaches.',
        iconName: 'Lightbulb',
      },
      {
        name: 'Creative Thinking',
        level: 'Foundational',
        description: 'Generating novel project concepts and interdisciplinary perspectives on technology.',
        iconName: 'Zap',
      },
      {
        name: 'Hackathons',
        level: 'Learning',
        description: 'Active participant in collegiate hackathons, working under time constraints to prototype solutions.',
        iconName: 'Flame',
      },
      {
        name: 'Ideathons',
        level: 'Learning',
        description: 'Pitching technology-driven ideas, problem framing, and structuring impactful proposals.',
        iconName: 'Rocket',
      },
    ],
  },
];

export const DEVELOPING_CAPABILITIES: DevelopingCapability[] = [
  {
    id: 'python-programming',
    number: '01',
    title: 'Basic Python Programming',
    description: 'Writing structured, readable Python scripts with clean logic flow, handling inputs, file operations, and algorithmic routines.',
    focusAreas: ['Syntax & Data Structures', 'Functions & Modular Code', 'File Operations', 'Console Utilities'],
    toolsUsed: ['Python 3', 'VS Code', 'Git'],
    iconName: 'FileCode2',
  },
  {
    id: 'simple-web-dev',
    number: '02',
    title: 'Simple Website Development',
    description: 'Crafting responsive, clean web pages using semantic HTML5 and modern CSS3 for personal portfolios, documentation, and mockups.',
    focusAreas: ['Semantic HTML5', 'Responsive Layouts', 'CSS Modern Selectors', 'Mobile Viewports'],
    toolsUsed: ['HTML5', 'CSS3', 'Modern Browsers'],
    iconName: 'Laptop',
  },
  {
    id: 'ai-exploration',
    number: '03',
    title: 'AI-Powered Project Exploration',
    description: 'Investigating practical Generative AI applications, experimenting with prompt engineering frameworks and AI tool pipelines.',
    focusAreas: ['Prompt Engineering', 'Generative Workflows', 'AI Model Capabilities', 'Ethical AI Considerations'],
    toolsUsed: ['Generative AI Models', 'AI Developer Tools'],
    iconName: 'Sparkles',
  },
  {
    id: 'automation-solutions',
    number: '04',
    title: 'Basic Automation Solutions',
    description: 'Designing straightforward Python scripts to automate repetitive tasks, text parsing, and file organization for study workflows.',
    focusAreas: ['Repetitive Task Scripts', 'Batch File Renaming', 'Data Formatting', 'CLI Helpers'],
    toolsUsed: ['Python OS/Sys Modules', 'Automation Scripts'],
    iconName: 'Workflow',
  },
  {
    id: 'creative-problem-solving',
    number: '05',
    title: 'Creative Problem Solving',
    description: 'Approaching technical and practical challenges with fresh curiosity, decomposing ambiguous prompts into actionable steps.',
    focusAreas: ['Problem Decomposition', 'Hypothesis Testing', 'Iterative Refinement', 'Ideathon Concept Maps'],
    toolsUsed: ['Flowcharts', 'Markdown Notes', 'Design Thinking'],
    iconName: 'BrainCircuit',
  },
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    id: 'hackathon-pursuits',
    title: 'Collegiate Hackathons & Rapid Prototyping',
    type: 'Hackathon & Ideathon',
    period: '2027 - 2030',
    description:
      'Participating actively in student hackathons to collaborate in high-energy environments, brainstorm rapid prototypes, and test developing coding skills under time limitations.',
    tags: ['Teamwork', 'Rapid Prototyping', 'Joy University Events'],
    highlights: [
      'Collaborated with peers to conceptualize functional technical pitches.',
      'Explored hands-on coding under strict event deadlines.',
      'Practiced articulating solution value and system architecture.',
    ],
  },
  {
    id: 'ideathon-exploration',
    title: 'Technology Ideathons & Innovation Pitches',
    type: 'Hackathon & Ideathon',
    period: '2027 - 2030',
    description:
      'Engaging in university ideathons focused on societal challenges, emerging AI opportunities, and software-based interventions.',
    tags: ['Idea Validation', 'Pitch Decks', 'Innovation Strategy'],
    highlights: [
      'Formulated structured problem statements for real-world user pain points.',
      'Designed conceptual blueprints for AI-assisted educational and workflow tools.',
      'Received constructive mentor feedback on technical feasibility and scope.',
    ],
  },
  {
    id: 'python-file-repo',
    title: 'Hands-On Python Code Repository',
    type: 'Coding Exploration',
    period: 'Active Repository',
    description:
      'Maintaining an active GitHub repository (prathapsingh27/python-file) documenting daily programming exercises, algorithmic explorations, and foundational scripts.',
    tags: ['GitHub', 'Open Code', 'Continuous Learning'],
    highlights: [
      'Documented core Python algorithms, loops, functions, and data structures.',
      'Applied disciplined version control and commit habits.',
      'Explored practical exercises from class lectures and online coding problems.',
    ],
  },
  {
    id: 'continuous-ai-foundation',
    title: 'Continuous AI & ML Foundation Building',
    type: 'Technical Learning',
    period: 'First Semester',
    description:
      'Dedication to daily self-directed study in artificial intelligence fundamentals, reading technical articles, and following advances in Generative AI.',
    tags: ['Self-Study', 'Math for AI', 'GenAI Horizons'],
    highlights: [
      'Studying foundational linear algebra and probability for machine learning.',
      'Testing emerging AI capabilities and analyzing prompt response behavior.',
      'Building strong foundational habits for long-term engineering excellence.',
    ],
  },
];

export const SAMPLE_CODE_SNIPPETS: CodeSnippet[] = [
  {
    id: 'fibonacci-demo',
    title: 'fibonacci_generator.py',
    language: 'python',
    description: 'Foundational algorithmic logic generating the Fibonacci sequence iteratively with time complexity tracking.',
    code: `def generate_fibonacci(n: int) -> list[int]:
    """Generate the first n numbers of the Fibonacci sequence."""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    
    sequence = [0, 1]
    while len(sequence) < n:
        next_val = sequence[-1] + sequence[-2]
        sequence.append(next_val)
    return sequence

# Test execution with n = 8
if __name__ == "__main__":
    count = 8
    result = generate_fibonacci(count)
    print(f"Fibonacci({count}): {result}")
    print(f"Golden Ratio approx: {result[-1] / result[-2]:.5f}")`,
    output: `Fibonacci(8): [0, 1, 1, 2, 3, 5, 8, 13]
Golden Ratio approx: 1.62500`,
  },
  {
    id: 'automation-demo',
    title: 'text_cleaner_automation.py',
    language: 'python',
    description: 'Basic text processing and automation script that normalizes input strings and computes vocabulary frequency.',
    code: `def analyze_text(content: str) -> dict:
    """Clean text, remove punctuation, and calculate keyword frequencies."""
    words = [w.strip(".,!?:;").lower() for w in content.split()]
    freq = {}
    for word in words:
        if word:
            freq[word] = freq.get(word, 0) + 1
    return {
        "total_words": len(words),
        "unique_words": len(freq),
        "top_keywords": sorted(freq.items(), key=lambda x: x[1], reverse=True)[:3]
    }

sample = "Exploring Artificial Intelligence and Python. Python makes AI exciting and accessible!"
stats = analyze_text(sample)
print("Text Analysis Results:")
print(f"Total Words: {stats['total_words']} | Unique: {stats['unique_words']}")
print(f"Top Keywords: {stats['top_keywords']}")`,
    output: `Text Analysis Results:
Total Words: 11 | Unique: 10
Top Keywords: [('python', 2), ('exploring', 1), ('artificial', 1)]`,
  },
  {
    id: 'prompt-demo',
    title: 'ai_prompt_builder.py',
    language: 'python',
    description: 'A modular prompt engineering builder to construct structured context instructions for LLM tasks.',
    code: `class PromptArchitect:
    def __init__(self, role: str, goal: str):
        self.role = role
        self.goal = goal
        self.constraints = []
        
    def add_constraint(self, rule: str):
        self.constraints.append(rule)
        return self
        
    def build(self, query: str) -> str:
        rules_text = "\\n".join([f"- {c}" for c in self.constraints])
        return f"SYSTEM ROLE: {self.role}\\nGOAL: {self.goal}\\nCONSTRAINTS:\\n{rules_text}\\n\\nUSER QUERY: {query}"

builder = (PromptArchitect("AI Study Companion", "Explain ML concepts intuitively")
           .add_constraint("Use real-world analogies")
           .add_constraint("Keep explanations under 100 words"))

print(builder.build("What is a Neural Network?"))`,
    output: `SYSTEM ROLE: AI Study Companion
GOAL: Explain ML concepts intuitively
CONSTRAINTS:
- Use real-world analogies
- Keep explanations under 100 words

USER QUERY: What is a Neural Network?`,
  },
];
