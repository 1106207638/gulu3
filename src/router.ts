import { createWebHashHistory, createRouter } from 'vue-router'
import home from './views/home.vue'
import doc from './views/doc.vue'
import Switchdemo from './components/Switchdemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {
            path: '/',
            component: home
        },
        {
            path: '/doc',
            component: doc,
            children: [
                {
                    path: 'switch',
                    component: Switchdemo
                }
            ]
        },
    ]
})
