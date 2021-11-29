import Home from './pages/Home/Home.vue';
import Success from './pages/Success/Success.vue';
import Trip from './pages/Trip/Trip.vue';
import Inbox from './pages/Inbox/Inbox.vue';
import Checkout from './pages/Checkout/Checkout.vue';
import User from './pages/User/User.vue';
import Configuration from './pages/Configuration/Configuration.vue';
export const routes = [
    { path: '*', component: Home},
    { path: '/Success', component: Success},
    { path: '/Trip', component: Trip},
    { path: '/Inbox', component: Inbox},
    { path: '/Checkout', component: Checkout},
    { path: '/User', component: User},
    { path: '/Configuration', component: Configuration}
];