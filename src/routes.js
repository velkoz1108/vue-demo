import Home from './components/Home.vue';
import About from './components/About.vue';
import User from './components/User.vue';
 
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/users/:id', component: User },
];
 
 
export default routes;