import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuescroll from 'vuescroll';

import './assets/style.css'

const app = createApp(App)

app.use(vuescroll, {
  ops: {
    // The global config
  },
  // name: 'myScroll' // customize component name, default -> vueScroll
});
  
app.use(router)
app.mount('#app')
