import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import ToggleButton from 'primevue/togglebutton';
import PrimaryButton from 'primevue/button';
import MyMenu from 'primevue/menu';
import SideBar from 'primevue/sidebar';
import ToastService from 'primevue/toastservice';
import ScrollPanel from 'primevue/scrollpanel';
import MyToast from 'primevue/toast';
import TabMenu from 'primevue/tabmenu';
import MySteps from 'primevue/steps';

import 'primevue/resources/themes/md-dark-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(ToastService);
app.component('ToggleButton', ToggleButton);
app.component('PrimaryButton', PrimaryButton);
app.component('MyMenu', MyMenu);
app.component('SideBar', SideBar);
app.component('MyToast', MyToast);
app.component('ScrollPanel', ScrollPanel);
app.component('TabMenu', TabMenu);
app.component('MySteps', MySteps);

app.mount('#app');