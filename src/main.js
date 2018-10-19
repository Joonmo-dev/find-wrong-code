// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VAnimateCss from 'v-animate-css';
import PrettyCheck from 'pretty-checkbox-vue/check';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(VAnimateCss);
Vue.component('p-check', PrettyCheck);
Vue.prototype.$bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
