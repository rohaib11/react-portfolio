import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiDownload,
  FiYoutube,
  FiInstagram
} from 'react-icons/fi';
import { ReactTyped } from 'react-typed';
import { customer } from '../../data/customer'; // ✅ Import your dynamic data

const Hero = () => {
  const {
    name,
    titles,
    tagline,
    resumeLink,
    profileImage,
    socialLinks
  } = customer;

  const socials = [
    { icon: <FiGithub />, url: socialLinks.github },
    { icon: <FiLinkedin />, url: socialLinks.linkedin },
    { icon: <FiYoutube />, url: socialLinks.youtube },
    { icon: <FiInstagram />, url: socialLinks.instagram }
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-indigo-600">{name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              <ReactTyped
                strings={titles}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              {tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
              >
                Get In Touch
              </a>
              <a
                href={resumeLink}
                download
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium flex items-center"
              >
                <FiDownload className="mr-2" />
                Download CV
              </a>
            </div>

            <div className="flex mt-8 space-x-4">
              {socials.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 border-4 border-indigo-500 rounded-full animate-spin-slow"></div>
              <img
                src={profileImage}
                alt={`${name}'s Profile`}
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
