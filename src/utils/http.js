import axios from "axios"
import qs from "qs"
import { errorAlert } from "./alert"
import store from "../store"
import router from "../router"
import Vue from "vue"

//开发环境使用 8080
let baseUrl = "/aa"
Vue.prototype.$imgPre="http://localhost:3000"

//生产环境使用 打包
// let baseUrl=""
// Vue.prototype.$imgPre=""

//请求拦截
axios.interceptors.request.use(req => {
    if (req.url != baseUrl + "/api/userlogin") {
        req.headers.authorization = store.state.userInfo.token;
    }
    return req
})

//响应拦截
axios.interceptors.response.use(res => {
    console.log("本次请求地址是：" + res.config.url);
    console.log(res);
    //13.统一处理失败，组件内只需要处理成功即可
    if (res.data.code !== 200) {
        errorAlert(res.data.msg)
    }

    if(res.data.msg==="登录已过期或访问权限受限"){//掉线了
        //清除登录信息
        store.dispatch("changeUser",{})
        //跳转到登录页
        router.push("/login")
    }
    return res
})

// ===========菜单接口 开始====================

//13.添加
export const reqMenuAdd = (form) => {
    return axios({
        url: baseUrl + "/api/menuadd",
        method: "post",
        data: qs.stringify(form)
    })
}

//18.列表交互
export const reqMenuList = () => {
    return axios({
        url: baseUrl + "/api/menulist",
        method: "get",
        params: {
            istree: true
        }
    })
}

