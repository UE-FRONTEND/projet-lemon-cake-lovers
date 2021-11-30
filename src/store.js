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
        getLastNbTries(state) {
            return state.allData[state.allData.length - 1 ].essais;
        },
        getAllTries(state) {
            return state.allData;
        },
        getAllDurations(state) {
            return state.allData[state.allData.length - 1 ].duree;
        },
        getAllResults(state) {
            return state.allData[state.allData.length - 1 ].result;
        }
    },

    mutations: {
        addAll(state, essais, duree, result){
            state.allData.push({
                essais: essais,
                duree : duree,
                result : result,
            });
            console.log(state.allData[0]);
        },
        /*addNbTries(state,value) {
            state.essais.push(value);
        },
        addDuration(state,value) {
            state.duree.push(value);
        },
        addResult(state,value) {
            state.result.push(value)
        }**/
    }
})
