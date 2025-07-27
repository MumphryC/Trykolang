export interface Project {
  id: number;
  title: string;
  tagline: string;
  summary: string;
  features: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database: string[];
    tools: string[];
  };
  githubUrl: string;
  learned: string;
  color: string;
  images: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  logo: string;
  achievements?: string[];
  gpa?: string;
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  logo: string;
  type: string;
  description?: string;
}

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
  color: string;
  skills?: string[];
  prize?: string;
  validUntil?: string;
  hours?: string;
  gpa?: string;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskFlow Pro",
    tagline: "Collaborative project management with real-time magic ✨",
    summary: "A full-stack web application that transforms team collaboration with real-time updates, intelligent task management, and beautiful analytics. Built to solve scattered project communication with an intuitive dashboard.",
    features: [
      "🚀 Real-time WebSocket collaboration",
      "🎯 Drag-and-drop Kanban boards",
      "🤖 AI-powered task suggestions",
      "📊 Advanced analytics dashboard",
      "📱 Mobile-responsive design",
      "🔔 Smart notifications system"
    ],
    techStack: {
      frontend: ["JavaScript", "HTML/CSS", "Chart.js"],
      backend: ["Flask", "Python"],
      database: ["MySQL"],
      tools: ["Git", "AWS", "Docker"]
    },
    githubUrl: "https://github.com/username/taskflow-pro",
    learned: "Mastered WebSocket architecture and advanced Flask patterns for scalable real-time applications.",
    color: "from-blue-400 via-purple-500 to-pink-500",
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    id: 2,
    title: "ExpenseTracker Mobile",
    tagline: "Smart expense tracking that learns from you 🧠",
    summary: "Flutter mobile app with ML-powered categorization and beautiful analytics. Revolutionizes personal finance management with intelligent automation and stunning visualizations that adapt to user behavior.",
    features: [
      "🧠 ML-powered expense categorization",
      "📱 Cross-platform Flutter architecture",
      "⚡ Offline-first with smart sync",
      "📸 OCR receipt scanning",
      "🔮 Predictive budget insights",
      "💰 Multi-currency support"
    ],
    techStack: {
      frontend: ["Flutter", "Dart"],
      backend: ["Django", "Python"],
      database: ["SQLite"],
      tools: ["Firebase", "Figma", "Git"]
    },
    githubUrl: "https://github.com/username/expense-tracker",
    learned: "Deep-dived into Flutter state management and implemented sophisticated offline-first architecture.",
    color: "from-green-400 via-emerald-500 to-teal-500",
    images: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ]
  },
  {
    id: 3,
    title: "DevOps Pipeline Manager",
    tagline: "Orchestrate deployments like a symphony 🎼",
    summary: "Comprehensive DevOps automation platform with intelligent monitoring and beautiful dashboards. Transforms complex deployment workflows into elegant, automated processes with enterprise-grade reliability.",
    features: [
      "🔄 Automated CI/CD orchestration",
      "📈 Real-time pipeline monitoring",
      "🐳 Docker & Jenkins integration",
      "🔍 Intelligent error detection",
      "⚡ Performance analytics",
      "📢 Smart notification system"
    ],
    techStack: {
      frontend: ["JavaScript", "HTML/CSS"],
      backend: ["Python", "Flask"],
      database: ["MySQL"],
      tools: ["Docker", "Jenkins", "AWS"]
    },
    githubUrl: "https://github.com/username/devops-manager",
    learned: "Mastered containerization patterns and advanced CI/CD automation with enterprise-grade monitoring.",
    color: "from-orange-400 via-red-500 to-pink-500",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ]
  }
];

export const education: Education[] = [
  {
    school: "Bulacan State University - Main",
    degree: "Bachelor of Science in Computer Engineering",
    period: "2024 - 2025",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    achievements: ["GWA: 1.46"]
  },
  {
    school: "Sta. Lucia National High School",
    degree: "Science, Technology, Engineering, and Mathematics (STEM)",
    period: "2019 - 2021",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    achievements: ["Valedictorian", "with High Honor"]
  },
  {
    school: "Sta. Lucia National High School",
    degree: "Junior High",
    period: "2014 - 2019",
    logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    achievements: ["with High Honor"]
  },
  {
    school: "Bulusan Elementary School",
    degree: "Elementary",
    period: "2008 - 2014",
    logo: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    achievements: ["1st Honorable Mention"]
  }
];

export const experience: Experience[] = [
  {
    company: "Alied Care Experts (ACE) Malolos Doctors",
    position: "Database Administrator - IT Support",
    period: "June 2024 - July 2024",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    type: "Intern"
  },
  {
    company: "Alied Care Experts (ACE) Malolos Doctors",
    position: "Marketing Assistant - Graphic Designer",
    period: "August 2024 - October 2024",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    type: "Part-time"
  }
];

export interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
  color: string;
  skills?: string[];
  prize?: string;
  validUntil?: string;
  hours?: string;
  gpa?: string;
  certificateImage?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Full Stack Development Certification",
    organization: "Tech Institute",
    date: "2023",
    description: "Comprehensive certification covering modern web technologies and best practices. Completed intensive 6-month program with hands-on projects.",
    icon: "award",
    color: "from-blue-400 to-purple-500",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    certificateImage: "https://images.unsplash.com/photo-1606721786432-7b9aa43f8c8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Best Mobile App - University Hackathon",
    organization: "State University",
    date: "2023",
    description: "Won first place for innovative expense tracking app with ML integration. Competed against 50+ teams over 48 hours.",
    icon: "trophy",
    color: "from-yellow-400 to-orange-500",
    prize: "$5,000 + Mentorship Program",
    certificateImage: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Open Source Contributor",
    organization: "GitHub",
    date: "2022-Present",
    description: "Active contributor to various open source projects with 50+ merged PRs. Contributed to popular libraries and frameworks.",
    icon: "code",
    color: "from-green-400 to-teal-500",
    skills: ["React Router", "Express.js", "Material-UI"],
    certificateImage: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2022",
    description: "Certified in cloud computing fundamentals and AWS services. Demonstrates knowledge of AWS Cloud concepts and services.",
    icon: "cloud",
    color: "from-purple-400 to-pink-500",
    validUntil: "2025",
    certificateImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "Dean's List Recognition",
    organization: "State University",
    date: "2021-2024",
    description: "Consistently maintained high academic performance throughout university career. Recognized for academic excellence each semester.",
    icon: "award",
    color: "from-indigo-400 to-purple-500",
    gpa: "3.8/4.0",
    certificateImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  },
  {
    title: "JavaScript Algorithms Certification",
    organization: "FreeCodeCamp",
    date: "2021",
    description: "Completed comprehensive JavaScript algorithms and data structures curriculum. Solved 100+ coding challenges.",
    icon: "code",
    color: "from-yellow-400 to-red-500",
    hours: "300+ hours",
    certificateImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  }
];

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "C++", level: 85, color: "from-blue-500 to-blue-700" },
      { name: "Python", level: 90, color: "from-green-400 to-blue-500" },
      { name: "Java", level: 80, color: "from-orange-500 to-red-500" }
    ]
  },
  {
    category: "Web Frameworks",
    skills: [
      { name: "HTML", level: 95, color: "from-orange-400 to-red-500" },
      { name: "CSS", level: 90, color: "from-blue-400 to-purple-500" },
      { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
      { name: "FlutterFlow", level: 75, color: "from-cyan-400 to-blue-500" }
    ]
  },
  {
    category: "Tools and Platforms",
    skills: [
      { name: "Git", level: 85, color: "from-gray-600 to-gray-800" },
      { name: "GitHub", level: 90, color: "from-gray-700 to-black" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 80, color: "from-blue-600 to-indigo-600" }
    ]
  },
  {
    category: "Core Concepts",
    skills: [
      { name: "Object-Oriented Programming (OOP)", level: 88, color: "from-purple-500 to-pink-500" },
      { name: "Data Structures", level: 85, color: "from-green-500 to-teal-500" },
      { name: "Agile Methodology", level: 75, color: "from-indigo-500 to-purple-500" },
      { name: "CI/CD", level: 70, color: "from-red-500 to-pink-500" }
    ]
  },
  {
    category: "Currently Studying",
    skills: [
      { name: "React.js", level: 65, color: "from-cyan-400 to-blue-500" },
      { name: "Node.js", level: 60, color: "from-green-500 to-emerald-500" },
      { name: "MongoDB", level: 55, color: "from-green-600 to-teal-600" },
      { name: "Docker", level: 50, color: "from-blue-500 to-cyan-500" }
    ]
  }
];

export const skills: Skill[] = [
  { name: "Python", level: 90, color: "from-blue-400 to-blue-600" },
  { name: "JavaScript", level: 85, color: "from-yellow-400 to-orange-500" },
  { name: "React/Flutter", level: 80, color: "from-cyan-400 to-blue-500" },
  { name: "Flask/Django", level: 85, color: "from-green-400 to-emerald-600" },
  { name: "DevOps/AWS", level: 75, color: "from-purple-400 to-pink-500" },
  { name: "Database Design", level: 80, color: "from-indigo-400 to-purple-600" }
];
