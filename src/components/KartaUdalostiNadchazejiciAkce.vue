<template>
  <div class="karta-udalosti-nadchazejici-akce">
    <q-card class="my-card ">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-subtitle2 row justify-between">
              <div>
                26. 10. 2020
              </div>
              <div class="text-positive">
                Volná místa: 10/12
              </div>
            </div>
            <div class="text-h6">CQB</div>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="q-py-none">
        - Taktika v uzavřených prostorech
      </q-card-section>

      <q-card-actions class="q-pa-md flex-end">
        <BtnPrihlasit />
      </q-card-actions>
    </q-card>
  </div>
</template>


<script>
import BtnPrihlasit from "@/components/BtnPrihlasit.vue"

export default {
  components: {
    BtnPrihlasit
  }
}
</script>

<style lang="stylus" scoped>
.karta-udalosti-nadchazejici-akce
  .flex-end
    justify-content flex-end;

</style>
