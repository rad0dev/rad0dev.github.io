import { component } from './component'
import initNavigation from './navigation'

export const App = {
  init() {
    initNavigation()
    this.initComponents()
  },

  initComponents() {
    component.init()
  },
}
