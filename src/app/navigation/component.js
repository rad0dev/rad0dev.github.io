import { PortfolioSection } from '../common/PortfolioSection'
import styles from './style.scss'

export class MyNavigation extends PortfolioSection {
  constructor() {
    super('header', styles.header, `
        <div class="${styles.logo}">
            <a href="/">rad0dev</a>
        </div>
        <nav class="${styles.menu}">
            <ul>
                <li><a href="/skills/">Skills</a></li>
                <li><a href="/repositories/">Repositories</a></li>
                <li><a href="/contact/">Contact</a></li>
            </ul>
        </nav>
    `)
  }
}
