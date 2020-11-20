import {reqspecsList,reqspecsCount} from "../../utils/http"
const state = {
    list:[],
    total:0,
    size:2,
    page:1,
}
const mutations = {
    changeList(state,arr){
        state.list = arr;
        // console.log(state.list);
    },changeTotal(state,num){
        state.total = num;
    },changePage(state,page){
        state.page = page;
    }
}

const actions={
    //发起请求
    reqList(context){
        reqspecsList({
            page:context.state.page,
            size:context.state.size
        }).then(res=>{
            let list = res.data.list?res.data.list:[]
            if(list.length==0&&context.state.page>1){
                context.commit("changePage",context.state.page-1).dispatch("reqList");
                return;
            }
            list.forEach(item=>{
                item.attrs=JSON.parse(item.attrs)
            })
            context.commit("changeList",list)
        })
    },reqCount(context){
        reqspecsCount().then(res=>{
            context.commit("changeTotal",res.data.list[0].total)
        })
    },changePage(context,page){
        context.commit("changePage",page)
        context.dispatch("reqList")
    }
}

const getters={
    list(state){
        return state.list
    },total(state){
        return state.total
    },size(state){
        return state.size
    },
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced:true
}