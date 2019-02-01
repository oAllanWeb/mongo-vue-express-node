import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login"
import Register from "../components/Register"
import DefaultContainer from "../containers/DefaultContainer";
import Forms from "../components/Forms"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      component: Login
    },
    {
      path: "/register",
      component: Register
    },
    {
      path: "/dashboard",
      component: DefaultContainer,
      children: [
        {
          path: "/forms",
          name: "Forms",
          component: Forms
        }
      ]
    }
  ]
});