const Vue = require('vue')
const VueRouter = require('vue-router')
import App from './App'
import GlyphList from './components/GlyphList'
import AddGlyph from './components/AddGlyph'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: GlyphList},
    {path: '/add', component: AddGlyph}
  ]
})

Vue.directive('focus', {
  inserted: (el) => {
    el.focus()
  }
})

var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')
