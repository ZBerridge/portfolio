import Game from './components/Game'
import App from './components/App'
import Contact from './components/Contact'

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
        path: '/contact',
        component: Contact
    },
    {
        path: '*',
        component: {
            template: '<section id="four-oh-four" class="d-flex justify-content-center align-items-center font-white"><h1>Page Not Found</h1></section>'
        }
    }
];
