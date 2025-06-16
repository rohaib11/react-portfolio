import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiStar, FiGitBranch, FiCode } from 'react-icons/fi';
import { fetchGitHubStats } from '../../utils/github';

const GitHubStats = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStats = async () => {
      try {
        const data = await fetchGitHubStats('YOUR_GITHUB_USERNAME');
        setStats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (inView) getStats();
  }, [inView]);

  return (
    <section id="github" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-indigo-600">GitHub</span> Activity
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here's a snapshot of my open-source contributions and coding activity
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-12">
            Failed to load GitHub stats: {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FiGithub className="text-2xl text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Profile</h3>
              </div>
              <a
                href={`https://github.com/${stats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-lg text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-2 truncate"
              >
                github.com/{stats.username}
              </a>
              <p className="text-gray-500 dark:text-gray-500">
                Joined {new Date(stats.created_at).toLocaleDateString()}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FiCode className="text-2xl text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Activity</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Repositories:</span>
                  <span className="font-medium">{stats.public_repos}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Commits (last year):</span>
                  <span className="font-medium">{stats.total_commits}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Contributions:</span>
                  <span className="font-medium">{stats.total_contributions}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FiStar className="text-2xl text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Popular Repos</h3>
              </div>
              <div className="space-y-3">
                {stats.pinnedRepos.slice(0, 3).map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                        {repo.name}
                      </span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {repo.language}
                      </span>
                    </div>
                    <div className="flex text-xs text-gray-500 mt-1">
                      <span className="flex items-center mr-3">
                        <FiStar className="mr-1" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center">
                        <FiGitBranch className="mr-1" /> {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl text-indigo-600 mr-3">📊</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Visual Stats</h3>
              </div>
              <div className="space-y-4">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${stats.username}&show_icons=true&theme=transparent&hide_border=true&bg_color=00000000&text_color=64748b&title_color=6366f1&icon_color=6366f1`}
                  alt="GitHub Stats"
                  className="w-full dark:hidden"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${stats.username}&show_icons=true&theme=transparent&hide_border=true&bg_color=00000000&text_color=e2e8f0&title_color=818cf8&icon_color=818cf8`}
                  alt="GitHub Stats"
                  className="w-full hidden dark:block"
                />
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${stats.username}&theme=transparent&hide_border=true&background=00000000&stroke=00000000&ring=6366f1&fire=6366f1&currStreakLabel=6366f1&sideLabels=64748b&dates=64748b`}
                  alt="GitHub Streak"
                  className="w-full dark:hidden"
                />
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${stats.username}&theme=transparent&hide_border=true&background=00000000&stroke=00000000&ring=818cf8&fire=818cf8&currStreakLabel=818cf8&sideLabels=e2e8f0&dates=e2e8f0`}
                  alt="GitHub Streak"
                  className="w-full hidden dark:block"
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHubStats;