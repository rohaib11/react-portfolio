import { motion } from 'framer-motion'; 
import { useInView } from 'react-intersection-observer';
import { testimonials } from '../../data/testimonials'; // Importing testimonial data
import { FiMessageCircle } from 'react-icons/fi'; // Icon used for testimonial quotes

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // List of trusted companies to display
  const trustedCompanies = [
    'Tech Solutions',   // Example company 1
    'Innovative Software',  // Example company 2
    'Creative Minds',  // Example company 3
    'Digital Corp',   // Example company 4
    'Startup Inc',    // Example company 5
    'Global Enterprises' // Example company 6
  ];

  return (
    <section id="testimonials" ref={ref} className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client <span className="text-indigo-600">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some testimonials from my clients and colleagues about my work and professionalism
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <div className="text-indigo-600 text-3xl mb-4">
                <FiMessageCircle /> {/* Updated icon */}
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">
                "{testimonial.quote}" {/* Dynamic quote from the testimonial */}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}  // Dynamic image from testimonial object
                  alt={testimonial.name}  // Dynamic alt from testimonial object
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}  {/* Dynamic name from testimonial object */}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.position} at {testimonial.company} {/* Dynamic position and company */}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Trusted by companies worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {trustedCompanies.map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 dark:text-gray-300 text-xl font-bold"
              >
                {company} {/* Display the company names dynamically */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
