import { GitHubRepo } from './GitHubRepo';

const REPOS_URL = 'https://api.github.com/users/rad0dev/repos';
const FORBIDDEN_REPOS = [];

const convert = ({
  name,
  stargazers_count: stars,
  license,
  html_url: url,
  description,
  homepage
  }) => new GitHubRepo({
    name,
    stars,
    license: license ? license.spdx_id : '',
    url,
    description,
    descriptionUrl: homepage
  })

export default async function getRepos() {
  try {
    const response = await fetch(REPOS_URL)
    if (response.ok) {
      return (await response.json())
        .filter(r => !FORBIDDEN_REPOS.includes(r.name))
        .map(convert);
    }
    throw Error('Response not 200');
  } catch (err) {
    console.warn(err);
    return [];
  }
}
