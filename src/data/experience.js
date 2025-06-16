// 📁 src/data/experience.js
// This file contains all work experience entries displayed in the Timeline section.
// Each experience item contains position, company info, dates, bullet points, and tech stack.

export const experience = [
  {
    position: "Senior Frontend Developer",        // 👨‍💻 Job title
    company: "TechCorp",                          // 🏢 Company name
    location: "San Francisco, CA",                // 🌍 Job location (city, remote, etc.)
    duration: "2021 - Present",                   // 📆 Job duration

    responsibilities: [                           // ✅ Bullet points for responsibilities
      "Led migration from Angular to React, improving performance by 40%",
      "Implemented design system used by 50+ developers",
      "Mentored junior developers and conducted code reviews"
    ],

    technologies: [                               // 💻 Technologies used in this role
      "React", "TypeScript", "GraphQL", "Jest"
    ]
  },

  {
    position: "Frontend Developer",
    company: "Digital Solutions",
    location: "Remote",
    duration: "2018 - 2021",
    responsibilities: [
      "Developed 15+ client websites using React/Next.js",
      "Reduced bundle size by 30% through code splitting",
      "Collaborated with UX team on design system implementation"
    ],
    technologies: [
      "React", "Next.js", "Tailwind CSS", "Node.js"
    ]
  },

  {
    position: "Web Developer Intern",
    company: "StartUp Inc",
    location: "New York, NY",
    duration: "Summer 2017",
    responsibilities: [
      "Built company website with CMS integration",
      "Assisted in developing internal tools",
      "Participated in agile development process"
    ],
    technologies: [
      "JavaScript", "HTML/CSS", "WordPress"
    ]
  }
];
