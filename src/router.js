import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tickets",
      name: "tickets",
      component: () => import("./components/ListTickets.vue")
    },
    {
      path: "/tickets/:id",
      name: "tickets-details",
      component: () => import("./components/ShowTicketsInfo.vue")
    },
    {
      path: "/tickets/results",
      name: "tickets-results",
      component: () => import("./components/ResultsTickets.vue")
    }
  ]
});