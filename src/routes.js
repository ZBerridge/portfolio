import Game from './components/Game'
import App from './components/App'

export const routes = [
    {
        path: '',
        component: App
    },
    {
        path: '/game',
        component: Game
    },
    {
        path: '*',
        component: {
            template: '<h1>Page Not Found</h1>'
        }
    }
];
