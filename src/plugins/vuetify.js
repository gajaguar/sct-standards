import Vue from 'vue'
import Vuetify, {
  VAlert,
  VApp,
  VContainer,
  VRow,
  VCol,
  VCard,
  VTextField,
  VContent,
  VAppBar,
  VDataTable,
  VImg,
  VToolbar
} from 'vuetify/lib'
import es from 'vuetify/es5/locale/es'

Vue.use(Vuetify, {
  components: {
    VAlert,
    VApp,
    VContainer,
    VRow,
    VCol,
    VCard,
    VTextField,
    VContent,
    VAppBar,
    VDataTable,
    VImg,
    VToolbar
  }
})

export default new Vuetify({
  lang: {
    locales: { es },
    current: 'es'
  },
  icons: {
    iconfont: 'md'
  }
})