// 29.删除
export const reqMenuDel = (id) => {
    return axios({
        url: baseUrl + "/api/menudelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}

// 35.获取一条数据
export const reqMenuDetail = (id) => {
    return axios({
        url: baseUrl + "/api/menuinfo",
        method: "get",
        params: {
            id: id
        }
    })
}
//38.修改
export const reqMenuUpdate = (form) => {
    return axios({
        url: baseUrl + "/api/menuedit",
        method: "post",
        data: qs.stringify(form)
    })
}

// ===========菜单接口 结束====================

// ===========角色接口 开始====================

// 8.添加
export const reqRoleAdd = (user) => {
    return axios({
        url: baseUrl + "/api/roleadd",
        method: "post",
        data: qs.stringify(user)
    })
}

//18.列表
export const reqRoleList = () => {
    return axios({
        url: baseUrl + "/api/rolelist",
        method: "get",
    })
}

//26.删除
export const reqRoleDel = (id) => {
    return axios({
        url: baseUrl + "/api/roledelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}

// 33.详情
export const reqRoleDetail = id => {
    return axios({
        url: baseUrl + "/api/roleinfo",
        method: "get",
        params: {
            id: id
        }
    })
}

// 38.修改
export const reqRoleUpdate = (user) => {
    return axios({
        url: baseUrl + "/api/roleedit",
        method: "post",
        data: qs.stringify(user)
    })
}

// ===========角色接口 结束====================

// ===========管理员接口 开始====================

// 8.添加
export const reqUserAdd = (user) => {
    return axios({
        url: baseUrl + "/api/useradd",
        method: "post",
        data: qs.stringify(user)
    })
}

//18.列表 p={page:1,size:10}
export const reqUserList = (p) => {
    return axios({
        url: baseUrl + "/api/userlist",
        method: "get",
        params: p
    })
}

//26.删除
export const reqUserDel = (uid) => {
    return axios({
        url: baseUrl + "/api/userdelete",
        method: "post",
        data: qs.stringify({
            uid: uid
        })
    })
}

// 33.详情
export const reqUserDetail = uid => {
    return axios({
        url: baseUrl + "/api/userinfo",
        method: "get",
        params: {
            uid: uid
        }
    })
}



// 38.修改
export const reqUserUpdate = (user) => {
    return axios({
        url: baseUrl + "/api/useredit",
        method: "post",
        data: qs.stringify(user)
    })
}
// 52 总数
export const reqUserCount = () => {
    return axios({
        url: baseUrl + "/api/usercount",
        method: "get",

    })
}

//1.登录
export const reqLogin = (user) => {
    return axios({
        url: baseUrl + "/api/userlogin",
        method: "post",
        data: qs.stringify(user)
    })
}

// ===========管理员接口 结束====================
// ===========分类接口 开始====================

// 8.添加 文件
export const reqcateAdd = (user) => {
    let d=new FormData()
    for(let i in user){
        d.append(i,user[i])
    }
    return axios({
        url: baseUrl + "/api/cateadd",
        method: "post",
        data:d
    })
}

//18.列表 p={istree:true}  p={pid:1}
export const reqcateList = (p) => {
    return axios({
        url: baseUrl + "/api/catelist",
        method: "get",
        params: p
    })
}

//26.删除
export const reqcateDel = (id) => {
    return axios({
        url: baseUrl + "/api/catedelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}

// 33.详情
export const reqcateDetail = id => {
    return axios({
        url: baseUrl + "/api/cateinfo",
        method: "get",
        params: {
            id: id
        }
    })
}



// 38.修改 文件
export const reqcateUpdate = (cate) => {
    let d=new FormData()
    for(let i in cate){
        d.append(i,cate[i])
    }
    return axios({
        url: baseUrl + "/api/cateedit",
        method: "post",
        data: d
    })
}

// ===========分类接口 结束====================
// ===========规格接口 开始====================

// 8.添加 文件
export const reqspecsAdd = (user) => {
 
    return axios({
        url: baseUrl + "/api/specsadd",
        method: "post",
        data:qs.stringify(user)
    })
}

//18.列表 p={page:1,size:10}
export const reqspecsList = (p) => {
    return axios({
        url: baseUrl + "/api/specslist",
        method: "get",
        params: p
    })
}

//26.删除
export const reqspecsDel = (id) => {
    return axios({
        url: baseUrl + "/api/specsdelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}

// 33.详情
export const reqspecsDetail = id => {
    return axios({
        url: baseUrl + "/api/specsinfo",
        method: "get",
        params: {
            id: id
        }
    })
}



// 38.修改 文件
export const reqspecsUpdate = (user) => {
   
    return axios({
        url: baseUrl + "/api/specsedit",
        method: "post",
        data: qs.stringify(user)
    })
}
export const reqspecsCount = () => {
   
    return axios({
        url: baseUrl + "/api/specscount",
        method: "get",
    })
}

// ===========规格接口 结束====================

// ===========商品管理接口 开始====================

// 8.添加 文件
export const reqgoodsAdd = (user) => {
    let d=new FormData()
    for(let i in user){
        d.append(i,user[i])
    }
    return axios({
        url: baseUrl + "/api/goodsadd",
        method: "post",
        data:d
    })
}

//18.列表 p={page:1,size:10}
export const reqgoodsList = (p) => {
    return axios({
        url: baseUrl + "/api/goodslist",
        method: "get",
        params: p
    })
}

//26.删除
export const reqgoodsDel = (id) => {
    return axios({
        url: baseUrl + "/api/goodsdelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}

// 33.详情
export const reqgoodsDetail = id => {
    return axios({
        url: baseUrl + "/api/goodsinfo",
        method: "get",
        params: {
            id: id
        }
    })
}



// 38.修改 文件
export const reqgoodsUpdate = (user) => {
    let d=new FormData()
    for(let i in user){
        d.append(i,user[i])
    }
    return axios({
        url: baseUrl + "/api/goodsedit",
        method: "post",
        data: d
    })
}
export const reqgoodsCount = () => {
   
    return axios({
        url: baseUrl + "/api/goodscount",
        method: "get",
    })
}

// ===========商品管理接口 结束====================

//会员开始




// 会员列表
export const reqVipList = () => {
    return axios({
    url: urlBase + '/api/memberlist',
    method: "get"
    })
    }
    
    // 获取一条会员数据
    export const reqVipDetail = (uid) => {
    return axios({
    url: urlBase + '/api/memberinfo',
    method: "get",
    params: {
    uid: uid
    }
    })
    }
    
    // 修改会员数据
    export const reqVipUpdate = (vip) => {
    return axios({
    url: urlBase + '/api/memberedit',
    method: "post",
    data: qs.stringify(vip)
    })
    }


    // 轮播图添加
export const reqBannerAdd = (form) => {
    let d=new FormData()
    for(let i in form){
    d.append(i,form[i])
    }
    return axios({
    url: urlBase + '/api/banneradd',
    method: 'post',
    data: d
    })
    }
    
    
    // 轮播图列表
    export const reqBannerList = () => {
    return axios({
    url: urlBase + '/api/bannerlist',
    method: 'get'
    })
    }
    
    // 获取一条轮播图数据
    export const reqBannerDetail = (id) => {
    return axios({
    url: urlBase + '/api/bannerinfo',
    method: "get",
    params: {
    id: id
    }
    })
    }
    
    // 修改轮播图数据
    export const reqBannerUpdate = (form) => {
    let d=new FormData()
    for(let i in form){
    d.append(i,form[i])
    }
    return axios({
    url: urlBase + '/api/banneredit',
    method: 'post',
    data: d
    })
    }
    
    
    // 删除轮播图
    export const reqBannerDel = (id) => {
    return axios({
    url: urlBase + '/api/bannerdelete',
    method: "post",
    data: qs.stringify({
    id: id
    })
    })
    }