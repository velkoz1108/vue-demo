import Home from './components/Home.vue';
import About from './components/About.vue';
import User from './components/User.vue';
import NotFound from './components/NotFound.vue';
import UserGeneric from './components/UserGeneric.vue';
 
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/users/:id', name:'User',component: User },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/user-:afterUser(.*)', component: UserGeneric },
];
 
 
export default routes;