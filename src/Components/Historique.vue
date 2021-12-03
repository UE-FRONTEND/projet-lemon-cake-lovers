<template>
  <ul>
    <li v-for="(x,index) in getAll" v-bind:key="x">
      <p>Numéro de partie : {{ index }}</p>
      <p>Nombre d'essais => {{x.essais}}</p>
      <p>Durée => {{x.minute}}:{{x.seconde}}</p>
      <p v-if="x.result === 0">Résultat de la partie => DEFEAT</p>
      <p v-if="x.result === 1">Résultat de la partie => VICTORY</p>
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
    ...mapGetters(["getAll"])
  }
}
</script>


<style scoped>
</style>