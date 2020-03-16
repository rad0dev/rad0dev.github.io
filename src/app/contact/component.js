import { MainPortfolioSection } from "../common/PortfolioSection";
import styles from './style.scss'

const address = [
  'm',
  '@',
  'kedar',
  'kazcinjelo',
  '.',
  'lp'
]

export class MyContact extends MainPortfolioSection {
  constructor() {
    super('section', styles.myContact)
    this.section.appendChild(this.contactCTA)
  }

  get contactCTA() {
    const cta = document.createElement('strong')
    cta.classList.add(styles.cta)
    cta.innerText = 'Send me email'
    cta.addEventListener('click', () => {
      const a = document.createElement('a')
      const preparedAddress =
        address
          .map((part) => { return part.split('').reverse().join('') })
          .join('')
      a.innerText = preparedAddress
      a.href = `mailto:${preparedAddress}`

      const newCta = cta.cloneNode(true)
      newCta.classList.add(styles.clicked)
      newCta.appendChild(document.createElement('br'))
      newCta.appendChild(a)
      cta.parentNode.replaceChild(newCta, cta)
    })
    return cta
  }
}
