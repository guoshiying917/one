<template>
  <div>
    <!-- 23.list展示在页面 -->
    <el-table
      :data="list"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      :tree-props="{children: 'children'}"
    >
      <el-table-column prop="id" label="角色编号" sortable></el-table-column>
      <el-table-column prop="rolename" label="角色名称" sortable></el-table-column>

      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status===1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="edit(scope.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import {reqRoleDel} from "../../../utils/http"
import {successAlert} from "../../../utils/alert"
export default {
  // 22.接收list
  props: ["list"],
  computed: {
    ...mapGetters({})
  },
  methods: {
    ...mapActions({}),
    edit(id){
       this.$emit("edit",id)
    },del(id){
        reqRoleDel(id).then(res=>{
          if(res.data.code === 200){
            successAlert(res.data.msg)
            this.$emit("init")
          }
        })
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>