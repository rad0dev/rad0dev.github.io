import { component } from './component'
import initNavigation from './navigation'
import initAbout from './about'
import initFooter from './footer'

export const App = {
  init() {
    initNavigation()
    initAbout()
    initFooter()
    this.initComponents()
  },

  initComponents() {
    component.init()
  },
}
