<template>
  <!--Creation de la grille-->
  <ul class="item-list" :style="gridStyle">
    <!-- Création du premier élément de la grille contenant les stats général -->
    <div class="itemRed">
    <p> Moyenne de temps : {{meanTps}}</p>
    <p> Moyenne tentative : {{meanTent}} </p>
    <p> Pourcentage Victoire : {{victoryPerCent}}%</p>
    </div>
    <!-- Création des autres éléments de la grille-->
    <div v-for="(x, index) in getAll" v-bind:key="x" class="item">
      <p> ID : {{index}}</p>
      <p>Nombre de tentatives : {{x.essais}}</p>
      <p>Temps de jeu :
        <!-- Condition dans le cas ou minute ou seconde < 10 pour ajouter un 0 pour l'esthétique -->
        <span v-if="x.minute < 10">0</span>
        {{x.minute}}:
      <template v-if="x.seconde < 10">0</template>
        {{x.seconde}}
      </p>
      <!-- Resultat partie -->
      <p>Résultat de la partie :
      <template v-if="x.result === 1">Victoire</template>
      <template v-else>Défaite</template>
      </p>
    </div>
  </ul>
  <!-- Bouton retour à l'accueil -->
  <router-link to="/">
    <input class="button" id="HomeBack" type="button" value="Retour à l'accueil">
  </router-link>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name : 'Historique',
  computed : {
    //Récupération des fonctions du store
    ...mapGetters(["getAll"]),
    ...mapGetters(["count"]),

    //return le template de la grille
    gridStyle() {
      return {
        gridTemplateColumns: `repeat(4, 15em )`
      }
    },
    //Calcul la moyenne de temps grâce a getAll
    meanTps : function(){
      let array = this.getAll
      let sum = 0 ;
      //Sum : somme des secondes
      for(let i in array){
        sum += array[i].seconde;
        if(array[i].minute > 0){
          sum+= array[i].minute * 60
        }
      }
      //Conversion de sum en minute seconde
      let meanInSec = Math.floor(sum / this.count);
      let minuteOut = Math.floor((meanInSec / 60));
      let secondOut = meanInSec - (minuteOut*60);

      return minuteOut + ":"+ (secondOut < 10 ? '0' : '') + secondOut;

    },
    //calcul la moyenne des tentatives grâce a getAll
    meanTent : function (){
      let array = this.getAll
      let sum = 0 ;
      for(let i in array) {
        sum += array[i].essais;
      }
      return Math.floor(sum / this.count);
    },

    //calcul la moyenne des victoire en % grâce a getAll
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
.button{
  text-align: center;
  position: absolute;
  left: 37.5%;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 250px;
  height: 70px;
  border-radius: 3px;
  color: #fff;
  background: #027ad6;
  font: 700 18px sans-serif;
  box-shadow:
      0 1px 2px rgba(0,0,0,0.07),
      0 2px 4px rgba(0,0,0,0.07),
      0 4px 8px rgba(0,0,0,0.07),
      0 8px 16px rgba(0,0,0,0.07),
      0 16px 32px rgba(0,0,0,0.07),
      0 32px 64px rgba(0,0,0,0.07);
}

.item-list {
  display: grid;
  grid-gap: 1em;
}

.item {
  background-color: lightblue;
  padding: 2em;
}
.itemRed {
  background-color: coral;
  padding: 2em;
}

body {
  background: #20262E;
  padding: 20px;
  font-family: Helvetica;
}

ul {
  list-style-type: none;
}


</style>