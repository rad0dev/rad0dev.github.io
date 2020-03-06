import styles from './style.scss'

export class MyFooter extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    const footer = document.createElement('footer')
    footer.className = styles.footer;
    footer.innerText = '© 2020 Radosław Olejniczak'
    this.appendChild(footer)
  }
}
