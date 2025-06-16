// 📁 src/data/projects.js
// This file controls all the projects shown in the "Projects" section of your portfolio.
// You can add, remove, or modify project entries below.

export const projects = [
  // ✅ Example Project 1
  {
    id: 1,  // 🔑 Each project must have a unique ID
    title: 'E-commerce Platform',  // 🏷️ Project title shown as heading
    description: 'A full-featured e-commerce platform with product listings, cart functionality, and payment processing.', // 📝 Short description of the project
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],  // 🔧 Technologies used (shown as tags)
    image: '/project1.jpg',  // 🖼️ Image path (place in public folder or use external link)
    github: 'https://github.com',  // 🔗 GitHub repo URL
    live: 'https://example.com',  // 🔗 Live demo URL
    category: 'Full Stack'  // 📂 Project category: 'Frontend', 'Backend', or 'Full Stack'
  },

  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with drag-and-drop functionality and team collaboration.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: '/project2.jpg',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Frontend'
  },

  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with modern web technologies.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '/project3.jpg',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Frontend'
  },

  {
    id: 4,
    title: 'Social Media API',
    description: 'A RESTful API for a social media platform with user authentication and post management.',
    tags: ['Node.js', 'Express', 'MongoDB'],
    image: '/project5.jpg',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Backend'
  },

  {
    id: 5,
    title: 'AI Image Generator',
    description: 'An application that generates images based on text prompts using AI.',
    tags: ['React', 'OpenAI', 'Node.js'],
    image: '/project6.jpg',
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Full Stack'
  },

  {
    id: 6,
    title: 'New Awesome Project',
    description: 'A project that does XYZ.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/project7.jpg',
    github: 'https://github.com/new-awesome-project',
    live: 'https://newawesomeproject.com',
    category: 'Full Stack'
  }
];


// 🆕 How to Add a New Project:
//
// {
//   id: 7,  // 🆔 Must be unique
//   title: 'Your Project Name',  // 📌 What your project is called
//   description: 'Short description of what the project does',
//   tags: ['React', 'Tailwind', 'API'],  // 🛠️ Technologies used
//   image: '/your-image.jpg',  // 🖼️ Save your image in public folder or use full URL
//   github: 'https://github.com/your-repo',  // 💻 GitHub source code link
//   live: 'https://your-live-site.com',  // 🌐 Live project URL
//   category: 'Frontend'  // 🔍 Must be one of: 'Frontend', 'Backend', 'Full Stack'
// }
