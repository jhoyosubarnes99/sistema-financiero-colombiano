import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#079329',
        secondary: '#EA812A',
        accent: '#271302',
        error: '#FF5252',
        info: '#2196F3',
        success: '#B5AB8D',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'fas',
  },
});
