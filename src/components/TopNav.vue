<template>
  <q-header elevated class="text-white">
    <q-toolbar>
      <q-btn
        flat
        @click="selected = 1"
        :class="{ togglered: selected == 1 }"
        label="Branné cvičení"
        to="/"
      />
      <q-space />

      <q-btn
        flat
        @click="selected = 2"
        :class="{ togglered: selected == 2 }"
        label="Členové týmu"
        to="/clenove-tymu"
      />
      <q-btn
        flat
        @click="selected = 3"
        :class="{ togglered: selected == 3 }"
        label="Kalendář akcí"
        to="/kalendar-akci"
      />
      <q-btn
        flat
        @click="selected = 4"
        :class="{ togglered: selected == 4 }"
        label="Nadcházející akce"
        to="/nadchazejici-akce"
      />

      <q-space />
      <q-btn
        flat
        @click="(drawer = !drawer), (selected = 5)"
        :class="{ togglered: selected == 5 }"
        label="Přihlášení"
      />
      <q-drawer
        side="right"
        v-model="drawer"
        desktop
        overlay
        bordered
        :width="480"
        :breakpoint="500"
        content-class="bg-white"
      >
        <Drawer />
      </q-drawer>
    </q-toolbar>
  </q-header>
</template>

<script>
import Drawer from "@/components/Drawer.vue";

export default {
  components: {
    Drawer
  },
  data() {
    return {
      selected: "1",
      drawer: false
    };
  }
};
</script>


