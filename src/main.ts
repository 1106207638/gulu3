import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import xxx from './components/xxx.vue'
import zzz from './components/zzz.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        { 
            path: '/',
            component: xxx
        },
        {
            path: '/zzz',
            component: zzz
        },
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
