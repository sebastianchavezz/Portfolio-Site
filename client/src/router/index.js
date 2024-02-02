import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";   
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";
import Blog from "@/views/Blog.vue";

const router= createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: 'Home',
            component: Home
        },
        {
            path: "/projects",
            name: 'Projects',
            component: Projects
        },
        {
            path: "/contact",
            name: 'Contact',
            component: Contact
            
        },
        {
            path : "/blog",
            name : "Blog",
            component : Blog
        }
    ]
});

export default router;
