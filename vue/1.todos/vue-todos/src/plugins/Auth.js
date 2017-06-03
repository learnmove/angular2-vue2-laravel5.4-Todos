var Auth={};
Auth.install=function(Vue,options){
    var auth={
        getToken(){
            return localStorage.getItem('token');
        },
        setToken(token){
            localStorage.setItem('token',token);
        },
        getTokenBody(){
           return "?token="+this.getToken();

        }
    }
    Vue.prototype.$auth=auth;
}
export default Auth;