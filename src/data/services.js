// 📁 src/data/services.js
// This file contains the list of services displayed in the "Services" section of the portfolio site.
// Each service object includes an icon, title, description, and key features.

// Step 1: Import icons from react-icons
import { 
  FiCode, 
  FiLayout, 
  FiSmartphone, 
  FiDatabase 
} from 'react-icons/fi'; // 👈 You can import other icons here too

// Step 2: Define the services list
export const services = [
  {
    icon: <FiCode className="text-3xl text-indigo-600" />, // 👨‍💻 Service icon
    title: "Web Development", // 🖥️ Service title
    description: "Custom websites with React, Next.js, and modern frameworks", // 📝 Brief description
    features: [ // ✅ Bullet point features
      "Responsive Design",
      "SEO Optimized",
      "CMS Integration"
    ]
  },
  {
    icon: <FiLayout className="text-3xl text-indigo-600" />,
    title: "UI/UX Design",
    description: "Beautiful interfaces focused on user experience",
    features: [
      "Wireframing",
      "Prototyping",
      "User Testing"
    ]
  },
  {
    icon: <FiSmartphone className="text-3xl text-indigo-600" />,
    title: "Mobile Apps",
    description: "Cross-platform apps with React Native",
    features: [
      "iOS & Android",
      "Offline Support",
      "App Store Deployment"
    ]
  },
  {
    icon: <FiDatabase className="text-3xl text-indigo-600" />,
    title: "Backend Services",
    description: "Robust API and database solutions",
    features: [
      "Node.js",
      "MongoDB",
      "Cloud Deployment"
    ]
  }
];
