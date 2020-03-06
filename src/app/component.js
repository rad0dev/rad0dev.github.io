import { template } from './template'
import styles from '../style.scss'

export const component = {
  init() {
    this.appElement = document.querySelector('#app')
    this.render()
    console.log(styles)
  },
  render() {
    this.appElement.innerHTML = template
    this.appElement.classList.add(styles.portfolio)
  }
}
