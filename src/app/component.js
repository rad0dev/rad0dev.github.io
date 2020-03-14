import styles from '../style.scss'

export const component = {
  init() {
    this.appElement = document.querySelector('#app')
    this.appElement.classList.add(styles.portfolio)
  }
}
