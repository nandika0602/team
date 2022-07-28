import Vue from 'vue'
import Vuex from 'vuex'

import playground from './modules/playground'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    playground
  }
})