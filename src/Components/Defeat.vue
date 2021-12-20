<template>
  <!--Division contenant l'ensemble des statistiques de la partie-->
  <h1 class="title">Défaite &#128514 &#128073 U</h1>
  <h2 class="subtitle">Statistique de la partie</h2>
  <!-- Nombre d'essais de la partie-->
  <strong class="essais" >Nombre d'essais :</strong>
  <p class="nombre">{{ getLastNbTries }}</p>
  <br/>
  <!--Gestion des changements de pages : Retour à la page d'accueil-->
  <router-link to="/" tag="b-button">
    <button id="HomeBack" class="button">Retour à l'accueil</button>
  </router-link>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name : 'Defeat',
  //Récupération des informations stockées via Vuex
  computed : {
    ...mapGetters(["getLastNbTries"]),
  }
}
</script>

<style scoped>

.title {
  position : absolute;
  left : 600px;
}

.subtitle {
  position : absolute;
  top : 100px;
}

.essais {
  size: 20pt;
  font-size : 20px;
  display: inline-block;
  position : absolute;
  top : 200px;
}
.nombre {
  position : absolute;
  top : 190px;
  left : 230px;
  padding: 10px;
  background: papayawhip;
  text-align: center;
  display: inline-block;
  text-align: center;
  color: palevioletred;
}
.button {
  position : absolute;
  top : 300px;
  border: none;
  font-weight: bold ;
  color: black;
  padding: 10px 20px;
  text-align: center;
  text-decoration-color: black;
  display: inline-block;
  --g-red: #d04b36;
  --g-orange: #e36511;
  --g-yellow: #ffba00;
  --g-green: #00b180;
  --g-blue: #147aab;
  --g-indigo: #675997;
  background-image: linear-gradient(
      var(--g-red) 0%,
      var(--g-red) 16.6666%,
      var(--g-orange) 16.6666%,
      var(--g-orange) 33.333%,
      var(--g-yellow) 33.333%,
      var(--g-yellow) 50%,
      var(--g-green) 50%,
      var(--g-green) 66.6666%,
      var(--g-blue) 66.6666%,
      var(--g-blue) 83.3333%,
      var(--g-indigo) 83.3333%,
      var(--g-indigo) 100%
  );
  font-size: 16px;
}
</style>