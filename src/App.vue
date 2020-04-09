<template>
  <div id="app">
    
    <Dice :value="white1DiceValue" color="white"> </Dice>
    <Dice :value="white2DiceValue" color="white"> </Dice>
    <Dice :value="redDiceValue" color="red"> </Dice>
    <Dice :value="yellowDiceValue" color="yellow" > </Dice>
    <Dice :value="blueDiceValue" color="blue"> </Dice>
    <Dice :value="greenDiceValue" color="green" > </Dice>
    <Button @click="rollTheDice">Lancer les dés! </Button>

    <div > Choix possibles : {{white1DiceValue + white2DiceValue}} </div>
  </div>
</template>

<script>
import Dice from './components/Dice.vue'

export default {
  name: 'App',
  components: {
    Dice
  },
  data: function(){
    return {
      
    redDiceValue:5,
    yellowDiceValue:5,
    blueDiceValue: 5,
    greenDiceValue: 5,
    white1DiceValue: 5,
    white2DiceValue: 5,

    whiteDices: Number,
    }
  },
  methods: {
    rollTheDice: function(){
     console.log(this.$children[0])
      for(let i=0; i<this.$children.length; i++ ) {
        let newValue= this.$children[i]
        newValue.value= Math.floor(Math.random() * 6) + 1  
        this.$children.splice(i, 1, newValue)
      }
     console.log(this.$children)
     
    },
    
  }, 

  computed : {
    // redDiceChoices: function(){
    //   console.log(this)
    //  let whiteDices = this.white1DiceValue+this.white2DiceValue
    //   return whiteDices
    // }
  },
 
}
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
