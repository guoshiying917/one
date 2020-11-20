<template>
  <div class="vip">
    <el-button type="primary" @click="willAdd">添加</el-button>
    <v-table :info="info" @edit="edit"></v-table>
    <v-form :info="info" ref="form"></v-form>
  </div>
</template>

<script>
import vTable from "./components/table";
import vForm from "./components/form";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({}),
  },
  components: {
    vTable,
    vForm,
  },
  data() {
    return {
      info: {
        isShow: false,
        title: "轮播图添加",
      },
    };
  },
  methods: {
    willAdd() {
      this.info.isShow = true;
      this.info.title = "轮播图添加";
    },
    edit(id) {
      this.info.isShow = true;
      this.info.title = "轮播图编辑";
      this.$refs.form.getOne(id);
    },
  },
};
</script>

<style>
.el-button{
  margin: 20px 0 10px;
}
</style>