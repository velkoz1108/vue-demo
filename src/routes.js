import Home from './components/Home.vue';
import About from './components/About.vue';
import User from './components/User.vue';
import NotFound from './components/NotFound.vue';
import UserGeneric from './components/UserGeneric.vue';
import H5Demo1 from './components/H5Demo1.vue';
import Goods from './components/Goods.vue';
import ReminderHome from './components/ReminderHome.vue';
 
const routes = [
    { name:'',path: '/', component: ReminderHome },
    { name:'home',path: '/home', component: Home },
    { name:'about',path: '/about', component: About },
    { name:'users',path: '/users/:id',component: User },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { name:'user',path: '/user-:afterUser(.*)', component: UserGeneric },

    {name:'multiple',path:'/multiple',components:{
        default: About,
        view1: NotFound,
        view2: User
    }},

    {name:'h5',path:'/h5',component:H5Demo1},
    {name:'goods',path:'/goods',component:Goods},
];
 
 
export default routes;