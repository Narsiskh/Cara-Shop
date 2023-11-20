// Define the Routing Rules
import {createRouter, createWebHistory} from "vue-router"
import Home from "@/views/Home.vue"
import Shop from "@/views/Shop.vue"
import Blog from "@/views/Blog.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Cart from "@/views/Cart.vue";
import SingleProduct from "@/views/SingleProduct.vue";



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/shop",
            name: "shop",
            component: Shop
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        },
        {
            path: "/cart",
            name: "cart",
            component: Cart
        },
        {
            path: "/products/:id",
            name: "products",
            component: SingleProduct
        }
    ]
})

export default router