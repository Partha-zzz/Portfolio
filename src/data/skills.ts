export interface SkillItem {
  name: string;
  description: string;
  tag?: string;
  secondaryTag?: string;
}

export interface SkillGroup {
  category: string;
  badgeBg: string;
  badgeText: string;
  skills: SkillItem[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "PROGRAMMING",
    badgeBg: "#FFD600",
    badgeText: "#111111",
    skills: [
      { name: "Python", description: "Primary language for ML, Data Science & Backend", tag: "CORE" },
      { name: "Java", description: "Object-oriented software development & DSA", tag: "OOP" },
      { name: "C", description: "Systems programming & memory fundamentals", tag: "LOW-LEVEL" },
    ],
  },
  {
    category: "DATA SCIENCE",
    badgeBg: "#635BFF",
    badgeText: "#FFFFFF",
    skills: [
      { name: "Pandas", description: "Data manipulation, transformation & analysis", tag: "ANALYSIS" },
      { name: "NumPy", description: "Numerical computing & array operations", tag: "MATH" },
      { name: "SQL", description: "Relational queries, window functions & aggregations", tag: "DATABASE" },
      { name: "Matplotlib", description: "Data visualization & statistical plotting", tag: "VISUALS" },
    ],
  },
  {
    category: "MACHINE LEARNING",
    badgeBg: "#111111",
    badgeText: "#FFD600",
    skills: [
      {
        name: "Scikit-learn",
        description: "Classical machine learning, preprocessing and model development.",
        tag: "ML",
      },
      {
        name: "TensorFlow",
        description: "Neural networks, model training and inference.",
        tag: "DEEP LEARNING",
      },
      {
        name: "Computer Vision",
        description: "Image classification, detection and visual ML.",
        tag: "VISION",
      },
      {
        name: "Deep Learning",
        description: "CNNs, transfer learning and deep learning concepts.",
        tag: "NEURAL NETWORKS",
      },
    ],
  },
  {
    category: "WEB & TOOLS",
    badgeBg: "#D9D9D4",
    badgeText: "#111111",
    skills: [
      { name: "Next.js", description: "App Router, SSR & React framework", tag: "FRAMEWORK" },
      { name: "React", description: "Component-driven UI architecture", tag: "FRONTEND" },
      { name: "Tailwind CSS", description: "Utility-first neo-brutalist styling", tag: "STYLES" },
      { name: "Git & GitHub", description: "Version control, commits & collaboration", tag: "DEV OPS" },
      {
        name: "JavaScript / TypeScript",
        description: "Modern web frontend & application logic with AI-assisted / vibe coding workflows.",
        tag: "WEB",
        secondaryTag: "VIBE CODING",
      },
    ],
  },
];
