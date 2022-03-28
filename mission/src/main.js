import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import axios from 'axios';
import router from './router';
import store from './store';
import App from './App.vue';

library.add(fas, far);

const app = createApp(App);
app.config.globalProperties.axios = axios;
app.component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app');
