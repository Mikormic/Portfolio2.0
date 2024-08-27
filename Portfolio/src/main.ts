/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import WindowsFile from './components/WindowsFile.vue'
import P4 from './components/P4.vue'
import Twitter from './components/Twitter.vue'
import MyTcg from './components/MyTcg.vue'
import NewsFeed from './components/NewsFeed.vue'
import About from './components/About.vue'
import CV from './components/CV.vue'

const routes = [
  { path: '/', component: WindowsFile },
  { path: '/puissance4', component: P4 },
  { path: '/twitter', component: Twitter },
  { path: '/my-tcg', component: MyTcg},
  { path: '/newsfeed', component: NewsFeed},
  { path: '/about', component: About},
  { path: '/cv', component: CV},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App)
app.use(router)

registerPlugins(app)

app.mount('#app')
