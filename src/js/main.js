import Vue from 'vue';
import Router from 'vue-router';
import Base from './components/Base';
import { routes } from './routes';
import Axios from 'axios';

/** Bootstrap **/
/* import 'bootstrap' */

Axios.defaults.baseURL = 'https://api.zberridge.com/wp-json/zb/v1/';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

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
    render: h => h(Base),
    router: router
});
