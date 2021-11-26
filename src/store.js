import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            essais: [],  //contiendra le nombre d'essais de chaque partie de l'historique
            duree: [],
            result : []
        }
    },
    getters: {
        count(state) {
            return state.essais.length;
        },
        getLastNbTries(state) {
            return state.essais[state.essais.length - 1];
        },
        getAllTries(state) {
            return state.essais;
        },
        getAllDurations(state) {
            return state.duree;
        },
        getAllResults(state) {
            return state.result;
        }
    },

    mutations: {
        addNbTries(state,value) {
            state.essais.push(value);
        },
        addDuration(state,value) {
            state.duree.push(value);
        },
        addResult(state,value) {
            state.result.push(value)
        }
    }
})
