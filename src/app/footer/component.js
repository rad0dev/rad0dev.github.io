import { PortfolioSection } from "../common/PortfolioSection";
import styles from './style.scss'

export class MyFooter extends PortfolioSection {
  constructor() {
    super(`
        <footer class="${styles.footer}">© 2020 Radosław Olejniczak</footer>
    `)
  }
}
