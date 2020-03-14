import { component } from './component'
import initNavigation from './navigation'
import initAbout from './about'
import initFooter from './footer'
import initRepositories from './repositories'
import initHeader from './header'

export const App = {
  init() {
    initNavigation()
    initAbout()
    initFooter()
    initRepositories()
    initHeader()
    this.initComponents()
  },

  initComponents() {
    component.init()
  },
}
