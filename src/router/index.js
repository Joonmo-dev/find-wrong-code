import Vue from 'vue';
import Router from 'vue-router';
import PageMain from '@/components/PageMain';
import PageProblem from '@/components/PageProblem';
import PageResult from '@/components/PageResult';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'PageMain',
    component: PageMain,
  }, {
    path: '/problem/:type/:id',
    name: 'PageProblem',
    component: PageProblem,
    props: true,
  }, {
    path: '/result/:type',
    name: 'PageResult',
    component: PageResult,
    props: true,
  }],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  },
});
