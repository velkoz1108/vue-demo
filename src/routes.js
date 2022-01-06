import Home from './components/Home.vue';
import About from './components/About.vue';
import User from './components/User.vue';
import NotFound from './components/NotFound.vue';
import UserGeneric from './components/UserGeneric.vue';
 
const routes = [
    { name:'',path: '/', component: Home },
    { name:'home',path: '/home', component: Home },
    { name:'about',path: '/about', component: About },
    { name:'users',path: '/users/:id',component: User },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { name:'user',path: '/user-:afterUser(.*)', component: UserGeneric },
];
 
 
export default routes;