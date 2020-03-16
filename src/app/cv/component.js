import styles from './style.scss'
import globalStyles from '../global.scss'

const skills = {
  'Front-end skills': [
    'Vue, Vuex, Nuxt, Vue cli',
    'SPA',
    'PWA',
    'Javascript ES6+',
    'Webpack',
    'Angular.js',
    'three.js',
    'jQuery',
    'HTML, CSS/Sass'
  ],
  'Back-end skills': [
    'PHP basics'
  ],
  'Other skills': [
    'Jira, Trello',
    'GIT',
    'Docker',
    'Scrum',
    'Slack',
    'Adobe Photoshop/Adobe XD/Sketch/Figma/InVision',
  ]
}

export class MyCV extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    this.classList.add(globalStyles.mainFlexItem)
    const section = document.createElement('section')
    this.appendChild(this.skillSection)
  }

  get skillSection() {
    const container = document.createElement('div')
    container.classList.add(globalStyles.container)
    for(let skillType in skills) {
      const header = document.createElement('h2')
      const p = document.createElement('p')
      header.classList.add(styles.header)
      p.classList.add(styles.skills)
      header.innerText = skillType
      p.innerHTML += skills[skillType].join(', ')
      container.appendChild(header)
      container.appendChild(p)
    }
    return container
  }
}
