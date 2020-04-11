<template>
  <div class="karta-udalosti-nadchazejici-akce q-pb-md">
    <q-card class="my-card row">
      <q-card-section class="col-2 fitting-content">
          <div class="text-subtitle2 text-center q-pt-xs">
            <div>
              8:00 - 18:00
            </div>
            <h6 class="q-py-xs">
              26. 10. 2020
            </h6>
            <div>
              Praha
            </div>
          </div>
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="col-9">
        <div class="text-subtitle2">
          <h6>
            CQB - Taktika v uzavřených prostorech
          </h6>
        </div>
        <div class="q-py-sm text-medium">
            Tento kurz je zaměřen na výuku základních
             a pokročilejších postupů taktické přípravy v objektech s krátkou a dlouhou zbraní v jednotlivci, dvojici, čtveřici a týmu.
          </div>
        <div>
          Střelecké či AS brýle, airsoftová krátká či dlouhá zbraň,
           taktické oblečení a kdo má tak chániče, rukavice, čepice, šátek a pod., pití a jídlo
        </div>
      </q-card-section>

      <q-card-actions class="col flex-column q-pa-md justify-between">
         <div class="text-positive q-pb-md text-center">
          Volná místa: 10/12
        </div>
        <BtnPrihlasit />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import BtnPrihlasit from "@/components/BtnPrihlasit.vue";

export default {
  components: {
    BtnPrihlasit
  }
};
</script>

<style lang="stylus" scoped>
.karta-udalosti-nadchazejici-akce
  h6
    margin: 0 auto;
  .flex-column
      flex-direction: column;

  .fitting-content
    inline-size: fit-content;    
</style>
