import Vue from 'vue'
import Router from 'vue-router'
import App from './components/App'
import { routes } from './routes'

Vue.use(Router);

const router = new Router({
    routes: routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            };
        }

        if (savedPosition) {
            return savedPosition;
        }

        return {x: 0, y: 0};
    }
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
});
