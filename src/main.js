const Vue = require('vue')
const VueRouter = require('vue-router')
const axios = require('axios')
import Toast from '../src/components/Toast'
import GlyphList from '../src/components/GlyphList'
import AddGlyph from '../src/components/AddGlyph'

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
  name: 'app',
  data: {
    content: true
  },
  components: { Toast, GlyphList, AddGlyph },
  router
}).$mount('#app')
