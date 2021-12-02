<template>
  <ul>
    <li v-for="(x, index) in getAll" v-bind:key="x">
      <p> Moyenne de temps : {{meanTps}}</p>
      <p> Moyenne tentative : {{meanTent}} </p>
      <p> Pourcentage Victoire : {{victoryPerCent}}%</p>
      <p> ID : {{index}}</p>
      <p>Nombre de tentatives : {{x.essais}}</p>
      <p>Temps de jeu :
        <span v-if="x.minute < 10">0</span>
        {{x.minute}}:
      <template v-if="x.seconde < 10">0</template>
        {{x.seconde}}
      </p>
      <p>Résultat de la partie :</p>
      <template v-if="x.result === 1">Victoire</template>
      <template v-else>Défaite</template>
    </li>
  </ul>
  <router-link to="/">
    <input type="button" value="Retour à l'accueil">
  </router-link>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name : 'Historique',
  computed : {
    ...mapGetters(["getAll"]),
    ...mapGetters(["count"]),
    meanTps : function(){
      let array = this.getAll
      let sum = 0 ;
      for(let i in array){
        sum += array[i].seconde;
        if(array[i].minute > 0){
          sum+= array[i].minute * 60
        }
      }

      let meanInSec = Math.floor(sum / this.count);
      let minuteOut = Math.floor((meanInSec / 60));
      let secondOut = meanInSec - (minuteOut*60);

      return minuteOut + ":"+ (secondOut < 10 ? '0' : '') + secondOut;

    },

    meanTent : function (){
      let array = this.getAll
      let sum = 0 ;
      for(let i in array) {
        sum += array[i].essais;
      }
      return Math.floor(sum / this.count);
    },

    victoryPerCent : function(){
      let array = this.getAll
      let sum = 0 ;
      for(let i in array) {
        sum += array[i].result;
      }
      return (sum / this.count) * 100;
    }
  }
}
</script>


<style scoped>


</style>