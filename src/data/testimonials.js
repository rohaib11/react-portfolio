// 📁 src/data/testimonials.js
// This file holds all client or peer testimonials that will appear in the Testimonials section.
// You can customize each testimonial's name, role, quote, company, and profile image.

// 🗣️ List of testimonials to display on the website
export const testimonials = [
  {
    id: 1, // 🔑 Unique ID for this testimonial
    name: 'Jane Smith', // 👩 Person's full name
    position: 'CEO', // 🧑‍💼 Their title or job role
    company: 'Tech Solutions Inc.', // 🏢 Company name
    quote: 'Working with John was an absolute pleasure. His attention to detail and problem-solving skills helped us deliver our project ahead of schedule.', // 💬 Their testimonial text
    image: '/testimonial1.jpg' // 🖼️ Path to image (store in /public or use external link)
  },
  {
    id: 2,
    name: 'Michael Johnson',
    position: 'Product Manager',
    company: 'Digital Innovations',
    quote: 'John\'s technical expertise and communication skills made him a valuable asset to our team. He consistently delivered high-quality work.',
    image: '/testimonial2.jpg'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    position: 'UX Designer',
    company: 'Creative Minds',
    quote: 'Collaborating with John on our design system implementation was seamless. He understands both design and development perspectives.',
    image: '/testimonial3.jpg'
  }

  // ➕ Add more testimonials below by copying and editing the object structure above.
];
