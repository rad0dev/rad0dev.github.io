import { PortfolioSection } from "../common/PortfolioSection";
import styles from './style.scss'

export class MyHeader extends PortfolioSection {
  constructor() {
    super(false, false, styles.myHeader)
    this.render()
  }

  async render() {
    const title = this.getAttribute('text');
    const header = document.createElement('h1')
    header.innerText = title
    this.container.appendChild(header)
  }
}
