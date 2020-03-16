import { component } from './component'
import initNavigation from './navigation'
import initAbout from './about'
import initFooter from './footer'
import initRepositories from './repositories'
import initHeader from './header'
import initContact from './contact'
import initSkills from './skills'

export const App = {
  init() {
    initNavigation()
    initAbout()
    initFooter()
    initRepositories()
    initHeader()
    initContact()
    initSkills()
    this.initComponents()
  },

  initComponents() {
    component.init()
  },
}
