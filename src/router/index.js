import { createRouter, createWebHistory } from 'vue-router';

import MainView from '../views/MainView.vue';
// import ExamplesView from '../views/ExamplesView.vue';
import SettingsView from '../views/SettingsView.vue';
import UIView from '../views/UIView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_SITE_BASE),
  linkActiveClass: 'nav_active',
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView,
      meta: {
        title: {
          rus: 'Документация',
          eng: 'Documentation',
        }
      }
    },
    {
      path: '/examples',
      name: 'ExamplesView',
      //component: ExamplesView,
      component: () => import('../views/ExamplesView.vue'),
      meta: {
        title: {
          rus: 'Примеры',
          eng: 'Examples',
        }
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: {
        title: {
          rus: 'Настройки',
          eng: 'Settings',
        }
      }
    },
    {
      path: '/ui',
      name: 'ui',
      component: UIView,
      meta: {
        title: {
          rus: 'UI',
          eng: 'UI',
        }
      }
    },
    { 
      path: '/404',
      name: '404',
      meta: {
        title: {
          rus: "Страница не найдена",
          eng: "Page not found",
        }
      },
      component: NotFoundView,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      redirect: '/404'
    }
  ],
})

const scrollPageToTop = (to, from, next) => {
  if (to?.path !== from?.path) document.querySelector('main')?.scrollTo(0, 0);

  next();
}

router.beforeEach(scrollPageToTop);

export default router
