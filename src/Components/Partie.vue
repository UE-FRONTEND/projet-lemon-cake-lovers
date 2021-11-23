<template>
  {{ minute }} : {{second}}
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      minute : 10,
      second : 0,
      token : undefined,
      res : undefined
    }
  },
  //Appeler à l'affichage de la page
  async mounted() {
    //Requete
    await axios
        .get("https://vuejs-rest-challenge.herokuapp.com/token")
        .then( (response) => {
          this.res = response.data;
          //Debug
          //console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
        this.token = this.res.token;
    //Timer
    await this.$nextTick(function () {

      window.setInterval(() => {
        if (this.second > 0) {
          this.second--;
        } else if (this.second === 0 && this.minute > 0) {
          this.second = 59;
          this.minute--;
        } else {
          // Timer hits 0 do what you want to do here.
        }
      }, 1000);
    })
  },
}
</script>