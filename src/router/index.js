import Vue from 'vue'
import VueRouter from 'vue-router'
import PetList from "../views/PetList";
import PetShow from "../views/PetShow";
import Cart from "../views/Cart";
import PetEdit from "../views/PetEdit";
import PetCreate from "../views/PetCreate";
import PetAddPrescription from "../views/PetAddPrescription";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'PetList',
        component: PetList
    },
    {
        path: '/pet/:id',
        name: 'PetShow',
        component: PetShow
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/edit/:id',
        name: 'PetEdit',
        component: PetEdit
    },
    {
        path: '/new',
        name: 'PetCreate',
        component: PetCreate
    },
    {
        path: '/new',
        name: 'PetAddPrescription',
        component: PetAddPrescription
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
