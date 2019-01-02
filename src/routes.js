import App from './components/App'
import Contact from './components/Contact'
import About from './components/About'
import BlogOverview from './components/BlogOverview'
import BlogPost from './components/BlogPost'

export const routes = [
    {
        path: '',
        component: App
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/blog',
        component: BlogOverview
    },
    {
        path: '/blog/post',
        component: BlogPost
    },
    {
        path: '*',
        component: {
            template: '<section id="four-oh-four" class="d-flex justify-content-center align-items-center font-white"><h1>Page Not Found</h1></section>'
        }
    }
];
