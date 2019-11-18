import Vue from "vue";
import Router from "vue-router";
import HelloContainer from "./components/HelloWorld.vue";

//功能:引入组件Login.vue
//1:将login.vue引入当前router.js
//import Home from "./components/shuiguo/Home.vue";

import Login from "./components/shuiguo/Login.vue";
import Me from "./components/shuiguo/Me.vue";
import Me1 from "./components/shuiguo/Me1.vue";
import Reg from "./components/shuiguo/Reg.vue";

import Gwc from "./components/shuiguo/Gwc.vue";
import address from "./components/shuiguo/address.vue";
import setaddress from "./components/shuiguo/setaddress.vue";
import Home from "./components/shuiguo/Home.vue";
import sgsy from "./components/shuiguo/sgsy.vue";
import Product from "./components/shuiguo/Product.vue";

import Pay from "./components/shuiguo/Pay.vue";
import Topup from "./components/shuiguo/Topup.vue";
import Hostsell from "./components/shuiguo/Hostsell.vue";
import Coupon from "./components/shuiguo/Coupon.vue";
import Vag from "./components/shuiguo/Vag.vue";
import NoO from "./components/shuiguo/NoO.vue";

import Fl from "./components/shuiguo/Fl.vue";
import Nr from "./components/shuiguo/Nr.vue";

Vue.use(Router);
export default new Router({
  routes: [
    { path: "/sgsy", component: sgsy },
    { path: "/Fl", component: Fl },
    { path: "Nr", component: Nr, props: true },
    { path: "/Home", component: Home },
    { path: "/Product/:lid", component: Product, props: true },

    { path: "/", component: Home },
    { path: "/Pay", component: Pay },
    { path: "/Topup", component: Topup },
    { path: "/Hostsell", component: Hostsell },
    { path: "/Coupon", component: Coupon },
    { path: "/Vag", component: Vag },
    { path: "/NoO", component: NoO },

    { path: "/Gwc", component: Gwc },
    { path: "/Reg", component: Reg },
    { path: "/Login", component: Login },
    { path: "/Me1", component: Me1 },
    { path: "/Me", component: Me },
    { path: "/", component: HelloContainer },
    { path: "/address", component: address },
    { path: "/setaddress/:id", component: setaddress, props: true }
  ]
});
