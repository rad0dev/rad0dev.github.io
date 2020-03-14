import styles from './style.scss'

export class MyHeader extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    const title = this.innerHTML
    this.innerHTML = ''
    const header = document.createElement('header')
    header.classList.add(styles.header)
    header.innerHTML = `
        <h1>${title}</h1>
    `
    this.appendChild(header)
  }
}
