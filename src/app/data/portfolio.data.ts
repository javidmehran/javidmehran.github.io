export interface Project {
  name: string;
  description: string;
  language: string | null;
  stars: number;
  url: string;
  account: 'new' | 'old';
  tags: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const PROFILE = {
  name: 'Mehran Javid',
  title: 'Software Engineer',
  company: 'Sabre',
  location: 'Pakistan',
  bio: 'Software engineer at Sabre who enjoys shipping useful products — from React Native apps to low-level Assembly experiments. Excited about building things people actually use.',
  tagline: 'Exciting time in the world right now, exciting time.',
  avatarUrl: 'assets/profile/avatar.jpg',
  links: {
    linkedin: 'https://www.linkedin.com/in/mehranjavid/',
    githubNew: 'https://github.com/javidmehran',
    githubOld: 'https://github.com/mehranjavid',
    instagram: 'https://instagram.com/mehrunova',
    npm: 'https://www.npmjs.com/~mehranjavid',
  },
};

export const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Sabre',
    period: 'Present',
    location: 'Pakistan',
    highlights: [
      'Building software in the travel-tech space at Sabre.',
      'Working across modern web and mobile stacks to ship reliable features.',
      'Collaborating with engineers to keep systems fast, clear, and maintainable.',
    ],
  },
  {
    role: 'Independent Builder',
    company: 'Open Source & Side Projects',
    period: '2018 — Present',
    location: 'GitHub',
    highlights: [
      'React Native libraries and experiments (maps, camera, toasts, splash screens).',
      'Systems & hardware curiosity: Assembly text editor, RISC-V notes, Arduino glider control.',
      'Game and utility projects spanning C#, Kotlin, C++, and TypeScript.',
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'C++', 'C#', 'Kotlin', 'Assembly', 'HTML/CSS'],
  },
  {
    title: 'Mobile & Frontend',
    items: ['React Native', 'Angular', 'React', 'Responsive UI'],
  },
  {
    title: 'Systems & Embedded',
    items: ['RISC-V', 'Arduino', 'x86 Assembly', 'SoC exploration'],
  },
  {
    title: 'Practices',
    items: ['Git', 'Open Source', 'API design', 'Debugging', 'Product thinking'],
  },
];

export const PROJECTS: Project[] = [
  {
    name: 'react-native-simple-map',
    description: 'A practical React Native map experience — clean, focused, and built for real mobile use.',
    language: 'TypeScript',
    stars: 3,
    url: 'https://github.com/javidmehran/react-native-simple-map',
    account: 'new',
    tags: ['React Native', 'Mobile', 'Maps'],
  },
  {
    name: 'Routines',
    description: 'A TypeScript project exploring everyday routines as software — structure for habits that stick.',
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/mehranjavid/Routines',
    account: 'old',
    tags: ['TypeScript', 'Productivity'],
  },
  {
    name: 'TextEditorAssembly',
    description: 'A text editor written in Assembly — proof that the stack can go as low as you dare.',
    language: 'Assembly',
    stars: 0,
    url: 'https://github.com/mehranjavid/TextEditorAssembly',
    account: 'old',
    tags: ['Assembly', 'Systems'],
  },
  {
    name: 'ArduinoBasedGlider',
    description: 'Complete flight control for a glider using Arduino — software meeting the sky.',
    language: 'C++',
    stars: 0,
    url: 'https://github.com/mehranjavid/ArduinoBasedGlider',
    account: 'old',
    tags: ['Arduino', 'Embedded', 'C++'],
  },
  {
    name: 'RV32I-Instructions',
    description: 'Notes and exploration around the RV32I instruction set — learning the machine from the metal up.',
    language: null,
    stars: 1,
    url: 'https://github.com/mehranjavid/RV32I-Instructions',
    account: 'old',
    tags: ['RISC-V', 'Architecture'],
  },
  {
    name: 'Sokoban',
    description: 'Classic Sokoban puzzle game implementation in C#.',
    language: 'C#',
    stars: 0,
    url: 'https://github.com/mehranjavid/Sokoban',
    account: 'old',
    tags: ['Games', 'C#'],
  },
  {
    name: 'batteryAlert',
    description: 'Android battery alert utility written in Kotlin.',
    language: 'Kotlin',
    stars: 0,
    url: 'https://github.com/mehranjavid/batteryAlert',
    account: 'old',
    tags: ['Android', 'Kotlin'],
  },
  {
    name: 'pet-rescue',
    description: 'Helping adopters and fosters connect with pets through grassroots rescue organizations.',
    language: 'HTML',
    stars: 0,
    url: 'https://github.com/javidmehran/pet-rescue',
    account: 'new',
    tags: ['Community', 'Web'],
  },
];

export const RECYCLE_ITEMS = [
  { name: 'console.log("why")', reason: 'Debugged in production. Once. Never again.' },
  { name: 'Untitled Folder (final) (FINAL2)', reason: 'Naming is hard. Shipping is harder.' },
  { name: 'TODO: refactor later', reason: 'Later never came. Recycled with honor.' },
  { name: 'merge-conflict.html', reason: 'Both of us were right. Git disagreed.' },
  { name: 'password123.txt', reason: 'Obviously never a real password. Obviously.' },
];
