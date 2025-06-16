// src/data/customer.js

// 🖼️ Import your profile image (displayed in the Hero section)
import profileImage from '../assets/profile.png'; // 👉 Replace with actual image path or use a hosted image URL if preferred

// 👤 HERO SECTION: Update this object to control your name, title animations, and resume
export const customer = {
  // 👋 Your full name (displayed in headline of Hero)
  name: "Your Name",

  // 🧑‍💻 Titles shown with typing animation
  titles: [
    "Frontend Developer",
    "UI/UX Designer",
    "React Specialist",
    "Full Stack Engineer"
  ],

  // ✍️ Short description under your name and titles
  tagline:
    "I build exceptional digital experiences with modern technologies. Focused on creating clean, efficient, and user-friendly applications.",

  // 📄 Link to your resume (can be a PDF URL or Google Drive share link)
  resumeLink: "https://your-resume-link.com", // 👉 Replace this with your resume URL

  // 🖼️ Profile image displayed in a circular frame
  profileImage: profileImage, // 👉 Replace with new import or URL if needed

  // 🌐 Social media profiles for Hero + Footer icons
  socialLinks: {
    github: "https://github.com/yourusername",     // 👉 Your GitHub username
    linkedin: "https://linkedin.com/in/yourprofile", // 👉 Your LinkedIn profile URL
    youtube: "https://youtube.com/yourchannel",     // 👉 Optional YouTube channel link
    instagram: "https://instagram.com/yourhandle"   // 👉 Optional Instagram profile link
  }
};



// 📦 FOOTER SECTION: Update footer links and social icons here
export const footer = {
  // 🌐 Social media links shown as icons in the footer
  socialLinks: [
    { platform: "GitHub", url: "https://github.com/yourusername" },     // 👉 Update with your GitHub
    { platform: "LinkedIn", url: "https://linkedin.com/in/yourprofile" }, // 👉 Your LinkedIn
    { platform: "YouTube", url: "https://youtube.com/yourchannel" },     // 👉 YouTube or remove if not needed
    { platform: "Email", url: "mailto:you@example.com" }                // 👉 Your email
  ],

  // 📚 Footer column sections
  footerLinks: [
    {
      title: 'Quick Links', // 📌 Typically internal site sections
      links: [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Projects', url: '#projects' },
        { name: 'Contact', url: '#contact' }
      ]
    },
    {
      title: 'Resources', // 📄 External resources or pages
      links: [
        { name: 'Blog', url: '#blog' },
        { name: 'Resume', url: '/resume.pdf' }, // 👉 Local PDF or hosted file
        { name: 'GitHub', url: 'https://github.com' },
        { name: 'Uses', url: '/uses' }
      ]
    },
    {
      title: 'Legal', // ⚖️ Optional legal pages
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' }
      ]
    }
  ],

  // 🔖 Text displayed as © [Your Brand] in the footer
  copyrightName: "Your Brand"
};
