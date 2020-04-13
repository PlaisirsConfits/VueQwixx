<template>
  <div id="app">
    <Dice :value="white1DiceValue" color="white"></Dice>
    <Dice :value="white2DiceValue" color="white"></Dice>
    <Dice :value="redDiceValue" color="red"></Dice>
    <Dice :value="yellowDiceValue" color="yellow"></Dice>
    <Dice :value="blueDiceValue" color="blue"></Dice>
    <Dice :value="greenDiceValue" color="green"></Dice>
    <Button @click="rollTheDice">Lancer les dés!</Button>

    <div>Choix possibles : {{redDiceChoices}}</div>
    <div>yo : {{redLineChoices}}</div>
  </div>
</template>

<script>
import Dice from "./components/Dice.vue";

export default {
  name: "App",
  components: {
    Dice
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
      white2AndRedDices: Number
    };
  },
  methods: {
    rollTheDice: function() {
      this.redDiceValue = Math.floor(Math.random() * 6) + 1;
      this.yellowDiceValue = Math.floor(Math.random() * 6) + 1;
      (this.blueDiceValue = Math.floor(Math.random() * 6) + 1),
        (this.greenDiceValue = Math.floor(Math.random() * 6) + 1);
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
        this.redDiceChoices.whiteDices >=
         this.redDiceChoices.white2AndRedDices
      ) {
        choice =
          "Une combinaison au choix ";
      } else if (
        this.redDiceChoices.whiteDices <
          this.redDiceChoices.white1AndRedDices &&
        this.redDiceChoices.whiteDices > this.redDiceChoices.white2AndRedDices
      ) {
        choice =
          "Soit les 'whiteDices' puis le 'white1AndRedDices' soit juste le'white2AndRedDices'  ";
      } else if (
        this.redDiceChoices.whiteDices <
          this.redDiceChoices.white2AndRedDices &&
        this.redDiceChoices.whiteDices > this.redDiceChoices.white1AndRedDices
      ) {
        choice =
          "Soit les 'whiteDices' puis le 'white2AndRedDices' soit juste le'white1AndRedDices'  ";
      } else if (
        this.redDiceChoices.whiteDices <
          this.redDiceChoices.white1AndRedDices &&
        this.redDiceChoices.whiteDices < this.redDiceChoices.white2AndRedDices
      ) {
        choice =
          "Le'whiteDices' puis le 'white1AndRedDices' OU 'white2AndRedDices'  ";
      }
      console.log(choice);

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
