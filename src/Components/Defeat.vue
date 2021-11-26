<template>
  <p>Nombre d'essais : {{ getLastNbTries }}</p>
  <router-link to="/" tag="button">
    <input type="button" value="Retour à l'accueil"/>
  </router-link>
</template>

<script>

import Result from "./Partie.vue"
import { mapGetters } from "vuex";

export default {
  name : 'Defeat',
  computed : {
    ...mapGetters(["getLastNbTries"]),
  }
}
</script>

<style scoped>
</style>