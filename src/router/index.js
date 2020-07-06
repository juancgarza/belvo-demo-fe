import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DashboardLayout from '../views/DashboardLayout.vue'
import DashboardHome from '../views/dashboard/DashboardHome'
import DashboardAccounts from'../views/dashboard/DashboardAccounts'
import DashboardTransactions from '../views/dashboard/DashboardTransactions'
import DashboardOwners from '../views/dashboard/DashboardOwners'
import DashboardBalances from '../views/dashboard/DashboardBalances'
import Logout from '../components/Logout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardLayout,
    redirect:'/dashboard/home',
    children: [
      {
        path: 'home',
        name: 'DashboardHome',
        component: DashboardHome
      },
      {
        path: 'accounts',
        name: 'DashboardAccounts',
        component: DashboardAccounts
      },
      {
        path: 'transactions',
        name: 'DashboardTransactions',
        component: DashboardTransactions
      },
      {
        path: 'owners',
        name: 'DashboardOwners',
        component: DashboardOwners
      },
      {
        path: 'balance',
        name: 'DashboardBalance',
        component: DashboardBalances
      }
    ]
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  routes
})

export default router
