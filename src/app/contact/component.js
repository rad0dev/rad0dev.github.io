import styles from './style.scss'

const address = [
  'm',
  '@',
  'kedar',
  'kazcinjelo',
  '.',
  'lp'
]

export class MyContact extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    this.classList.add(styles.myContact)
    const section = document.createElement('section')
    section.classList.add(styles.section)
    const cta = this.prepareCTA()
    section.appendChild(cta)
    this.appendChild(section)
  }

  prepareCTA() {
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
    });
    return cta
  }
}
