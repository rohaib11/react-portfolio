import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiYoutube,
  FiMail
} from 'react-icons/fi';
import { footer } from '../../data/customer';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconMap = {
    GitHub: <FiGithub />,
    LinkedIn: <FiLinkedin />,
    YouTube: <FiYoutube />,
    Email: <FiMail />
  };

  return (
    <footer className="transition-colors duration-300 pt-16 pb-8 bg-gray-900 dark:bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-indigo-600">Port</span>folio
            </h3>
            <p className="mb-6 max-w-md">
              A passionate frontend developer building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {footer.socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-3 bg-gray-800 text-gray-400 hover:text-white rounded-full hover:bg-indigo-600 transition-colors"
                >
                  {iconMap[link.platform]}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footer.footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:text-white transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-0"
            >
              &copy; {currentYear} {footer.copyrightName}. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-6"
            >
              {footer.footerLinks
                .find(section => section.title === 'Legal')
                ?.links.map((link, i) => (
                  <a key={i} href={link.url} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
