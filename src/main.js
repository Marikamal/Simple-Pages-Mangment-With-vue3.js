import {createApp, VueElement} from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import $bus from './utils/Events';
import router from './routers';
import $pages from './data';

const app = createApp(App);

app.use(router);// use is passing a plugin and router obg is a plugin
app.provide( '$pages' , $pages);
app.provide( '$bus' , $bus);
app.mount('#app');