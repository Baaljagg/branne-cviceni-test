<template>
  <q-scroll-area class="fit">
    <div class="q-px-lg q-pt-lg q-pb-md row">
      <i class="fas fa-arrow-right fa-lg"></i>
      <h4>přihlášení</h4>
    </div>
    <q-separator class="q-mx-md" />

    <div class="q-px-md q-py-sm" style="max-width: 400px">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          autofocus
          outlined
          dense
          bottom-slots
          v-model="name"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Prosím, napište vaše jméno'
          ]"
        >
          <template v-slot:before>
            <div class="q-field text-black">Jméno:</div>
          </template>
        </q-input>

        <q-input
          outlined
          dense
          bottom-slots
          v-model="prijmeni"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Prosím, napište vaše příjmení'
          ]"
        >
          <template v-slot:before>
            <div class="q-field text-black">Přjmení:</div>
          </template>
        </q-input>

        <q-input
          class="q-mt-none"
          outlined
          dense
          type="email"
          v-model="email"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Prosím, napište váš email'
          ]"
        >
          <template v-slot:before>
            <div class="q-field text-black q-pr-xs">E-mail:</div>
          </template>
        </q-input>

        <q-input
          outlined
          dense
          bottom-slots
          type="tel"
          v-model="tel"
          lazy-rules
          :rules="[
            val => (val && val.length === 9) || 'Prosím, napište telefonní číslo'
          ]"
        >
          <template v-slot:before>
            <div class="q-field text-black">Telefon:</div>
          </template>
        </q-input>

        <q-input
          outlined
          dense
          bottom-slots
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
          <template v-slot:before>
            <div class="q-field text-black">Heslo</div>
          </template>
        </q-input>

        <div class="q-ml-xl">
          <q-btn class="q-ml-xl" label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-scroll-area>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      prijmeni: null,
      email: null,
      tel: null,

      password: '',
      isPwd: true,
    };
  },

  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted"
      });
    }
  }
};
</script>

<style lang="stylus" scoped>

h4
  margin: 0 auto;
  color: #474B4F;

i
  margin: auto 0;
  color: #474B4F;

.q-separator--horizontal
  width: 94%;
</style>
