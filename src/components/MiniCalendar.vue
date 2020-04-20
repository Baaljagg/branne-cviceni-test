<template>
  <div>
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
</template>

<script>
export default {
  data() {
    return {
    //   date: new Date().toLocaleDateString("en-GB") a pro q-date model="DD/MM/YYYY"
    // F-c new Date() nefunguje s funkcema pro events a eventsFN
      date: "2020/02/02",
      events: [
        "2020/02/03",
        "2020/02/08",
        "2020/02/15",
        "2020/02/18",
        "2020/02/23"
      ],
      myLocale: {
        /* starting with Sunday */
        days: "Neděle_Pondělí_Úterý_Středa_Čtvrtek_Pátek_Sobota".split("_"),
        daysShort: "Ne_Po_ÚT_St_Čt_Pá_So".split("_"),
        months: "Leden_Únor_Březen_Duben_Květen_Červen_Červenec_Srpen_Září_Říjen_Listopad_Prosinec".split(
          "_"
        ),
        monthsShort: "Led_Únor_Břez_Dub_Květ_Čer_Červ_Srp_Zář_Říj_List_Pros".split(
          "_"
        ),
        firstDayOfWeek: 1
      }
    };
  },

  methods: {
    eventsFn(date) {
      if (
        date === "2020/02/03" ||
        date === "2020/02/08" ||
        date === "2020/02/15" ||
        date === "2020/02/18" ||
        date === "2020/02/23"
      ) {
        return true;
      }
      return false;
    }
  }
};
</script>
