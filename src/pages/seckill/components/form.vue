<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  
  <el-form-item label="活动期限">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
    
  </el-form-item>
  <el-form-item label="一级分类">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="生活百货" value="shanghai"></el-option>
      <el-option label="美妆护肤" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="二级分类">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="鼠标" value="shanghai"></el-option>
      <el-option label="书包" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="二级分类">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="精华" value="beijing"></el-option>
      <el-option label="爽肤水" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="状态">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="商品">
   <select>
       <option value="1">百货商场</option>
       <option value="2">美妆护肤</option>
   </select>
  </el-form-item>
  
  <el-form-item label="添加">
   
  </el-form-item>
  
</el-form>
</template>

<script>
export default {
 data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }

</script>

<style scoped>



</style>