// 📁 src/data/techStack.js
// This file defines all technologies displayed in the Tech Stack section carousel.
// Each entry includes a display name and a corresponding icon from `react-icons`.

import { 
  SiReact, 
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiGraphql,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiJest,
  SiPython,
  SiDjango,
  SiAmazon, // Use SiAmazon to represent AWS
  SiFigma
} from 'react-icons/si';

// 🧠 Each technology has:
// - `name`: What shows up below the icon
// - `icon`: A React component from `react-icons/si`

export const techStack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Jest", icon: SiJest },
  { name: "Python", icon: SiPython },
  { name: "Django", icon: SiDjango },
  { name: "AWS", icon: SiAmazon },
  { name: "Figma", icon: SiFigma }
];
