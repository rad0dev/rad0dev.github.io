import getRepos from './service'
import { PortfolioSection } from '../common/PortfolioSection'
import styles from './style.scss'

export class MyRepositories extends PortfolioSection {
  constructor() {
    super(false, true)
    this.render()
  }

  async render() {
    const repos = (await getRepos())
    this.container.innerHTML = (`
    <div class="${styles.repos}">
        <ul class="${styles.reposList}">
          ${ repos
            .map(r => r.toListElements())
            .join('\n') }
        </ul>
      </div>
    `)
  }
}
