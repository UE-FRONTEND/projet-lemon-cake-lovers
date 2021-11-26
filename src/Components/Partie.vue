<template>
  <h1> {{minute}} :
    <template v-if="this.second < 10">
      0
    </template>
    {{second}}
  </h1>
  <input id ="GuessText" type="text"/>
  <br/>
  <input type="button" value="Submit" @click="submit"/>
  <br/>
  <router-link to="/Defeat" tag="button">
    <input type="button" value="Surrender" @click="surrender"/>
  </router-link>
  <p>{{txt}}</p>
</template>



<script>

import axios from "axios";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      minute : 10,
      second : 0,
      token : undefined,
      res : undefined,
      essais : 0,
      txt : "Tentez votre chance !",
      intervalFunc : undefined, //contain the interval for the timer
    }
  },
  //Called at page render
  mounted : function() {
    //Init token for request
    this.getToken();
    this.$nextTick( () => this.tickFunc() ); //Leave the function otherwise js will use the void return of tickfunc
  },
  methods : {

    /*...mapMutations(["addNbTries"]),
    ...mapMutations(["addDuration"]),
    ...mapMutations(["addResult"]),**/
    ...mapMutations(["addAll"]),

    //Decrease the timer and set intervalFunc
    tickFunc: function(){
      this.intervalFunc = window.setInterval(() => {
        if (this.second > 0) {
          this.second--;
        } else if (this.second === 0 && this.minute > 0) {
          this.second = 59;
          this.minute--;

        } else {
          // Timer hits 0 do what you want to do here.
          this.surrender();
        }
      }, 1000);
    },

    getToken : async function() {
      //Get Request
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
    },

    submit : async function () {
      //Post request
      this.guess = parseInt(document.getElementById("GuessText").value);
      let response1 = axios.post("https://vuejs-rest-challenge.herokuapp.com/try",
                 {token : this.token , guess : this.guess});
      let ret_val = (await response1).data.code; //response return a tab with field code
      //Debug
      //window.console.log(this.guess);
      //window.console.log(ret_val);

      //Handling req value
      if(ret_val === 1){
        this.txt = "C'est plus !";
        this.essais += 1;
      }
      else if(ret_val === 0){
        this.txt = "Bravo !";
        let duration = {
          minute : 10 - this.minute,
          second : 60 - this.second
        };

        /*this.addDuration(duration);
        this.addResult(this.res);
        this.addNbTries(this.essais);**/
        this.addAll(this.essais, duration, this.res)
        clearInterval(this.intervalFunc);
      }
      else if(ret_val === -1){
        this.txt = "C'est moins !";
        this.essais += 1;
      }
      document.getElementById("GuessText").value ="";
    },

    surrender : function () {
      let duration = {
        minute : 10 - this.minute,
        second : 60 - this.second
      };
      console.log(this.minute);
      this.addAll(this.essais, duration, this.res);
      /*this.addDuration(duration);
      this.addResult(this.res);
      console.log(this.essais);
      this.addNbTries(this.essais);**/
    },
  }
}
</script>

<style scoped>

h1 {
  text-align:center;
}
</style>
