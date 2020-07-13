<template>
  <q-page class="q-pa-sm">
    <q-toolbar>
      <q-space />
      <q-search
      :params="params"
      @change="filters = $event;"
      ></q-search>
    </q-toolbar>
    <q-list-view :props="props" :params="filters" :options="options" endpoint="/users" @click:item="showDialog">
  </q-page>
</template>

<script>
import QListView from 'components/QListView.vue';
import QSearch from 'components/QSearch.vue';
export default {
  name:'Usuarios',
  components:{
    QListView,
    QSearch
  },
  data:()=>({
    props:{
      title: 'name',
      content: 'email',
      detail_up:'created_at',
      detail_down: 'updated_at'
    },
    filters:{

    },
    params:[
      {label:'Nome',value:'name',type:'string'},
      {label:'Email',value:'email',type:'string'},
      {label:'Data de Cadastro',value:'created_at',type:'date'},
    ]
  }),
  methods:{
    showDialog(item){
      console.log(item)
    }
  }
}
</script>

<style>

</style>
