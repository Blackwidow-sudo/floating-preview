import VueRouter from 'vue-router'
import routes from './modules'

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
export { routes }
