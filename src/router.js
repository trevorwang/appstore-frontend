import Vue from 'vue'
import VueRouter from 'vue-router';
import AppList from './AppList.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            component: AppList
        },
        {
            path: '/app',
            component: AppList
        }
    ]
});