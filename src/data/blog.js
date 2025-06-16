// 📁 src/data/blog.js
// This file contains the blog posts that will appear in the Blog section of your portfolio.
// Each blog post is an object with metadata and content. You can easily add, update, or remove posts here.

export const blogPosts = [
  {
    id: 1, // 🔑 Unique identifier for routing (used in blog page link)
    title: 'Getting Started with React Hooks', // 📝 Blog post title
    excerpt: 'Learn how to use React Hooks to simplify your functional components and manage state effectively.', // 📄 Short preview shown in blog card
    content: `React Hooks are a way to add stateful logic to functional components. In this post, we'll dive deep into hooks like useState, useEffect, and more...`, // ✍️ Full blog post content (can be rendered on a separate page)
    date: 'May 15, 2023', // 📅 Date of publication
    author: 'John Doe', // 👤 Author name
    readTime: 8, // ⏱ Estimated reading time in minutes
    tags: ['React', 'JavaScript', 'Frontend'], // 🏷️ Tags shown as rounded badges
    image: '/blog1.jpg' // 🖼️ Path to image (place in /public folder or use external URL)
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'Discover advanced techniques for using Tailwind CSS to build responsive and beautiful interfaces faster.',
    content: `Tailwind CSS allows you to style your application directly in your markup. In this post, we'll explore some advanced strategies for maximizing the potential of Tailwind.`,
    date: 'April 22, 2023',
    author: 'John Doe',
    readTime: 10,
    tags: ['CSS', 'Tailwind', 'Design'],
    image: '/blog2.jpg'
  },
  {
    id: 3,
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends and technologies that will shape the future of web development in 2023 and beyond.',
    content: `In this post, we'll look at emerging trends like AI in web development, serverless architecture, and modern tools that will change how developers work.`,
    date: 'March 5, 2023',
    author: 'John Doe',
    readTime: 12,
    tags: ['Web Development', 'Trends', 'Technology'],
    image: '/blog3.jpg'
  }
];
