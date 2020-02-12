export class MyNavigation extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  async render() {
    this.attachShadow({mode: 'open'})
    this.shadowRoot.innerHTML = `<h1>Navigation</h1>`
  }
}
