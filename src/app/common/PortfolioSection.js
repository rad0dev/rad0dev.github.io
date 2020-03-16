import globalStyles from '../global.scss'

export class PortfolioSection extends HTMLElement {
  constructor(tag, tagStyle, content) {
    super()
    const container = document.createElement('div')
    container.className = globalStyles.container
    this.section = document.createElement(tag)
    this.section.className = tagStyle
    this.section.innerHTML = content || ''
    container.appendChild(this.section)
    this.appendChild(container)
  }
}

export class MainPortfolioSection extends PortfolioSection {
  constructor(tag, tagStyle, content) {
    super(tag, tagStyle, content)
    this.classList.add(globalStyles.mainFlexItem)
  }
}
