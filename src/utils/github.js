export const fetchGitHubStats = async (username) => {
  // Fetch basic user info
  const userRes = await fetch(`https://api.github.com/users/${username}`);
  if (!userRes.ok) throw new Error('Failed to fetch user data');
  const userData = await userRes.json();

  // Fetch repositories
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
  if (!reposRes.ok) throw new Error('Failed to fetch repositories');
  const reposData = await reposRes.json();

  // Fetch contribution data (using GitHub API v4 - GraphQL)
  const contributionsQuery = {
    query: `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
            }
            commitContributionsByRepository(maxRepositories: 100) {
              repository {
                name
              }
              contributions {
                totalCount
              }
            }
          }
        }
      }
    `
  };

  const contributionsRes = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
    },
    body: JSON.stringify(contributionsQuery)
  });

  if (!contributionsRes.ok) throw new Error('Failed to fetch contribution data');
  const contributionsData = await contributionsRes.json();

  // Process data
  const pinnedRepos = reposData
    .filter(repo => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);

  const totalCommits = contributionsData.data?.user?.contributionsCollection
    ?.commitContributionsByRepository
    ?.reduce((sum, repo) => sum + repo.contributions.totalCount, 0) || 0;

  return {
    username: userData.login,
    created_at: userData.created_at,
    public_repos: userData.public_repos,
    pinnedRepos,
    total_commits: totalCommits,
    total_contributions: contributionsData.data?.user?.contributionsCollection
      ?.contributionCalendar?.totalContributions || 0
  };
};