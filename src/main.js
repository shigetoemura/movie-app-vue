import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import 'bulma/css/bulma.css'

Vue.config.productionTip = false

axios.defaults.baseURL = "https://api.themoviedb.org/3/"

const interceptorsRequest = axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const interceptorsResponse = axios.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.eject(interceptorsRequest)
axios.interceptors.request.eject(interceptorsResponse)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
