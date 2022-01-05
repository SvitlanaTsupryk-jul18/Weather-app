import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Error from "../views/Error.vue";
import NetworkIssue from "../views/NetworkIssue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // {
  //   path: '/event/:id',
  //   name: 'event-show',
  //   component: EventShow,
  //   props: true,
  //   beforeEnter(routeTo, routeFrom, next) {
  //     store
  //         .dispatch('event/fetchEvent', routeTo.params.id)
  //         .then(event => {
  //           routeTo.params.event = event
  //           next()
  //         })
  //         .catch(error => {
  //           if (error.response && error.response.status == 404) {
  //             next({
  //               name: '404',
  //               params: { resource: 'event' }
  //             })
  //           } else {
  //             next({ name: 'network-issue' })
  //           }
  //         })
  //   },
  // },
  {
    path: '/404',
    name: '404',
    component: Error,
  },
  { // Here's the new catch all route
    path: '*',
    redirect: { name: '404' }
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: NetworkIssue
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// import store from '@/store/store' // <--- Include our store
//
// const router = new Router({
//   mode: 'history',
//   routes: [
//     ...
//         {
//           path: '/event/:id',
//           name: 'event-show',
//           component: EventShow,
//           props: true,
//           beforeEnter(routeTo, routeFrom, next) { // before this route is loaded
//             store.dispatch('event/fetchEvent', routeTo.params.id).then(() => {
//               next()
//             })
//           }
//         }
//   ] ...

export default router;
