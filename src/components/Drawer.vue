<template>
  <q-scroll-area class="fit">
    <div class="q-px-lg q-pt-lg q-pb-md row">
      <i class="fas fa-arrow-right fa-lg"></i>
      <h4>přihlášení</h4>
    </div>
    <q-separator class="q-mx-md" />

    <div class="q-px-md q-pt-sm centering">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          autofocus
          outlined
          dense
          label="Jméno"
          v-model="name"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Prosím, napište vaše jméno'
          ]"
        />

        <q-input
          outlined
          dense
          label="Příjmení"
          v-model="prijmeni"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Prosím, napište vaše příjmení'
          ]"
        />

        <q-input
          class="q-mt-none"
          outlined
          dense
          label="E-mail"
          type="email"
          v-model="email"
          lazy-rules
          :rules="[
            val => (val && val.length > 0) || 'Prosím, napište váš email'
          ]"
        />

        <q-input
          outlined
          dense
          label="Telefonní číslo"
          type="tel"
          v-model="tel"
          lazy-rules
          :rules="[
            val =>
              (val && val.length === 9) || 'Prosím, napište telefonní číslo'
          ]"
        />

        <q-input
          outlined
          dense
          label="heslo"
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
        </q-input>

        <div class="centeringBtn q-py-md">
          <q-btn
            class="gradientBtnGreen"
            label="Registrovat"
            type="submit"
          />
        </div>
      </q-form>
    </div>
    <q-separator class="q-mx-md q-mb-sm" />
     <div class="q-py-lg row justify-center">
          <q-btn
            class="gradientBtnBlue"
            icon="fab fa-facebook-f"
            label="Login with Facebook"
          />
     </div>
     <div class="q-pb-lg row justify-center" >

          <q-btn
            class="gradientBtnRed"
            icon="fab fa-google"
            label="Login with Google"
          />
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

      password: "",
      isPwd: true
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

.centering
  margin: 16px auto;
  max-width: 400px;

.q-header .q-toolbar .q-btn
    border-radius: 4px;
    height: auto;

.centeringBtn
  text-align-last: center;

.q-btn .q-icon, .q-btn .q-spinner {
    font-size: 1em !important;
}
</style>
