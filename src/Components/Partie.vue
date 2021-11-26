<template>
<<<<<<< HEAD

  <input id ="GuessText" type="text"/>
  <br/>git lo
  <input type="button" value="Submit" @click="submit"/>
=======
  <h1>{{ minute }} : {{second}}</h1>
  <input id ="GuessText" type="text"/>
  <br/>
  <input type="button" value="Submit" @click="submit"/>
  <router-link to="/Defeat" tag="button">
    <input type="button" value="Surrender" @click="surrender"/>
  </router-link>
>>>>>>> origin/PortyTorc
  <p>{{txt}}</p>
</template>



<script>

import axios from "axios";
<<<<<<< HEAD
=======
import { mapMutations } from "vuex"
>>>>>>> origin/PortyTorc

export default {
  data() {
    return {
      minute : 10,
      second : 0,
      token : undefined,
      res : undefined,
<<<<<<< HEAD
      txt : "Tentez votre chance !",
      intervalFunc : undefined, //contain the interval for the timer
    }
  },

=======
      essais : 0,
      txt : "Tentez votre chance !",
      intervalFunc : undefined, //contain the interval for the timer

    }
  },
>>>>>>> origin/PortyTorc
  //Called at page render
  mounted : function() {
    //Init token for request
    this.getToken();
<<<<<<< HEAD

    this.$nextTick( () => this.tickFunc() ); //Leave the function otherwise js will use the void return of tickfunc
  },

  methods : {
    //Decrease the timer and set intervalFunc
=======
    this.$nextTick( () => this.tickFunc() ); //Leave the function otherwise js will use the void return of tickfunc
  },
  methods : {
    //Decrease the timer and set intervalFunc
    ...mapMutations(["addNbTries"]),
    ...mapMutations(["addDuration"]),
    ...mapMutations(["addResult"]),
>>>>>>> origin/PortyTorc
    tickFunc: function(){
      this.intervalFunc = window.setInterval(() => {
        if (this.second > 0) {
          this.second--;
<<<<<<< HEAD

        } else if (this.second === 0 && this.minute > 0) {
          this.second = 15;
          this.minute--;

        } else {
          // Timer hits 0 do what you want to do here.
        }
      }, 1000);
    },

=======
        } else if (this.second === 0 && this.minute > 0) {
          this.second = 59;
          this.minute--;
        } else {
          this.surrender();
        }
      }, 1000);
    },
>>>>>>> origin/PortyTorc
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
<<<<<<< HEAD
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
=======
          {token : this.token , guess : this.guess});
      let ret_val = (await response1).data.code; //response return a tab with field code
      //Debug
      window.console.log(this.guess);
      window.console.log(ret_val);
      //Handling req value
      if(ret_val === 1){
        this.txt = "C'est plus !";
        this.essais += 1;
      }
      else if(ret_val === 0){
        this.txt = "Bravo !";
        this.res = 0;
        let duration = {
          minutes : 10 - this.minutes,
          seconds : 60 - this.seconds
        };
        this.addDuration(duration);
        this.addResult(this.res);
        this.addNbTries(this.essais);
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
        minutes : 10 - this.minutes,
        seconds : 60 - this.seconds
      };
      this.addDuration(duration);
      this.addResult(this.res);
      this.addNbTries(this.essais);
>>>>>>> origin/PortyTorc
    }
  }
}
</script>

<style scoped>
<<<<<<< HEAD

h1 {
  text-align:center;
}
</style>
=======
h1 {
  text-align:center;
}
</style>
>>>>>>> origin/PortyTorc
