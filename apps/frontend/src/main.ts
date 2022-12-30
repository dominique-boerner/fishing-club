import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from 'oh-vue-icons';

import './assets/main.scss';
import {
  BiPeopleFill,
  CoSad,
  FaHome,
  FaTrashAlt,
  IoFishSharp,
  OiSignOut,
} from 'oh-vue-icons/icons';

addIcons(FaHome, IoFishSharp, BiPeopleFill, OiSignOut, FaTrashAlt, CoSad);

const app = createApp(App);

app.use(router);

app.component('v-icon', OhVueIcon);

app.mount('#app');
