import { createApp } from 'vue'
import App from './App.vue'
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

import './assets/style.css'



const app = createApp(App);

// You can set global config here.
app.use(vuescroll, {
  ops: {
    // The global config
  },
  // name: 'myScroll' // customize component name, default -> vueScroll
});

app.mount('#app')
