<template>
  <div>
    <el-button type="primary" @click="willAdd">添加</el-button>
    <v-list :list="list" @init="newInit" @edit="edit" :info="info"></v-list>
    <el-pagination background @current-change="changePage"
      layout="prev, pager, next"
      :total="total"
      :page-size="size">
    </el-pagination>
    <v-form :info="info" @init="newInit" ref="form"></v-form>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex"
import vList from "./components/list.vue"
import vForm from "./components/form.vue"
import { reqUserList,reqUserCount, reqUserAdd } from "../../utils/http"
export default {
 components:{
   vList,
   vForm
 },
 data() {
   return {
     info:{
       isshow:false,
       title:"添加管理员"
     },
     list:[],
     total:0,
     size:2,
     page:1,
   };
 },
 computed: {
   ...mapGetters({})
 },
 methods: {
   ...mapActions({}),
   willAdd(){
     console.log(111);
     this.info = {
       isshow:true,
       title:"添加管理员"
     };
    // this.info.isshow=true
   },
   init(){
     reqUserList({page:this.page,size:this.size}).then(res=>{
       let list = res.data.list?res.data.list:[]
       if(list.length===0&&this.page>1){
         this.page--;
         this.init();
         return;
       }
       this.list = list;
     });
   },getCount(){
     reqUserCount().then(res=>{
       this.total = res.data.list[0].total
     })
   },
   changePage(page){
     this.page = page;
     this.init()
   },
   newInit(){
     this.init()
     this.getCount()
   },
   edit(uid){
        this.info = {
          isshow :true,
          title:"编辑角色"
        };
        this.$refs.form.getOne(uid);
   }
 },mounted() {
   this.init();
   this.getCount();
 },
}
</script>

<style scoped>

</style>