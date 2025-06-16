import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { techStack } from '../../data/techStack'; // Ensure techStack data is correctly defined
import { FiCode } from 'react-icons/fi';

const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  // Configure splide options
  const splideOptions = {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 6,
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 0.5,
    },
    breakpoints: {
      1024: { perPage: 5 },
      768: { perPage: 4 },
      640: { perPage: 3 },
      480: { perPage: 2 }
    }
  };

  return (
    <section id="tech-stack" ref={ref} className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies I've worked with and mastered over the years
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Splide 
            options={splideOptions}
            aria-label="My technology stack"
            className="mb-16"
          >
            {techStack.map((tech, index) => (
              <SplideSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="flex flex-col items-center p-4"
                >
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg mb-3">
                    <tech.icon className="text-4xl text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </motion.div>
              </SplideSlide>
            ))}
          </Splide>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-full mr-4">
              <FiCode className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Always Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I continuously explore new technologies and frameworks to stay at the forefront of web development. 
                Currently learning <span className="font-medium text-indigo-600 dark:text-indigo-400">Rust</span> and 
                diving deeper into <span className="font-medium text-indigo-600 dark:text-indigo-400">Web3</span> technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
