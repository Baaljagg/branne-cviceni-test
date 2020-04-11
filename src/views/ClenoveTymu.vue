<template>
  <div class="clenove-tymu">
    <img src="../assets/images/clenove-tymu1.png" >
    <h4>Členové týmu</h4>
    <div class="row justify-between q-px-md q-pb-lg">
      <q-card class="my-card col-6 q-mb-md">
        <img src="../assets/images/tyna1.png" >

        <q-card-section>
          <div class="text-subtitle2">koordinátorka</div>
          <div class="text-h6">Kristýna</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Moje úloha je pomoci vám s vašimi dotazy či nápady.
          Ráda vám navrhnu brannou aktivitu z našeho širokého výběru nebo vám vytvořím návrh ušitý na míru vašim potřebám.
           Vše pak zorganizuji tak, aby měla naše společná akce hladký průběh a aby si to všichni moc užili.
        </q-card-section>
      </q-card>

      <q-card class="my-card col-6 q-mb-md">
        <img src="../assets/images/anca1.png" />

        <q-card-section>
          <div class="text-subtitle2">ambasadorka</div>
          <div class="text-h6">Anča</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Jsem tu abych reprezentovala myšlenku našeho projektu a pomohla ji šířit tam, kde nás ještě neznají. 
           Mám ráda naši zemi a cítím svůj díl spoluzodpovědnosti za budování bezpečného prostředí pro další generace a i pro mou fenku Ginu, která mi se vším pomáhá:)
        </q-card-section>
      </q-card>
    </div>
    <Kontakty class="q-mb-lg"/>
  </div>
</template>

<script>
import Kontakty from "@/components/Kontakty.vue";

export default {
  name: "clenove-tymu",
  components: {
    Kontakty
  }
};
</script>

<style lang="stylus" scoped>
.clenove-tymu

  .my-card
    width: 100%;
    max-width: 567px;

</style>
