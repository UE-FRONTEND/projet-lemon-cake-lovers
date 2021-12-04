<template>
  <div>
    <h1 class="title">Victoire &#128513</h1>
    <h2 class="subtitle">Statistiques de la partie</h2>
    <p class="essais"> Nombre d'essais :</p>
    <p class="nombre"> {{ getLastNbTries }}</p>
    <div class="time">
        <p style="display: inline-block">Temps écoulé : &nbsp</p>
        <div class="subtime">
            [
            <template v-if="getLastMinuteTries< 10">
            <p style="display: inline-block"> 0</p>
            </template>

          <p style="display: inline-block">{{getLastMinuteTries}} :&nbsp</p>
            <template v-if="getLastSecondeTries < 10">
              <p style="display: inline-block">0</p>
            </template>
          <p style="display: inline-block">{{getLastSecondeTries}} ]</p>
        </div>
    </div>
    <router-link to="/" tag="button">
      <button class="button">Retour à l'accueil</button>
    </router-link>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Victory",
  computed : {
    ...mapGetters(["getLastNbTries"]),
    ...mapGetters(["getLastMinuteTries"]),
    ...mapGetters(["getLastSecondeTries"]),
  }
}
</script>

<style scoped>

.title {
  position : absolute;
  left : 600px;
}

.time {
  display: inline-block;
  position: absolute;
  top : 170px;
  font-size : 20px;
}

.subtime{
  display: inline-block;
  padding-bottom: 3pt;
  background: papayawhip;
  text-align: center;
  color: palevioletred;
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
  top : 240px;
}

.nombre {
  position : absolute;
  top : 230px;
  left : 230px;
  padding: 10px;
  background: papayawhip;
  text-align: center;
  display: inline-block;
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