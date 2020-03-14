import getRepos from "./service";
import styles from './style.scss'
import globalStyles from '../global.scss'

export class MyRepostitories extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    const repos = (await getRepos());
    this.classList.add(styles.myRepositories)
    this.innerHTML = (`
      <div class="${globalStyles.container}">
        <ul class="${styles.reposList}">
            ${  repos
                  .map(r => r.toListElements())
                  .join('\n')}
        </ul>
      </div>
    `);
  }
}
