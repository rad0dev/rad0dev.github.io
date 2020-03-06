import styles from './style.css'

export class MyFooter extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    const footer = document.createElement('div')
    footer.className = styles.footer;
    footer.innerText = '© 2020 Radosław Olejniczak'
    this.appendChild(footer)
  }
}
