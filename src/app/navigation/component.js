import styles from './style.scss'
import globalStyles from '../global.scss'

export class MyNavigation extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    const container = document.createElement('div')
    container.classList.add(globalStyles.container)
    const header = document.createElement('header')
    header.classList.add(styles.header)
    header.innerHTML = `
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
    `
    container.appendChild(header)
    this.appendChild(container)
  }
}
