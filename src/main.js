// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'common/stylus/index.styl'

Vue.config.productionTip = false;
import fastcick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    loading: require('common/image/default.png')
});
fastcick.attach(document.body);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
