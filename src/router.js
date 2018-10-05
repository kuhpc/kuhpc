import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/About.vue")
    },
    {
      path: "/funding",
      name: "funding",
      component: () =>
        import(/* webpackChunkName: "funding" */ "@/views/Funding.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "funding" */ "@/views/Contact.vue")
    },
    {
      path: "/software",
      name: "software",
      component: () =>
        import(/* webpackChunkName: "funding" */ "@/views/Software.vue")
    }
  ]
});
