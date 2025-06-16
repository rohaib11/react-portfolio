import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../data/experience'; // **CHANGE**: Update with the path to your `experience.js` file
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section id="experience" ref={ref} className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-indigo-600">Experience</span> {/* **CHANGE**: Update title if necessary */}
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and key milestones {/* **CHANGE**: Update the description */}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900 transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-16">
            {/* Iterate through each experience */}
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 h-5 w-5 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-4 z-10"></div>

                {/* Content card */}
                <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-2">
                      <FiBriefcase className="text-indigo-600 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.position} {/* **CHANGE**: Replace with your job position */}
                      </h3>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <FiCalendar className="mr-2" />
                      <span>{item.duration} {/* **CHANGE**: Update with your role's duration */}</span>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      {item.company} • {item.location} {/* **CHANGE**: Replace with your company and location */}
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                      {/* List responsibilities */}
                      {item.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          <span>{responsibility}</span> {/* **CHANGE**: Update with your responsibilities */}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {/* List technologies used */}
                      {item.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs"
                        >
                          {tech} {/* **CHANGE**: Update with the technologies you used */}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
