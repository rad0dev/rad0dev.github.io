import globalStyles from '../global.scss'

export class PortfolioSection extends HTMLElement {
  constructor(content, mainSection = false, sectionStyles) {
    super()
    if(mainSection) {
      this.classList.add(globalStyles.mainFlexItem)
    }
    if(sectionStyles) {
      this.classList.add(sectionStyles)
    }
    this.container = document.createElement('div')
    this.container.className = globalStyles.container
    this.container.innerHTML = content || ''
    this.appendChild(this.container)
  }
}
