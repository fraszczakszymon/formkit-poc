import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initializeFormKit } from './formkit.ts';

const app = createApp(App);

initializeFormKit(app);

app.mount('#app');
