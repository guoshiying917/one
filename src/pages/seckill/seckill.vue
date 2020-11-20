<template>
  <div>
    <el-button type="primary" @click="willAdd">添加</el-button>
   
    <v-form :info="info" ref="form"></v-form>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
import vList from "./components/list.vue"
import vForm from "./components/form.vue"

export default {
  computed:{
       ...mapGetters({})
  },methods: {
      ...mapActions({})
  },mounted() {
      
  },data() {
    return {
      info:{
        
      }
    }
  },components:{
    vList,
    vForm
  }
}
</script>

<style scoped>

</style>