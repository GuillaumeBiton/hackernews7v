// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// import Framework7 librairies
import 'framework7'
import Framework7Vue from 'framework7-vue'

// Enable Framework7 plugin in Vue.js
Vue.use(Framework7Vue)

// Importing main Component
import App from './App'
import StoryPage from './pages/story-page'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  framework7: {
    root: '#app',
    routes: [
      {
        path: '/story/',
        component: StoryPage
      }
    ]
  }
})
