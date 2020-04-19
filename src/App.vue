<template>
  <div id="app">
    <Dice :value="white1DiceValue" color="white"></Dice>
    <Dice :value="white2DiceValue" color="white"></Dice>
    <Dice :value="redDiceValue" color="red"></Dice>
    <Dice :value="yellowDiceValue" color="yellow"></Dice>
    <Dice :value="blueDiceValue" color="blue"></Dice>
    <Dice :value="greenDiceValue" color="lightgreen"></Dice>

    <div>
      <Button @click="rollTheDice">Lancer les dés!</Button>
    </div>

    <Playrow style="margin:auto" color="red" v-on:onCheckCount="redCheckCount = $event" ></Playrow>
{{redCheckCount}}
    <div>Les possibles : {{redLineChoices}}</div>
  </div>
</template>

<script>
import Dice from "./components/Dice.vue";
import Playrow from "./components/Playrow.vue";

export default {
  name: "App",
  components: {
    Dice,
    Playrow
  },
  data: function() {
    return {
      redDiceValue: 5,
      yellowDiceValue: 5,
      blueDiceValue: 5,
      greenDiceValue: 5,
      white1DiceValue: 5,
      white2DiceValue: 5,

      whiteDices: Number,
      white1AndRedDices: Number,
      white2AndRedDices: Number,

      redCheckCount: 0
    };
  },
  methods: {
    rollTheDice: function() {
      this.redDiceValue = Math.floor(Math.random() * 6) + 1;
      this.yellowDiceValue = Math.floor(Math.random() * 6) + 1;
      this.blueDiceValue = Math.floor(Math.random() * 6) + 1;
      this.greenDiceValue = Math.floor(Math.random() * 6) + 1;
      this.white1DiceValue = Math.floor(Math.random() * 6) + 1; 
      this.white2DiceValue = Math.floor(Math.random() * 6) + 1;
    }
  },
  computed: {
    redDiceChoices: function() {
      let whiteDices = this.white1DiceValue + this.white2DiceValue;
      let white1AndRedDices = this.white1DiceValue + this.redDiceValue;
      let white2AndRedDices = this.white2DiceValue + this.redDiceValue;
      return { whiteDices, white1AndRedDices, white2AndRedDices };
    },

    redLineChoices: function() {
      let choice = "";
      if (
        this.redDiceChoices.whiteDices >=
          this.redDiceChoices.white1AndRedDices &&
        this.redDiceChoices.whiteDices >= this.redDiceChoices.white2AndRedDices
      ) {
        choice = `Une SEULE combinaison au choix soit ${this.redDiceChoices.whiteDices}, ${this.redDiceChoices.white1AndRedDices} ou ${this.redDiceChoices.white2AndRedDices}`;
      } else if (
        this.redDiceChoices.whiteDices <
          this.redDiceChoices.white1AndRedDices &&
        this.redDiceChoices.whiteDices >= this.redDiceChoices.white2AndRedDices
      ) {
        choice = `Soit les dés blancs (${this.redDiceChoices.whiteDices}) puis  ${this.redDiceChoices.white1AndRedDices}; soit juste le ${this.redDiceChoices.white2AndRedDices}`;
      } else if (
        this.redDiceChoices.whiteDices <
          this.redDiceChoices.white2AndRedDices &&
        this.redDiceChoices.whiteDices >= this.redDiceChoices.white1AndRedDices
      ) {
        choice = `Soit les dés blancs (${this.redDiceChoices.whiteDices}) puis  ${this.redDiceChoices.white2AndRedDices}; soit juste le ${this.redDiceChoices.white1AndRedDices}`;
      } else if (
        this.redDiceChoices.whiteDices <
          this.redDiceChoices.white1AndRedDices &&
        this.redDiceChoices.whiteDices < this.redDiceChoices.white2AndRedDices
      ) {
        choice = `Les dés blancs (${this.redDiceChoices.whiteDices}) puis l'une des deux autres combinaisons :  ${this.redDiceChoices.white1AndRedDices} ou ${this.redDiceChoices.white2AndRedDices}`;
      }

      return choice;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
