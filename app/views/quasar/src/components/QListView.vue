<template>
    <q-list>
        <q-item clickable v-ripple v-for=" (item, index) in items" :key="index" class="rounded-borders" @click="$emit('click:item',item);">
        <q-item-section side v-if="props.hasOwnProperty('image')">
             <slot name="image" v-bind:data="item[props.image]">
                <q-img :src="item[props.image]" class="rounded-borders" width="48px" @error="(error)=>error.originalTarget.src='statics/background.svg'">
                </q-img>
             </slot>
        </q-item-section>
        <q-item-section>
            <q-item-label lines="1" class="text-capitalize">
                <slot name="title" v-bind:data="item[props.title]">
                    {{item[props.title]}}
                </slot>
            </q-item-label>
            <q-item-label caption lines="2">
                <slot name="content" v-bind:data="item[props.content]">
                    {{item[props.content]}}
                </slot>
            </q-item-label>
        </q-item-section>
        <q-item-section side top>
            <q-item-label caption>
                <slot name="detail_up" v-bind:data="item[props.detail_up]">
                    {{item[props.detail_up]}}
                </slot>
            </q-item-label>
            <q-item-label caption>
                <slot name="detail_down" v-bind:data="item[props.detail_down]">
                    {{item[props.detail_down]}}
                </slot>
            </q-item-label>
        </q-item-section>
        </q-item>
        <q-item v-show="!end">
            <q-item-section caption v-show="!loading">
                <q-btn flat class="full-width" label="Carregar mais items" @click="getListData()"/>
            </q-item-section>
            <q-item-section v-show="loading">
                <div class="flex flex-center full-width">
                    <div class="justify-center">
                        <q-spinner color="primary" size="40px"/>
                    </div>
                </div>
            </q-item-section>
        </q-item>
    </q-list>
</template>
<script>
export default {
    name:'QListView',
    props: ['props','endpoint','params','options'],
    data:()=>({
        next:'',
        end: false,
        loading: false,
        items:[],
        selected_item: {}
    }),
    watch:{
        params:{
            deep:true,
            handler(){
                this.items = [];
                this.next = '';
                this.end = false;
                this.getListData();
            }
        }
    },
    methods:{
        imageError(error){
            error.originalTarget.src="statics/background.svg";
        },
        getListData(){
            let _this = this;
            _this.loading = true;
            let params = Object.assign({
                'next':_this.next,
                'params':_this.params?_this.params:{}
            },
            _this.options?_this.options:{});
            _this.$axios.get(_this.endpoint,params)
            .then((response) => {
                _this.items = _this.items.concat(response.data);
                _this.next = response.data.next;
            })
            .catch(()=>{
                _this.end = true;
            })
            .finally(()=>{
                if((_this.next=='') || (_this.items==[])){
                    _this.end = true;
                }
                _this.loading = false;

            });
        },
    },
    mounted(){
        this.getListData();
    }

}
</script>

