<template>
    <h1 class="title">DEVINEZ LE NOMBRE &#129300</h1>
    <div>
      <h2 class="groupe">Groupe</h2>
      <p class="groupeName">De La Rochebrochard Amaury et Boumali Samy</p>
      <p class="groupeVal">TPA51</p>
    </div>
    <div>
      <h2 class="Concept">Concept</h2>
      <p class="ConceptVal">Le jeu est simple, il s'agit de deviner la valeur d'un nombre choisi au hasard avec un outil super-puissant
        auquel même la NASA n'a pas accès. Cette valeur est comprise entre 0 et 1000, et à chaque tentative une indication
        s'affiche vous informant de la comparaison du nombre entré au nombre généré (valeur supérieure ou inférieure).<br/>
        Le nombre de tentatives n'est pas limité cependant une partie dure seulement dix minutes.
      </p>
    </div>
    <div>
      <h2 class="Fonctionnalites">À vous de jouer</h2>
      <router-link to="/Historique" tag="button">
        <button class="buttonHisto">Consulter historique</button>
      </router-link>
      <router-link to="/Partie" tag="button">
        <button class="buttonPartie">Démarrer une partie</button>
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

.title {
  position : absolute;
  left : 500px;
}

.groupe {
  position: absolute;
  top : 150px;
}

.groupeName {
  position: absolute;
  top : 210px;
  left : 100px;
  font-size:20px;
}

.groupeVal {
  position: absolute;
  top : 250px;
  left : 100px;
  font-size:20px;
}

.Concept{
  position: absolute;
  top : 290px;
}

.ConceptVal{
  position: absolute;
  top : 350px;
  left : 100px;
  font-size:20px;
}

.Fonctionnalites{
  position : absolute;
  top : 500px;
}

.buttonHisto{
  position: absolute;
  top : 600px;
  left : 300px;
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

.buttonPartie{
  position: absolute;
  top : 600px;
  left : 800px;
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


.col{
  margin-right : 20pt;
}

</style>