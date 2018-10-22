import Game from './components/Game'
import App from './components/App'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/game',
        name: 'game',
        component: Game
    },
    {
        path: '*',
        name: '404',
        component: {
            template: '<h1>Page Not Found</h1>'
        }
    }
];
