import { component } from './component'
import initNavigation from './navigation'
import initAbout from './about'

export const App = {
  init() {
    initNavigation()
    initAbout()
    this.initComponents()
  },

  initComponents() {
    component.init()
  },
}
