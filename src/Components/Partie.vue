<template>
  <input id ="GuessText" type="text"/>
  <br/>
  <input type="button" value="Submit" @click="submit"/>
  <p>{{ minute }} : {{second}}</p>
</template>



<script>
<<<<<<< HEAD

import axios from "axios";

=======
import axios from "axios";
>>>>>>> d7fedff2d3fce09b0daf848897008fe0a7e5ed58
export default {
  data() {
    return {
      minute : 10,
      second : 0,
<<<<<<< HEAD
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
=======
      token : this.getToken(),
      guess : undefined
    }
  },
  mounted : function() {
    this.$nextTick(function () {
>>>>>>> d7fedff2d3fce09b0daf848897008fe0a7e5ed58

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
  methods : {
    getToken : async function ()  {
      let res;
      await axios
          .get("https://vuejs-rest-challenge.herokuapp.com/token")
          .then( (response) => {
            res = response.data;
            //Debug
            //console.log(response.data);
          })
          .catch(function(error) {
            window.console.log(error);
          });
      this.token = res.token;
      //window.console.log(this.token);
    },
    submit : async function () {
      this.guess = parseInt(document.getElementById("GuessText").value);
      window.console.log(this.guess);
      let answer;
      let response1 = axios.post("https://vuejs-rest-challenge.herokuapp.com/try",
                 {token : this.token , guess : this.guess});
      window.console.log(response1);
    }
  }
}
</script>