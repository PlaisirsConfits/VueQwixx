<template>
    <div id="app">
        <div class="dices">
            <Dice color="white" :value="white1DiceValue"></Dice>
            <Dice color="white" :value="white2DiceValue"></Dice>
            <Dice color="red" :value="redDiceValue"></Dice>
            <Dice color="yellow" :value="yellowDiceValue"></Dice>
            <Dice color="green" :value="blueDiceValue"></Dice>
            <Dice color="blue" :value="greenDiceValue"></Dice>

        </div>

        <Button id="buttonPlay" @click="rollTheDice">Lancer les dés!</Button>

        <Playrow color="red"
                 v-on:onCheckCount="redCheckCount = $event"></Playrow>
        <Playrow color="yellow"
                 v-on:onCheckCount="yellowCheckCount = $event"></Playrow>
        <Playrow color="green"
                 v-on:onCheckCount="greenCheckCount = $event"></Playrow>
        <Playrow color="blue"
                 v-on:onCheckCount="blueCheckCount = $event"></Playrow>

        <Table class="helperPoints">
            <tr>
                <td> X </td>
                <td v-for="memoScore in memoScores" :key="memoScore.id"> {{memoScore.checked}}</td>
            </tr>

            <tr>
                <td> Points </td>
                <td v-for="memoScore in memoScores" :key="memoScore.id"> {{memoScore.score}}</td>
            </tr>
        </Table>

        <div class="scoreTotal red"> {{memoScores[redCheckCount].score}}</div>
        +
        <div class="scoreTotal yellow"> {{memoScores[yellowCheckCount].score}}</div>
        +
        <div class="scoreTotal green"> {{memoScores[greenCheckCount].score}}</div>
        +
        <div class="scoreTotal blue"> {{memoScores[blueCheckCount].score}}</div>
        -
        <div class="scoreTotal "> Pénalités</div>
        =
        <div class="scoreTotal "> TOTAL = <br> {{globalScore.finalScore}}</div>
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

                memoScores: [
                    {
                        'checked': 0,
                        'score': 0
                    },
                    {
                        'checked': 1,
                        'score': 1
                    },
                    {
                        'checked': 2,
                        'score': 3
                    },
                    {
                        'checked': 3,
                        'score': 6
                    },
                    {
                        'checked':4 ,
                        'score': 10
                    },
                    {
                        'checked':5 ,
                        'score':15
                    },

                    {
                        'checked':6,
                        'score':21
                    },
                    {
                        'checked':7 ,
                        'score':28
                    },
                    {
                        'checked':8 ,
                        'score':36
                    },
                    {
                        'checked':9 ,
                        'score':45
                    },
                    {
                        'checked': 10,
                        'score':55
                    },
                    {
                        'checked': 11,
                        'score':66
                    },
                    {
                        'checked':12,
                        'score':78
                    },
                ]

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
            globalScore: function(){
                let redScore= this.memoScores[this.redCheckCount].score;
                let yellowScore=this.memoScores[this.yellowCheckCount].score;
                let greenScore=this.memoScores[this.greenCheckCount].score;
                let blueScore=this.memoScores[this.blueCheckCount].score;
                let finalScore=redScore+ yellowScore +greenScore+blueScore;
                return {finalScore}
            }
        }
    };
</script>

<style>
    #app {
        font-family: Arial;
        text-align: center;
        color: dimgray;
        margin: 50px;
        max-width: 100%;
    }

    .dices {
        width: 80%;
        display: inline-block;
    }

    .white {
        background-color: white;
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
        width:100%

    }
    .helperPoints td{
        border: solid dimgray;
        border-radius: 8px;
    }

    .scoreTotal {
        border: solid dimgray;
        border-radius: 5px;
        margin: 10px;
        padding: 10px;
        display: inline-block;


    }
</style>
