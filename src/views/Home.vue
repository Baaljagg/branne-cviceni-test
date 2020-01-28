<template>
  <div class="home">
    <div>
      <img src="../assets/images/home1.jpg" />
    </div>
    <div class="row">
      <div class="col-8">
        <div class="row">
          <div class="col-6">
            <h5>O nás</h5>
          </div>
          <div class="col-6">
            <h5>Nadcházející akce</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
             <q-card class="my-card">
              <q-card-section>
                <div class="text-h6">Etický kodex</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Dodržování právního řádu a zákonů České Republiky
                Apolitičnost a nepřítomnost jakýchkoliv ideologií
                Šíření mravních zásad a dodržování základních pravidel slušného chování
                Respektování lidských práv
                Odmítnutí jakýchkoliv forem extremismu
              </q-card-section>
            </q-card>
          </div>
          <div class="col-6">
            <h5>Nadcházející akce</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <q-card class="my-card">
              <q-card-section>
                <div class="text-h6">Etický kodex</div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                Dodržování právního řádu a zákonů České Republiky
                Apolitičnost a nepřítomnost jakýchkoliv ideologií
                Šíření mravních zásad a dodržování základních pravidel slušného chování
                Respektování lidských práv
                Odmítnutí jakýchkoliv forem extremismu
              </q-card-section>
            </q-card>
          </div>
          <div class="col-6">
            <div class="row">
                <div >Nadcházející akce</div>
              </div>
            <div class="row">
              <div >Nadcházející akce</div>
            </div>
        </div>
        </div>
      </div>
      <div class="col-4">
        <div class="row">
         <h5>Kalendář</h5>
       </div>
        <div class="row">
           <div class="q-gutter-md margin-calendar">
            <q-date
              v-model="date"
              today-btn
              color="primary"
              :locale="myLocale"
              :events="events"
              :event-color="(date) => date[9] % 2 === 0 ? 'teal' : 'orange'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      date: '2019/02/01',
      events: [ '2019/02/01', '2019/02/05', '2019/02/06', '2019/02/09', '2019/02/23' ],
       myLocale: {
        /* starting with Sunday */
        days: 'Neděle_Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota'.split('_'),
        daysShort: 'Ne_Po_ÚT_St_Čt_Pá_So'.split('_'),
        months: 'Leden_Únor_Březen_Duben_Květen_Červen_Červenec_Srpen_Září_Říjen_Listopad_Prosinec'.split('_'),
        monthsShort: 'Led_Únor_Břez_Dub_Květ_Čer_Červ_Srp_Zář_Říj_List_Pros'.split('_'),
        firstDayOfWeek: 1
      }
    }
  },

  methods: {
    eventsFn(date) {
      if (date === '2019/02/01' ||
        date === '2019/02/05' ||
        date === '2019/02/06' ||
        date === '2019/02/09' ||
        date === '2019/02/23') {
        return true
      }
      return false
    }
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
 
    .margin-calendar
      padding-top: 24px;  
</style>
