<template>
  <div>
    <el-dialog :title="info.title" :visible.sync="info.isshow" @closed="closed">
      <el-form :model="user">
        <el-form-item label="规格名称" label-width="120px">
          <el-input v-model="user.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="规格属性" label-width="120px" v-for="(item,index) in attrArr" :key="index">
          <div class="line">
            <el-input v-model="item.value" autocomplete="off"></el-input>
            <el-button type="primary" v-if="index===0" @click="addAttr">添加规格属性</el-button>
            <el-button type="danger" v-else @click="delAttr(index)">删除</el-button>
          </div>
        </el-form-item>

        <el-form-item label="状态" label-width="120px">
          <el-switch v-model="user.status" :active-value="1" :inactive-value="2"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" v-if="info.title=='添加规格'" @click="add">添 加</el-button>
        <el-button type="primary" v-else @click="update">修 改</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import {reqspecsAdd,reqspecsDetail,reqspecsUpdate,
reqspecsDel
} from "../../../utils/http"
import {successAlert} from "../../../utils/alert"
export default {
props:["info"],
data(){
    return {
        user:{
            specsname:"",
            attrs:"",
            status:1
        },
        attrArr:[{value:""}]
    };
},computed: {
    ...mapGetters({})
},methods: {
    ...mapActions({
        reqList:"specs/reqList",
        reqCount:"specs/reqCount",
    }),cancel(){
     this.info.isshow = false;

    },delAttr(index){
        this.attrArr.splice(index,1);
    },
    empty(){
        this.user={
            specsname:"",
            attrs:"",
            status:1
        };this.attrArr = [{value:""}];
    },add(){
        this.user.attrs = JSON.stringify(this.attrArr.map(item=>item.value));
        reqspecsAdd(this.user).then(res=>{
            if(res.data.code === 200){
                successAlert("添加成功");
                this.cancel();
                this.empty();
                this.reqList()
                this.reqCount()
            }
        })
    },getOne(id){
        reqspecsDetail(id).then(res=>{
            this.user = res.data.list[0]
            this.attrArr=JSON.stringify(this.attrArr.map(item.value))
            reqspecsUpdate(this.user).then(res=>{
                if(res.data.code===200){
                    successAlert("更新成功")
                    this.cancel()
                    this.empty()
                    this.reqList()
                }
            })
        })
    },
    closed(){},
    addAttr(){
      this.attrArr.push({
        value:""
      })
    }
    
},
}
</script>

<style>

</style>