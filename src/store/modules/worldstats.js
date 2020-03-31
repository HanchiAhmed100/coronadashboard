import axios from 'axios'

const state = {
    worldstat : [],
    p_active : '',
    p_morts : '',
    p_retablie : ''
}

const getters = {
    allstats : (state) => { 
      return state.worldstat
    },
    p_active : (state) => { 
        return state.p_active
    },
    p_morts : (state) => {
        return state.p_morts
    },
    p_retablie : (state) => {
        return state.p_retablie
    }

    
}

const actions = {
    async fetchworldstats({ commit }){
        const response = await axios.get('https://corona.lmao.ninja/all')
        const all = response.data.active + response.data.recovered + response.data.deaths +response.data.cases
        const p_active =  (response.data.active / all) * 100
        const p_morts =  (response.data.deaths / all) * 100
        const p_retablie =  (response.data.recovered / all) * 100
        commit('setWorldStats' , response.data)
        commit('set_p_active',p_active)
        commit('set_p_morts',p_morts)
        commit('set_p_retablie',p_retablie)

    }

}
const mutations = {
    setWorldStats : (state , worldstat) => (state.worldstat = worldstat),
    set_p_active : (state , p_active) => (state.p_active = p_active),
    set_p_morts : (state , p_morts) => (state.p_morts = p_morts),
    set_p_retablie : (state , p_retablie) => (state.p_retablie = p_retablie)

}
export default {
    state,
    getters,
    actions,
    mutations
}