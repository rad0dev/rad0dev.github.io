import { component } from './component'
import initNavigation from './navigation'
import initAbout from './about'
import initFooter from './footer'
import initRepositories from './repositories'
import initHeader from './header'
import initContact from './contact'
import initCV from './cv'

export const App = {
  init() {
    initNavigation()
    initAbout()
    initFooter()
    initRepositories()
    initHeader()
    initContact()
    initCV()
    this.initComponents()
  },

  initComponents() {
    component.init()
  },
}
