<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal elevated class="text-white">
      <q-toolbar>
        <!-- <q-btn dense flat round icon="menu" @click="left = !left" /> -->

        <q-btn-toggle
          v-model="model"
          flat
          stretch
          toggle-color="red-toggle"
          :options="[{ label: 'Branné cvičení', value: 'home' }]"
        />
        <q-space />
        <q-btn-toggle
          v-model="model"
          flat
          stretch
          toggle-color="red-toggle"
          :options="[
            { label: 'Členové týmu', value: 'clenove-tymu' },
            { label: 'Kalendář akcí', value: 'kalendar-akci' },
            { label: 'Nadcházející akce', value: 'nadchazejici-akce' }
          ]"
        />
        <q-space />
        <q-btn-toggle
          v-model="model"
          flat
          stretch
          toggle-color="red-toggle"
          :options="[{ label: 'Uživatel', value: 'user' }]"
        />
      </q-toolbar>
    </q-header>

    <!-- <q-drawer v-model="left" side="left" overlay bordered>
      drawer content
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "LayoutDefault",

  components: {
    // HelloWorld
  },

  data() {
    return {
      model: "home",
      leftDrawerOpen: false
    };
  }
};
</script>

<style></style>
