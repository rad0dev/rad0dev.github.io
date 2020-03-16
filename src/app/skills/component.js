import { MainPortfolioSection } from '../common/PortfolioSection'
import styles from './style.scss'

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

export class MySkills extends MainPortfolioSection {
  constructor() {
    let content = ''
    for(let skillType in skills) {
      content += `
        <h2 class="${styles.header}">${skillType}</h2>
        <p class="${styles.skills}">${skills[skillType].join(', ')}</p>
      `
    }
    super('section', styles.mySkills, content)
  }
}
