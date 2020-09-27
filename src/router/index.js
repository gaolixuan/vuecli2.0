import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')

Vue.use(Router)



const routes = [{
    //路由的默认路径
    path: '',
    redirect: './home'
  },
  {

    path: '/home',
    component: Home,
    children: [
      {
        path:'',
        redirect:'news'
      }
      ,
      {
        path: 'news',
        component: HomeNews,
        meta:{
          title:'新闻'
    
      }
      },
      {
        path: 'message',
        component: HomeMessage,
        meta:{
          title:'消息'
    
      }
      }
    ]
  },
  {
    path: '/about',
    component: About,
  meta:{
    title:'关于'
  },
  beforeEnter: (to, from, next) => {
    console.log("about beforeEnter"),
    next()
  }
  },
  {
    path: '/user/:userId',
    component: User,
    meta:{
      title:'用户'

  }
},
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案'

  }
  }

]
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'

})
//前置守卫
router.beforeEach( (to,from,next)=>{
  document.title = to.meta.title
  next()
  console.log("------")
})
//后置守卫
router.afterEach((to,from)=>{
console.log("=========")
})

export default router
