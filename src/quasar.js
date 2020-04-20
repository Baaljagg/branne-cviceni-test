import Vue from "vue";

import "./styles/quasar.styl";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import { 
  Quasar, 
  QToolbar,
  QBtn,
  QCard,
  QCardSection,
  QCardActions,
  QDate,
  QForm,
  QDrawer
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QToolbar,
    QBtn,
    QDate,
    QCard,
    QCardSection,
    QCardActions,
    QForm,
    QDrawer
  },
  directives: {
    /* not needed if importStrategy is not 'manual' */
  },
  plugins: {}
});
