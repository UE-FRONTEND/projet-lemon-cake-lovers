<template>
    <div>
      <p>Groupe : De La Rochebrochard Amaury et Boumali Samy</p>
      <p>TPA51</p>
      <input type="button" value="Consulter historique" class="col"/>
    </div>
    <div>
      <router-link to="/Partie" tag="button">
        <input type="button" value="Démarrer"  class="col"/>
      </router-link>
      <router-view></router-view>
    </div>
</template>


<script>
import Partie from "./Partie";
export default {
  components: {Partie}
}
</script>

<style scoped>

.col{
  margin-right : 20pt;
}
</style>