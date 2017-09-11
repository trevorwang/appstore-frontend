import Vue from 'vue'
import VueRouter from 'vue-router';
import AppList from './AppList.vue'
import AppDetail from './AppDetail.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            component: AppList
        },
        {
            path: '/app/:id',
            component: AppDetail,
            props: true
        }
    ]
});