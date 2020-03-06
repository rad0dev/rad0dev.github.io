import styles from './style.css'
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub)
const iconGithub = icon({
  prefix: 'fab',
  iconName: 'github'
})

export class MyAbout extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    const header = document.createElement('div')
    header.className = styles.aboutMe
    console.log(iconGithub)
    header.innerHTML = `
        <div class="${styles.avatar}"><img src="../../img/radoslaw-olejniczak.jpeg" alt="Radoslaw Olejniczak"></div>
        <div class="${styles.info}">
            <h1>Radosław Olejniczak</h1>
            <h2>Frontend Developer</h2>
            <ul>
                <li><a href="#">${iconGithub.html}</a></li>
            </ul>
        </div>
    `
    this.appendChild(header)
  }
}
