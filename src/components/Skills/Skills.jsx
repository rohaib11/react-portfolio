import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, languages } from '../../data/skills';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here you will find the technologies and tools that I use to create projects and solve problems
          </p>
        </motion.div>

        {/* Skills and Languages Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  {/* Skill Name and Level */}
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  {/* Skill Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2.5 rounded-full bg-indigo-600"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Languages
            </h3>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <div key={index}>
                  {/* Language Name and Proficiency */}
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{language.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{language.level}</span>
                  </div>
                  {/* Language Proficiency Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${language.proficiency}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-2.5 rounded-full bg-indigo-600"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Technologies Section */}
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-12 mb-6">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                'VS Code', 'Git', 'Figma', 'Postman', 
                'Docker', 'Jira', 'Photoshop', 'Terminal'
              ].map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                >
                  {/* Tool Icon or Text */}
                  <span className="text-gray-700 dark:text-gray-300">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
