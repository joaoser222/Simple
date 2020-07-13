<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <div class="q-pa-md row fullscreen items-center justify-center q-gutter-md">
          <q-card class="bg-primary col-md-4 col-sm-6 ">
            <q-toolbar>
              <q-toolbar-title>
                Entrar
              </q-toolbar-title>
            </q-toolbar>
            <q-card-section class="text-white">
              <div class="row">
                <div class="col-12 q-pa-xs" v-if="register">
                  <q-input standout="bg-dark text-white" dense v-model="login.name"  label="Nome"/>
                </div>
                <div class="col-12 q-pa-xs">
                  <q-input standout="bg-dark text-white" dense v-model="login.email"  label="Email" />
                </div>
                <div class="col-12 q-pa-xs">
                  <q-input standout="bg-dark text-white" type="password" dense v-model="login.password"  label="Senha" />
                </div>
                <div class="col-12 q-pa-xs" v-if="register">
                  <q-input standout="bg-dark text-white" type="password" dense v-model="login.confirm_password"  label="Confimação de Senha"/>
                </div>
              </div>
              <div class="row text-right">
                <div class="col q-pa-xs" v-if="register">
                  <q-btn size="sm" flat @click="register = false" no-caps>Já possuo cadastro</q-btn>
                </div>
                <div class="col q-pa-xs" v-else>
                  <q-btn size="sm" flat @click="register = true" no-caps>Não possuo cadastro</q-btn>
                </div>
              </div>
            </q-card-section>
            <q-card-actions align="right">
              <q-btn flat @click="sendData()" :label="register ? 'Cadastrar': 'Entrar'"></q-btn>
            </q-card-actions>
          </q-card>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Login',
  data: ()=>({
    register: false,
    login:{
      email: null,
      password: null
    }
  }),
  methods:{
    sendData(){
      let _this = this;
      let endpoint = _this.register ? '/register' : '/login';
      _this.$axios.post(endpoint,_this.login)
      .then((response)=>{
        if(response.data.hasOwnProperty('error')){
          _this.$alert('Erro!','negative',response.data.error);
        }else{
          _this.$alert('Sucesso!','positive',response.data.success);
          _this.$store.commit('local/setToken',response.data.token);
          _this.$store.commit('local/setRoutes',response.data.routes);
          _this.$router.push({name: 'Dashboard'});
        }
      });
    }
  }
}
</script>
