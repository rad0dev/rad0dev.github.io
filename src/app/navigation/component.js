import styles from './style.scss'

export class MyNavigation extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    const header = document.createElement('header')
    header.classList.add(styles.header)
    header.innerHTML = `
        <div class="${styles.logo}">
            <a href="/">rad0dev</a>
        </div>
        <nav class="${styles.menu}">
            <ul>
                <li><a href="/cv/">CV</a></li>
                <li><a href="/my-repositories/">My repositories</a></li>
                <li><a href="/contact/">Contact</a></li>
            </ul>
        </nav>
    `
    this.appendChild(header)
  }
}
