<template>
    <q-header reveal elevated class="text-white">
      <q-toolbar>

        <q-btn 
            flat
            @click="selected = 1"
            :class="{togglered:selected == 1}"
            label="Branné cvičení"
            to="/" 
        />
        <q-space />
        
        <q-btn 
            flat
            @click="selected = 2"
            :class="{togglered:selected == 2}" 
            label="Členové týmu" 
            to="/clenove-tymu" 
        />
        <q-btn
            flat
            @click="selected = 3"
            :class="{togglered:selected == 3}"
            label="Kalendář akcí"
        />
        <q-btn
            flat
            @click="selected = 4"
            :class="{togglered:selected == 4}"
            label="Nadcházející akce"
        />

        <q-space />
        <q-btn
            flat
            @click="selected = 5"
            :class="{togglered:selected == 5}"
            label="Uživatel"
        />
      </q-toolbar>
    </q-header>
</template>

<script>
export default {
  data() {
    return {
    selected: '1'
    };
  },
}
</script>
