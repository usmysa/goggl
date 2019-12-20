import Vue from 'vue';
import App from '@/App.vue';
import '@/registerServiceWorker';
import router from '@/router';
import store from '@/store';
import '@/assets/sass/main.scss';
import SvgIcon from '~/atoms/SvgIcon.vue';

Vue.config.productionTip = false;

Vue.component('SvgIcon', SvgIcon);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
