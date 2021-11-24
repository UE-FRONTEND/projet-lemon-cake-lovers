<template>
  <h1>{{ minute }} : {{second}}</h1>
  <input id ="GuessText" type="text"/>
  <br/>
  <input type="button" value="Submit" @click="submit"/>
  <p>{{txt}}</p>
</template>



<script>

import axios from "axios";

export default {
  data() {
    return {
      minute : 10,
      second : 0,
      token : undefined,
      res : undefined,
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
      window.console.log(this.guess);
      window.console.log(ret_val);

      //Handling req value

      if(ret_val === 1){
        this.txt = "C'est plus !";

      }else if(ret_val === 0){
        this.txt = "Bravo !";
        clearInterval(this.intervalFunc);

      }else if(ret_val === -1){
        this.txt = "C'est moins !";
      }
    }
  }
}
</script>

<style scoped>

h1 {
  text-align:center;
}
</style>