<template>
    <p>Nombre d'essais : {{ getLastNbTries }}</p>
    <p>
      Temps écoule :
      <template v-if="getLastMinuteTries< 10">
      0
      </template>
      {{getLastMinuteTries}} :
      <template v-if="getLastSecondeTries < 10">
        0
      </template>
      {{getLastSecondeTries}}
    </p>

    <router-link to="/" tag="button">
      <input type="button" value="Retour à l'accueil"/>
    </router-link>
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

</style>