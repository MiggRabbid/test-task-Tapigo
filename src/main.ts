import './assets/main.css';
import 'vuetify/styles';

import { createApp } from 'vue';
import App from './App.vue';
import { vuetify } from './configs/vuetify';

const app = createApp(App);

app.use(vuetify);
app.mount('#app');
