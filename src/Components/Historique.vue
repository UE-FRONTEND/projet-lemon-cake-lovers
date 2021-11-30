<template>
  <ul>
    <li v-for="x in getAll" v-bind:key="x">
      <p>Moyenne de temps : {{mean}}</p>
      <p>Nombre d'essais => {{x.essais}}</p>
      <p>Durée => {{x.minute}}:{{x.seconde}}</p>
      <p>Résultat de la partie => {{x.result}}</p>
      <p> {{mean}}</p>
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
    mean : function(){
      let array = this.getAll
      let length = this.count - 1;
      let sum = 0 ;
      for(let i in array){
        sum += array[i].seconde;
        if(array[i].minute > 0){
          sum+= array[i].minute * 60
        }
      }

      console.log(sum, this.count)
      let meanInSec = Math.floor(sum / this.count);
      let minuteOut = Math.floor((meanInSec / 60));
      let secondOut = meanInSec - (minuteOut*60);

      return minuteOut + ":"+ (secondOut < 10 ? '0' : '') + secondOut;

    }
  }
}
</script>


<style scoped>
</style>