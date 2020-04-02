<template>
  <div class="home">
    <div>
      <img src="../assets/images/home1.jpg" />
    </div>
    <div class="row">
      <div class="col-4">
        <h5>O nás</h5>
        <q-card class="my-card q-mt-md">
          <q-card-section>
            <div class="text-h6">Etický kodex</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Dodržování právního řádu a zákonů České Republiky Apolitičnost a
            nepřítomnost jakýchkoliv ideologií Šíření mravních zásad a
            dodržování základních pravidel slušného chování Respektování
            lidských práv Odmítnutí jakýchkoliv forem extremismu
          </q-card-section>
        </q-card>
        <q-card class="my-card q-mt-md">
          <q-card-section>
            <div class="text-h6">Etický kodex</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Dodržování právního řádu a zákonů České Republiky Apolitičnost a
            nepřítomnost jakýchkoliv ideologií Šíření mravních zásad a
            dodržování základních pravidel slušného chování Respektování
            lidských práv Odmítnutí jakýchkoliv forem extremismu
          </q-card-section>
        </q-card>
      </div>

      <div class="col-4">
        <h5>Nadcházející akce</h5>
        <KartaUdalostiHome class="q-mt-md"/>
        <KartaUdalostiHome class="q-mt-md" />
        <KartaUdalostiHome class="q-mt-md" />
      </div>

      <div class="col-4">
        <h5>Kalendář</h5>
        <MiniCalendar class="q-mt-md" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MiniCalendar from "@/components/MiniCalendar.vue";
import KartaUdalostiHome from "@/components/KartaUdalostiHome.vue";

export default {
  name: "home",
  components: {
    MiniCalendar,
    KartaUdalostiHome
  }
};
</script>
<style lang="stylus" scoped>
.home
    img
      margin: 0 auto;
    .col-6, .col-4
      padding: 12px;
    h5
      margin-bottom: 0;
    .mb-24
      margin-bottom: 24px;
</style>
