<template>
    <div>
        <div>
            <p>
                <router-link to="/"> Quitter la partie</router-link>
            </p>
        </div>
        <div id="qwixx" v-if="Number($route.params.players)">


            <div class="dices">
                <Dice color="white" :value="white1DiceValue"></Dice>
                <Dice color="white" :value="white2DiceValue"></Dice>
                <Dice color="red" :value="redDiceValue"></Dice>
                <Dice color="yellow" :value="yellowDiceValue"></Dice>
                <Dice color="green" :value="blueDiceValue"></Dice>
                <Dice color="blue" :value="greenDiceValue"></Dice>
            </div>
            <div>
                <input type="button" id="buttonPlay" @click="rollTheDice" value="Lancer les dés!"/>
            </div>

            <ScoreSheet v-for="n in Number($route.params.players)" :key="n"></ScoreSheet>

        </div>
        <div class="red" v-else>Il semble qu'il y ait une petite erreur ...
            <router-link to="/"> Retour</router-link>
        </div>
    </div>
</template>

<script>
    import Dice from "./Dice.vue";
    import ScoreSheet from "./ScoreSheet";

    export default {
        name: "Qwixx",
        components: {
            Dice,
            ScoreSheet
        },
        data: function () {
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

                redCheckCount: 0,
                yellowCheckCount: 0,
                greenCheckCount: 0,
                blueCheckCount: 0,

                checkedPenalities: []


            };
        },
        methods: {
            rollTheDice: function () {
                this.redDiceValue = Math.floor(Math.random() * 6) + 1;
                this.yellowDiceValue = Math.floor(Math.random() * 6) + 1;
                this.blueDiceValue = Math.floor(Math.random() * 6) + 1;
                this.greenDiceValue = Math.floor(Math.random() * 6) + 1;
                this.white1DiceValue = Math.floor(Math.random() * 6) + 1;
                this.white2DiceValue = Math.floor(Math.random() * 6) + 1;
            }
        },
        computed: {
            redDiceChoices: function () {
                let whiteDices = this.white1DiceValue + this.white2DiceValue;
                let white1AndRedDices = this.white1DiceValue + this.redDiceValue;
                let white2AndRedDices = this.white2DiceValue + this.redDiceValue;
                return {whiteDices, white1AndRedDices, white2AndRedDices};
            },

            redLineChoices: function () {
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
            },

        }
    };
</script>

<style>
    #qwixx {
        font-family: Arial;
        text-align: center;
        color: dimgray;
        background-image: url("/assets/motif.png");
        background-size: 50%;
        height: 100vh;
        margin: 0;


    }

    .dices {
        width: 80%;
        margin: auto;
        padding: 15px auto 15px auto;
    }

    .white {
        background-color: lightgrey;
        border: solid lightgrey;

    }

    .red {
        background-color: #f1241e;
        border: solid #f1241e;
        color: white;
    }

    .yellow {
        background-color: #ffda17;
        border: solid #ffda17;
        color: white;

    }

    .blue {
        background-color: #008080;
        border: solid #008080;
        color: white;
    }

    .green {
        background-color: #4ab021;
        border: solid #4ab021;
        color: white;
    }

    #buttonPlay {
        width: 50%;
        border-radius: 10px;
        margin: 10px;
        padding: 10px;
        font-weight: bold;
        background-color: orange;
        border-style: none;
        color: white;
    }

    .helperPoints {
        border: solid dimgray;
        border-radius: 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
        width: 100%;
        background-color: white;

    }

    .helperPoints td {
        border: solid dimgray;
        border-radius: 8px;
    }

    .scoreTotal {
        border: solid dimgray;
        border-radius: 5px;
        margin: 5px;
        padding: 5px;
        display: inline-block;
    }


</style>
