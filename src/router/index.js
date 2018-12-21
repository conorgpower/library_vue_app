import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Books from '@/components/Books'
import ReturnBook from '@/components/ReturnBook'
import AboutUs from '@/components/AboutUs'
import Map from '@/components/Map'
import ContactUs from '@/components/ContactUs'
import EditBookName from '@/components/EditBookName'
import EditAuthor from '@/components/EditAuthor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/returnBook',
      name: 'ReturnBook',
      component: ReturnBook
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/contactUs',
      name: 'ContactUs',
      component: ContactUs
    },
    {
      path: '/editBookName',
      name: 'EditBookName',
      component: EditBookName,
      props: true
    },
    {
      path: '/editAuthor',
      name: 'EditAuthor',
      component: EditAuthor,
      props: true
    }
  ]
})
