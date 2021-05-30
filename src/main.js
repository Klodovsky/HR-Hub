// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { Button, message } from 'ant-design-vue';
window.Vue = Vue;
import App from './App'
import router from './router'
import VueSlimScroll from 'vue-slimscroll'
import datePicker from 'vue-bootstrap-datetimepicker';
import store from './store/index.js'
import installer from '@andresouzaabreu/vue-data-table'
import CKEditor from 'ckeditor4-vue';
import FullCalendar from 'vue-full-calendar'
import Select2 from 'v-select2-component';
import InputMask from 'vue-input-mask';
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
import { Drag, Drop } from 'vue-drag-drop'
import { BarChart } from 'vue-morris'
import { LineChart } from 'vue-morris'
import Multiselect from 'vue-bootstrap-multiselect'
import LayoutHeader from '@/components/layouts/Header.vue'
import LayoutHeaderEmployee from '@/components/layouts/HeaderEmployee.vue'
import LayoutHeaderApp from '@/components/layouts/HeaderApp.vue'
import LayoutSidebar from '@/components/layouts/Sidebar.vue'
import LayoutSidebarEmployee from '@/components/layouts/SidebarEmployee.vue'
import LayoutSidebarApp from '@/components/layouts/SidebarApp.vue'
import LayoutSidebarReports from '@/components/layouts/SidebarReports.vue'
import LayoutSidebarPromotion from '@/components/layouts/SidebarPromotion.vue'
import LayoutSidebarGoals from '@/components/layouts/SidebarGoals.vue'
let bootstrap = require('bootstrap')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
// import './components/style.css'
import './assets/style/style.css'
import 'vue-full-calendar/node_modules/fullcalendar/dist/fullcalendar.css'
import './components/main.js'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
Vue.config.productionTip = false
Vue.use(Antd);
Vue.use(Button);
Vue.use(VueSlimScroll)
Vue.use(datePicker)
Vue.use( CKEditor );
Vue.component('layout-header', LayoutHeader);
Vue.component('layout-headerEmployee', LayoutHeaderEmployee);
Vue.component('layout-headerApp', LayoutHeaderApp);
Vue.component('layout-sidebar', LayoutSidebar);
Vue.component('layout-sidebarEmployee', LayoutSidebarEmployee);
Vue.component('layout-sidebarApp', LayoutSidebarApp);
Vue.component('layout-sidebarReports', LayoutSidebarReports);
Vue.component('layout-sidebarPromotion', LayoutSidebarPromotion);
Vue.component('layout-sidebarGoals', LayoutSidebarGoals);
Vue.use(require('vue-moment'));
Vue.component('drag', Drag);
Vue.component('drop', Drop);
Vue.component('input-mask', InputMask);
Vue.component('multiselect', Multiselect);
Vue.component('Select2', Select2);
Vue.use(FullCalendar);
installer(Vue, store)
new Vue({
  store,
  el: '#app',
  router,
  components: { App,BarChart,LineChart, },
  data() {
    return {
      message: 'Hello',
    }
  },
  template: '<App/>'
})