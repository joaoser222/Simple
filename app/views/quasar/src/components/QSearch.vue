<template>
  <div>
    <q-btn flat icon="las la-filter" label="Filtrar" @click="dialog = true" />
    <q-dialog v-model="dialog" persistent>
      <q-card style="max-width: 600px">
        <q-toolbar>
          <q-avatar>
            <q-icon name="las la-filter" />
          </q-avatar>
          <q-toolbar-title>Filtros</q-toolbar-title>
          <q-btn flat round dense icon="las la-times" @click="applyFilter(true)" />
        </q-toolbar>

        <q-card-section >
          <div class="row">
            <div class="col-xs-12 col-sm-4 q-pa-sm">
              <q-select
                v-model="filter.field"
                :options="params"
                emit-value
                map-options
                label="Campo"
              outlined />
            </div>
            <div class="col-xs-12 col-sm-4 q-pa-sm">
              <q-select
                v-model="filter.operation"
                :options="operations"
                emit-value
                map-options
                label="Operação"
              outlined />
            </div>
            <div class="col-xs-12 col-sm-4 q-pa-sm">
              <q-select
                v-if="type=='select'"
                v-model="filter.field"
                label="Valor"
                :options="param.items"
                emit-value
                map-options
                clearable
                outlined
              />
              <q-input outlined
                v-model="filter.value"
                v-if="type=='date'"
                label="Valor"
                mask="####-##-##"
                clearable
              >
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-date v-model="filters[param.value]" mask="YYYY-MM-DD"/>
                </q-popup-proxy>
              </q-input>
              <q-input label="Valor" v-model="filter.value" v-if="type=='string'" outlined clearable/>
            </div>

          </div>
        </q-card-section>
        <q-card-section>
          <div class="row" v-for="(item,index) in filters" :key="index">
            <div class="col-12">
              {{item.field}}{{item.operation}}{{item.value}}
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat icon="las la-plus" label="Adicionar Filtro" @click="addFilter()" />
          <q-btn flat @click="filters=[];applyFilter();">Limpar</q-btn>
          <q-btn flat @click="applyFilter()">Aplicar</q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  name: 'QSearch',
  props: ['default_param','params'],
  data:()=>({
    dialog: false,
    type:'string',
    filter:{
      field:'',
      operation:'',
      value:''
    },
    operations:[
      {label:'Igual a',value:'='},
      {label:'Parecido com',value:'like'},
      {label:'Maior que',value:'>'},
      {label:'Menor que',value:'<'},
      {label:'Maior ou igual a',value:'>='},
      {label:'Menor ou igual a',value:'<='},
      {label:'Diferente de',value:'<>'},
    ],
    filters:[
    ],
    loading: true,
  }),
  methods:{
    addFilter(){
      let _this = this;
      _this.filters.push(Object.assign({},_this.filter));
    },
    applyFilter(alert=false){
      let _this = this;
      if(alert){
        if(Object.values(_this.filters).find(obj => obj)){
          _this.$q.dialog({
            title: 'Aplicar?',
            message: 'Deseja aplicar os filtros modificados?',
            ok: {label: 'Sim',color: 'secondary'},
            cancel: {label: 'Não',color: 'secondary'},
            persistent: true
          }).onOk(() => {
             _this.$emit('change',Object.assign({},_this.filters));
          })
        }
      }else{
        _this.$emit('change',Object.assign({},_this.filters));
      }
      _this.dialog = false;
    },
  },
}
</script>
