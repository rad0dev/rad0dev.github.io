import { template } from './template'

export const component = {
  init() {
    this.appElement = document.querySelector('#app')
    this.render()
  },
  render() {
    this.appElement.innerHTML = template
  }
}
