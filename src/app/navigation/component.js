import styles from './style.scss'

export class MyNavigation extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    const header = document.createElement('header')
    header.innerHTML = `
        <div class="${styles.logo}">
            <a href="/">rad0dev</a>
        </div>
        <nav class="${styles.menu}">
            <ul>
                <li><a href="#">My repositories</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    `
    this.appendChild(header)
  }
}
