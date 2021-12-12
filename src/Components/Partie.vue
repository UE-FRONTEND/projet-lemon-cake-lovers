<template>
  <h1 class="timer"> &#128337 {{minute}} :
    <template v-if="this.second < 10">
      0
    </template>
    {{second}} &#128337
  </h1>
  <input id ="GuessText" type="text" class="field"/>
  <br/>
  <input id ="GuessButton" type="button" value="Submit"  class="buttonValid" @click="submit"/>
  <br/>
  <router-link to="/Defeat" tag="button">
    <input id="buttonSur" type="button" value="Surrender" class="buttonSurr" @click="surrender"/>
  </router-link>
  <p id="TextRet" class="txt">{{txt}}</p>
  <p class="txtUnder"> Devinez un chiffre entre 0 et 1000 ! </p>
</template>

<script>

import axios from "axios";

import { mapMutations } from "vuex";

export default {
  name : 'Partie',
  data : function() {
    return {
      color : 50,
      minute : 10,
      second : 0,
      token : undefined,
      res : 0,
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
          this.res = 0;
          this.surrender();
        }
      }, 1000);
    },

    getToken : async function() {
      //Get Request
      let tmp;
      await axios
          .get("https://vuejs-rest-challenge.herokuapp.com/token")
          .then( (response) => {
            tmp = response.data;
            //Debug
            //console.log(response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      this.token = tmp.token;
    },

    submit : async function () {
      //Post request
      this.guess = parseInt(document.getElementById("GuessText").value);
      let response1 = axios.post("https://vuejs-rest-challenge.herokuapp.com/try",
                 {token : this.token , guess : this.guess});
      let ret_val = (await response1).data.code; //response return a tab with field code

      //Handling req value
      if(ret_val === 1){
        this.txt = "C'est plus !" + String.fromCharCode(11014);
        this.essais += 1;
      }
      else if(ret_val === 0){
        this.txt = "Bravo !";
        clearInterval(this.intervalFunc);
        this.res = 1;
        this.surrender();
        await this.$router.push("/Victory")
            .catch(function (error){
          console.log(error);
        });
      }
      else if(ret_val === -1){
        this.txt = "C'est moins !" + String.fromCharCode(11015);
        this.essais += 1;
      }
      document.getElementById("GuessText").value ="";
    },

    surrender : function () {
      let sec = 60 - this.second;
      let min = 9 - this.minute;
      let obj = {
        essais : this.essais,
        seconde : sec,
        minute : min,
        result : this.res
      };
      //window.console.log(obj);
      this.addAll(obj);
    },
  }
}
</script>

<style scoped>

.txt{
  font-size: 25px;
  font-family: 'georgia';
  position: absolute;
  left: 48%;
  top:  15%;
}

.txtUnder {
  font-size: 25px;
  font-family: 'georgia';
  position: absolute;
  left: 43%;
  top:  35%;
}

.field{
  box-sizing: border-box;
  display: block;
  width: 14%;
  border: 5px solid #027ad6;
  position: absolute;
  left: 45%;
  top: 25%;
}

.timer {
  display: block;
  width: auto;
  padding: 10px;
  border: 5px solid #027ad6;
  position : absolute;
  left : 45%;
}
.buttonSurr{
  position: absolute;
  top : 50%;
  left : 60%;
  text-align: center;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 250px;
  height: 70px;
  border-radius: 3px;
  color: #fff;
  background: #027ad6;
  font: 700 18px sans-serif;
  box-shadow:
      0 1px 2px rgba(0,0,0,0.07),
      0 2px 4px rgba(0,0,0,0.07),
      0 4px 8px rgba(0,0,0,0.07),
      0 8px 16px rgba(0,0,0,0.07),
      0 16px 32px rgba(0,0,0,0.07),
      0 32px 64px rgba(0,0,0,0.07);
}
.buttonValid{
  position: absolute;
  top : 50%;
  left : 30%;
  text-align: center;
  grid-template-columns: repeat(30, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 250px;
  height: 70px;
  border-radius: 3px;
  color: #fff;
  background: #027ad6;
  font: 700 18px sans-serif;
  box-shadow:
      0 1px 2px rgba(0,0,0,0.07),
      0 2px 4px rgba(0,0,0,0.07),
      0 4px 8px rgba(0,0,0,0.07),
      0 8px 16px rgba(0,0,0,0.07),
      0 16px 32px rgba(0,0,0,0.07),
      0 32px 64px rgba(0,0,0,0.07);
}
</style>
