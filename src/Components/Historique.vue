<template>
  <ul>
    <li v-for="x in getAll" v-bind:key="x">
  </ul>
</template>

<script>

import { mapGetters } from "vuex";
export default {
  name : 'Historique',
  computed : {
    ...mapGetters(["getAllTries"]),
    ...mapGetters(["getAllDurations"]),
    ...mapGetters(["getAllResults"]),
  }
}
</script>


<style scoped>
</style>