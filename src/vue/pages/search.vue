<template>
  <el-form :inline="true">
    <el-form-item>
      <el-input v-model="word"
placeholder="Please input"
/>
    </el-form-item>
    <el-form-item>
      <el-input-number v-model="value"
:step="3" :max="24" :min="6" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
v-on:click="search" icon="el-icon-search">
        SEARCH
      </el-button>
    </el-form-item>
    <el-form-item>
      <el-checkbox v-model="play">
        PLAY
      </el-checkbox>
    </el-form-item>
    <el-row :gutter="15"
style="margin-top: 15px;">
      <el-col
        v-for="gif in gifs"
        :key="gif.id"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="8"
      >
        <Gif :data="gif"
:test="play" />
      </el-col>
    </el-row>
  </el-form>
</template>
<script lang="ts">
import Gif from '../components/gif.vue';
import axios from 'axios';
import { Vue, Component, Prop } from 'vue-property-decorator';

import {
  Form,
  FormItem,
  Input,
  InputNumber,
  Button,
  Checkbox,
  Row,
  Col,
} from 'element-ui';
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Row);
Vue.use(Col);

@Component({
  components: {
    Gif,
  },
})
export default class Search extends Vue {
  word = '';
  gifs: Any = [];
  value = 18;
  play = false;

  search() {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7Mk9u0zmdRI4L39b3sYF8BKkroGiLzRL&q=${this.word}&limit=${this.value}&offset=0&rating=G&lang=en`;

    axios
      .get(url)
      .then(response => {
        this.gifs = response.data.data;
      })
      .catch(e => {});
  }
}
</script>
