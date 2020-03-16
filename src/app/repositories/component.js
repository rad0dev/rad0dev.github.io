import getRepos from './service'
import { MainPortfolioSection } from '../common/PortfolioSection'
import styles from './style.scss'

export class MyRepostitories extends MainPortfolioSection {
  constructor() {
    super('section', styles.myRepos)
    this.render()
  }

  async render() {
    const repos = (await getRepos())
    this.section.innerHTML = (`
    <ul class="${styles.reposList}">
      ${ repos
        .map(r => r.toListElements())
        .join('\n') }
    </ul>
    `)
  }
}
