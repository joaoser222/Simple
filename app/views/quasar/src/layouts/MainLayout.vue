<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="las la-bars"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          {{$route.name}}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-dark"
    >
      <q-list>
        <q-item clickable v-for="(item,index) in $store.getters['local/routes']" :key="index" :to="{name: item.name}">
          <q-item-section top avatar>
            <q-avatar :icon="item.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{item.name}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: null,
    }
  },mounted(){
    console.log(this.$store.getters['local/routes']);
  }
}
</script>
