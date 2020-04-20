<template>
  <q-layout view="hHh lpR fFf">
    <TopNav />

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
import TopNav from "./components/TopNav.vue";

export default {
  name: "LayoutDefault",

  components: {
    TopNav
  }
};
</script>

<style></style>
