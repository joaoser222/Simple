import Vue from 'vue';
import { Dialog } from 'quasar'
Vue.prototype.$alert = (title,type,message,buttons={'ok':'OK'},func=()=>{})=>{
  let props = {
    title: title,
    message: message,
    persistent: true,
    class: `bg-dark text-${type}`,
  }
  for(let btn in buttons){
    props[btn]={label: buttons[btn],color: 'dark'};
  }
  Dialog.create(props).onOk(func);
};
