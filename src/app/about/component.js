import { PortfolioSection } from "../common/PortfolioSection";
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import styles from './style.scss'

library.add(faGithub)
library.add(faLinkedin)

const iconGithub = icon({
  prefix: 'fab',
  iconName: 'github'
})

const iconLinkedIn = icon({
  prefix: 'fab',
  iconName: 'linkedin'
})

export class MyAbout extends PortfolioSection {
  constructor() {
    super(`
        <div class="${styles.aboutme}">
            <div class="${styles.avatar}"><img src="../../img/radoslaw-olejniczak.jpeg" alt="Radoslaw Olejniczak"></div>
            <div class="${styles.info}">
                <h1>Radosław Olejniczak</h1>
                <h2>Frontend Developer</h2>
                <ul>
                    <li><a href="https://github.com/rad0dev">${iconGithub.html}</a></li>
                    <li><a href="https://www.linkedin.com/in/radosław-olejniczak-b651537b">${iconLinkedIn.html}</a></li>
                </ul>
            </div>
        </div>
    `)
  }
}
