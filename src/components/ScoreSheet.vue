<template>
    <div class="scoreSheet">
        <Playrow color="red"
                 v-on:onCheckCount="redCheckCount = $event"

        ></Playrow>
        <Playrow color="yellow"
                 v-on:onCheckCount="yellowCheckCount = $event"></Playrow>
        <Playrow color="green"
                 v-on:onCheckCount="greenCheckCount = $event"></Playrow>
        <Playrow color="blue"
                 v-on:onCheckCount="blueCheckCount = $event"></Playrow>
        <Table class="helperPoints">
            <tr>
                <th> X</th>
                <th v-for="memoScore in memoScores" :key="memoScore.id"> {{memoScore.checked}}</th>
                <td colspan="4"> Pénalités (-5)</td>
            </tr>

            <tr>
                <td> Points</td>
                <td v-for="memoScore in memoScores" :key="memoScore.id"> {{memoScore.score}}</td>
                <td v-for="n in 4" :key="n"><input type="checkbox" :value="n" v-model="checkedPenalities"></td>

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
        <div class="scoreTotal white"> {{checkedPenalitiesCount}}</div>
        =
        <div class="scoreTotal" id="final"> TOTAL <br> {{globalScore.finalScore}}</div>
    </div>
</template>

<script>
    import Playrow from "./Playrow.vue";

    export default {
        name: "ScoreSheet",
        components: {
            Playrow,
        },
        data: function () {
            return {
                redCheckCount: 0,
                yellowCheckCount: 0,
                greenCheckCount: 0,
                blueCheckCount: 0,

                checkedPenalities: [],

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
                        'checked': 4,
                        'score': 10
                    },
                    {
                        'checked': 5,
                        'score': 15
                    },

                    {
                        'checked': 6,
                        'score': 21
                    },
                    {
                        'checked': 7,
                        'score': 28
                    },
                    {
                        'checked': 8,
                        'score': 36
                    },
                    {
                        'checked': 9,
                        'score': 45
                    },
                    {
                        'checked': 10,
                        'score': 55
                    },
                    {
                        'checked': 11,
                        'score': 66
                    },
                    {
                        'checked': 12,
                        'score': 78
                    },
                ]

            };
        },

        computed: {
            globalScore: function () {
                let redScore = this.memoScores[this.redCheckCount].score;
                let yellowScore = this.memoScores[this.yellowCheckCount].score;
                let greenScore = this.memoScores[this.greenCheckCount].score;
                let blueScore = this.memoScores[this.blueCheckCount].score;
                let finalScore = redScore + yellowScore + greenScore + blueScore - this.checkedPenalitiesCount;
                return {finalScore}
            },

            checkedPenalitiesCount: function () {
                return ((this.checkedPenalities.length) * 5)
            }
        }
    }


</script>

<style scoped>
    .scoreSheet {
        border-radius: 2%;
        border: 10px solid orange;
        width: 45%;
        display: inline-block;
        margin: 5px;
        padding: 5px;
        background-color: mediumspringgreen;
    }

    #final {
        background-image: url("/assets/final.png");
        background-size: contain;
        color: orange;
        font-weight: bolder;
    }
</style>--+++