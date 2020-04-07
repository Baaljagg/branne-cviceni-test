<template>
  <div class="kontakty">
    <q-card class="my-card">
      <q-card-section horizontal>
        <q-card-section class="col-6">
          <div class="text-h6 q-mt-sm q-mb-xs text-center">Kontakty</div>
          <div class="row q-mt-md">
            <div class="col-6 text-right q-pr-lg">Tel:</div>
            <div class="col-6 text-left text-bold q-pl-sm">
              +420 721 242 558
            </div>
          </div>
          <div class="row q-mt-md">
            <div class="col-6  text-right q-pr-lg">Email:</div>
            <div class="col-6 text-left text-bold q-pl-sm zalomeni">
              info@brannecviceni.cz
            </div>
          </div>
          <div class="row q-mt-md">
            <div class="col-6  text-right q-pr-lg">Facebook:</div>
            <div class="col-6 text-left text-bold q-pl-sm fb">
              <a
                href="https://www.facebook.com/Brann%C3%A9-cvi%C4%8Den%C3%AD-103488061060096/"
              >
                <i class="fab fa-facebook-square"></i> Branne cvičení
              </a>
            </div>
          </div>
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-6 napiste-nam-center">
          <div class="text-h6 q-mt-sm q-mb-xs">Napište Nám</div>

          <div class="q-px-md q-py-sm" style="max-width: 400px">
            <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
              <q-input
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
                class="q-mt-none"
                outlined
                dense
                v-model="text"
                type="textarea"
              >
                <template v-slot:before>
                  <div class="q-field text-black">Zpráva:</div>
                </template>
              </q-input>

              <div class="q-ml-xl">
                <q-btn
                  class="q-ml-xl"
                  label="Submit"
                  type="submit"
                  color="primary"
                />
                <q-btn
                  label="Reset"
                  type="reset"
                  color="primary"
                  flat
                  class="q-ml-sm"
                />
              </div>
            </q-form>
          </div>
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      text: '',
      accept: false
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first"
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted"
        });
      }
    },

    onReset() {
      this.name = null;
      this.email = null;
      this.accept = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.kontakty
    .fb
        color: royalblue;

    .zalomeni
            overflow-wrap: break-word;

    a
        text-decoration: none;

    .napiste-nam-center
      text-align: -webkit-center;
</style>
