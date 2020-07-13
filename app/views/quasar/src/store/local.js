
export default {
  namespaced: true,
  state:{
    token: localStorage.getItem('token')||null,
    routes: localStorage.getItem('routes')||null,
  },
  getters:{
    routes:state => {
      return JSON.parse(state.routes).map(item=>{
        return {name:item.name,icon: item.icon,path:item.path,component: ()=>import(`pages/${item.path.charAt(0).toUpperCase()+item.path.slice(1)}`)}
      });
    },
    token:state => state.token,
  },
  mutations:{
    setToken(state,token){
      localStorage.setItem('token',token);
    },
    setRoutes(state,routes){
      localStorage.setItem('routes',JSON.stringify(routes));
    },
  },
}
