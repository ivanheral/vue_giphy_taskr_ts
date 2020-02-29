<template>
  <div>
    <div
      class="gif"
      @click="dialogVisible = true"
      @mouseenter="in_gif()"
      @mouseleave="out_gif()"
    >
      <img
        :src="
          play || test
            ? data.images.fixed_height_small.url
            : data.images.fixed_height_small_still.url
        "
      />
    </div>
    <el-dialog title="Gif"
:visible.sync="dialogVisible" width="720px">
      <img :src="data.images.original.url" >
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Dialog } from 'element-ui';
Vue.use(Dialog);

@Component
export default class Gif extends Vue {
  @Prop(Object) data;
  @Prop(Boolean) test;

  play = false;
  dialogVisible = false;

  mounted(): void {
    this.load();
  }

  in_gif(): void {
    this.play = true;
  }

  out_gif() {
    this.play = false;
  }

  load() {
    this.play = this.test;
  }
}
</script>
<style lang="scss">
.gif {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 15px;
  border: 1px solid #ebebeb;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
}
</style>
