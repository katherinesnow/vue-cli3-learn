import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash', // 可选值: "hash" | "history" | "abstract"
  //   hash: 使用 URL hash 值来作路由。支持所有浏览器，包括不支持 HTML5 History Api 的浏览器。
  // history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式。
  // abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式
  base: process.env.BASE_URL, // 应用的基路径,例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"
  linkActiveClass: 'router-link-active', // 全局配置 <router-link> 的默认“激活 class 类名”,默认值: "router-link-active"
  linkExactActiveClass: 'router-link-exact-active', // 全局配置 <router-link> 精确激活的默认的 class, 参考router-link
  scrollBehavior(to, from, savedPosition) {
    // 使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。
    // 注意：这个功能只在支持history.pushState的浏览器中可用
    // return 期望滚动到哪个的位置
    console.log(to, from, savedPosition, '=====savedPosition?????')
    // 对于所有导航，简单地让页面滚动到顶部
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  // Boolean, 当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true
  // 在 IE9 中，设置为 false 会使得每个 router-link 导航都触发整页刷新。
  // 它可用于工作在 IE9 下的服务端渲染应用，因为一个 hash 模式的 URL 并不支持服务端渲染。
  fallback: true,
  routes: [
    {
      path: '/',
      name: 'home',
      /* 路由重定向学习 */
      // redirect: '/about', // A. 重定向到的地址
      // redirect: {
      //   // B. 重定向目标是一个'命名路由'
      //   name: 'about',
      // },
      // redirect: (to) => {
      //   // to 指的是 原来输入的路由地址
      //   // 经过处理后返回不同的字符串路径或者路径对象
      //   console.log(to, 'redirect to')
      //   return {
      //     path: '/about',
      //   }
      //   // C. 动态返回重定向目标
      //   // 方法接收 目标路由 作为参数
      //   // return 重定向的 字符串路径/路径对象
      // },

      /* 别名设置 */
      //  “别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构
      // alias: '/me',
      component: Home,
      beforeEnter: (to, from, next) => {
        console.log(to, from, next)
        next()
        // 这种类型的守卫余全局前置守卫的方法参数是一样的.
      },
    },
    {
      path: '/about',
      name: 'about',
      meta: { requiresAuth: true },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});

// @see https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#导航守卫
// '导航'表示路由正在发生变化
// 有多种机会植入到路由导航过程中：全局的，单个路由独享的，或者组件级的.
// A. 全局守卫：router.beforeEach
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来resolve 这个钩子，执行效果依赖next 方法的调用参数.
  console.log(to.matched)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    // if(false) {

    // test
    // next({
    //   path: '/',
    //   query: {
    //     redirect: to.fullPath, // 页面参数设置(登录完成后取得回调的地址)
    //   },
    // })

    // }
  }
  console.log('to：', to)
  console.log('from：', from)
  console.log('next：', next)
  console.log('router.beforeEach====')
  next()
});

// B. 全局后置钩子
router.afterEach((to, from) => {
  // 实际开发过程中, 基本不怎么使用
  console.log(to, from)
})

// C. 路由独享的守卫，你可以在路由配置上直接定义beforeEnter 守卫
// D. 组件内的守卫，你可以在路由组件内直接定义一下路由导航守卫

export default router;
