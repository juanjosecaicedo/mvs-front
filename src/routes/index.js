import Vue from 'vue'
import Router from 'vue-router'
import RegistroPersonal from '../components/RegistroPersonal'
import EditarPersonal from '../components/EditarPersonal'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'welcome',
      component: () => import('../views/Welcome'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login'),
      beforeEnter(to, from, next) {
        if (localStorage.getItem('session') !== null) {
          next({
            name: 'menu',
            path: '/menu'
          });
        } else {
          next();
        }
      },     
    },
    {
      path: '/diezmos',
      name: 'diezmos',
      component: () => import('../views/Diezmos'),
      meta: {
        requires_auth: true,
        title: 'Diezmos'
      }
    },
    {
      path: '/ofrendas',
      name: 'ofrendas',
      component: () => import('../views/Ofrendas'),
      meta: {
        requires_auth: true,
        title: 'Ofrendas'
      }
    },
    {
      path: '/protemplo',
      name: 'protemplo',
      component: () => import('../views/Protemplo'),
      meta: {
        requires_auth: true,
        title: 'Protemplo'
      }
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/Menu'),
      meta: {
        requires_auth: true,
        title: 'inicio'
      },
      
    },

    {
      path: '/personal',
      name: 'personal',
      component: () => import('../views/Personal'),
      meta: {
        requires_auth: true,
        is_admin: true
      }
    },
    {
      path: '/registro-personal',
      name: 'registro-personal',
      component: RegistroPersonal
    },
    {
      path: '/editar-personal/:id',
      name: 'editar-personal',
      component: EditarPersonal
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import('../views/Eventos'),
      meta: {
        requires_auth: true,
        title: 'eventos'
      },
    },
    {
      path: '/diezmos-charts',
      name: 'diezmos-charts',
      component: () => import('../views/DiezmosChart')
    },
    {
      path: '/ofrendas-charts',
      name: 'ofrendas-charts',
      component: () => import('../views/OfrendasCharts')
    },
    {
      path: '/protemplo-charts',
      name: 'protemplo-charts',
      component: () => import('../views/ProtemploCharts')
    },
    {
      path: '*',      
      component: () => import('../views/Page404')
    }
  ]
});

router.beforeEach((to, from, next) => {
  if(typeof to.meta.title !== "undefined"){ 
    document.querySelector('title').innerText = to.meta.title;
  }
    if (to.matched.some(record => record.meta.requires_auth)) {        
    if (localStorage.getItem('session') == undefined || localStorage.getItem('session') == null) {
      next({
        name: 'login',
        path: '/login'
      })
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router