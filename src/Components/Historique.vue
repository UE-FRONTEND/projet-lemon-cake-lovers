<template>
  <span>
Tps moy : {{this.getAllDurations.minute}}
</span>
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