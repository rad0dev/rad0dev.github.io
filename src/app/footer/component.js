import { PortfolioSection } from "../common/PortfolioSection";
import styles from './style.scss'

export class MyFooter extends PortfolioSection {
  constructor() {
    super('footer', styles.footer, '© 2020 Radosław Olejniczak')
  }
}
