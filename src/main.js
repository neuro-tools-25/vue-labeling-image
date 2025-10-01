import './assets/main.scss';
import 'mingcute_icon/font/Mingcute.css';
import 'lib/styles.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import UI from './UI/index.js';

const app = createApp(App)

app.use(router)

UI.forEach((item) => app.component(item.name, item));

app.mount('#app')
