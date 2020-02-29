import Vue from 'vue';
import Router from 'vue-router';
import Newrouter from './routes/routes';
import Nav from './components/nav.vue';

import {
  Dialog,
  Menu,
  MenuItem,
  Input,
  InputNumber,
  Checkbox,
  Button,
  Form,
  FormItem,
  Row,
  Col,
  Container,
  Main
} from 'element-ui';

Vue.use(Dialog);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Checkbox);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Main);
Vue.use(Router);
Vue.use(Router);

new Vue({
  el: '#app',
  router: Newrouter,
  components: {
    menu_app: Nav
  },
  template: `<div>
             <div class="container">
             <menu_app />
             <el-main><router-view class="view"></router-view></el-main>
             </div>
             </div>`
})


export default Vue;
