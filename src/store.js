import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            essais: [],  //contiendra le nombre d'essais de chaque partie de l'historique
        }
    },
    getters: {
        count(state) {
            return state.essais.length;
        },
        getLastDefeat(state) {
            return state.essais[state.essais.length - 1];
        }},
    mutations: {
        addFail(state,value) {
            state.essais.push(value);
        }
    }
})
