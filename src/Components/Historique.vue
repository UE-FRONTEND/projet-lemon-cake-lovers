<template>
  <ul>
    <li v-for="x in getAll" v-bind:key="x">
      <p>Nombre d'essais => {{x.essais}}</p>
      <p>Durée => {{x.minute}}:{{x.seconde}}</p>
      <p>Résultat de la partie => {{x.result}}</p>
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