import Home from './pages/Home/Home.vue';
import Success from './pages/Success/Success.vue';
import Trip from './pages/Trip/Trip.vue';
import Inbox from './pages/Inbox/Inbox.vue';
import Checkout from './pages/Checkout/Checkout.vue';
export const routes = [
    { path: '/', component: Home},
    { path: '/Success', component: Success},
    { path: '/Trip', component: Trip},
    { path: '/Inbox', component: Inbox},
    { path: '/Checkout', component: Checkout},
];