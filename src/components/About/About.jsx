import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBriefcase, FiUsers } from 'react-icons/fi';

import {
  aboutIntro,
  aboutDetails,
  skillList,
  aboutStats
} from '../../data/about'; // ✅ import new data

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Map icons to stats (manually aligned)
  const icons = [<FiBriefcase />, <FiAward />, <FiUsers />];

  return (
    <section id="about" ref={ref} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {aboutIntro.title && (
              <>
                {aboutIntro.title.split(" ")[0]}{" "}
                <span className="text-indigo-600">{aboutIntro.title.split(" ")[1]}</span>
              </>
            )}
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {aboutIntro.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Personal Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              {aboutDetails.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors font-medium"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Right: Skills + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-4 mb-12">
              {skillList.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aboutStats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                >
                  <div className="text-3xl text-indigo-600 mb-2 flex justify-center">
                    {icons[index] || <FiAward />}
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
