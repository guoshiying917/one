<template>
  <div>
    <el-button type="primary" @click="willAdd">添加</el-button>
    <v-list @edit="edit"></v-list>
    <v-form :info="info" ref="form"></v-form>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import vForm from "./components/form.vue"
import vList from "./components/list.vue"
export default {
 components:{
   vForm,
   vList
 },
 data() {
   return {
     info:{
       isshow:false,
       title:"添加规格"
     }
   }
 },
 computed: {
   ...mapGetters({})
 },
 methods: {
   ...mapActions({}),
   willAdd(){
     this.info = {
       isshow : true,
       title:"添加规格"
     }
   },
   edit(id){
     this.info = {
       isshow :true,
        title:"编辑规格"
     }
     this.$refs.form.getOne(id)
   },
 },mounted() {
   
 },
};
</script>

<style scoped>

</style>