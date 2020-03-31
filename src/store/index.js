import Vuex from 'vuex'
import Vue from 'vue'
import worldstats from './modules/worldstats'

Vue.use(Vuex)

export default new Vuex.Store({
    modules : {
        worldstats
    }
})