import {createStore} from 'vuex'

export const store = createStore({
    state() {
        return {
            //contiendra le nombre d'essais de chaque partie de l'historique
            allData: [],
        }
    },
    getters: {
        count(state) {
            return state.allData.length;
        },
        getAll(state) {
            return state.allData;
        },
        getLastNbTries(state) {
            return state.allData[state.allData.length - 1 ].essais;
        },
    },
    mutations: {
        addAll(state, object){
            state.allData.push(object);
            console.log(object);
        },
    }
})
