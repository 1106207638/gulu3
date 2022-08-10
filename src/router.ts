import { createWebHashHistory, createRouter } from 'vue-router'
import home from './views/home.vue'
import doc from './views/doc.vue'
import Switchdemo from './components/Switchdemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import DocDemo from './components/DocDemo.vue'
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
                    path: '',
                    component: DocDemo
                },
                {
                    path: 'switch',
                    component: Switchdemo
                }, {
                    path: 'button',
                    component: ButtonDemo
                }, {
                    path: 'dialog',
                    component: DialogDemo
                }, {
                    path: 'tabs',
                    component: TabsDemo
                },
            ]
        },
    ]
})
