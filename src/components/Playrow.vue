<template>
    <table :class="['playRow', color]">

        <tr v-if="this.color==='red' ||this.color==='yellow'">
            <td v-for="n in 11" :key="n">{{ n +1 }}</td>
            <td><img class="padlock" src="/assets/padlock.png"></td>
        </tr>
        <tr v-else>
            <td v-for="n in 11" :key="n">{{ 13- n }}</td>
            <td><img class="padlock" src="/assets/padlock.png"></td>
        </tr>
        <tr v-if="this.color==='red' ||this.color==='yellow'">
            <td
                    v-for="n in 12"
                    :key="n"

                    :set="disabled =  lastCheckedPosition>=n"

                     class="disabledCellColor"
            >
<!--                <div :class="{'disabledCellColor' : disabledCell}">-->


                {{ disabled }}

                    <input

                            type="checkbox"
                            :value="n+1"
                            :disabled="disabled"
                            v-model="checkedValues"
                            v-on:change="$emit('onCheckCount', checkedCount)"

                            v-on:click="lastCheckedPosition =n"
                    />


<!--                </div>-->

            </td>
        </tr>
        <tr v-else>
            <td v-for="n in 12" :key="n">
                <input
                        type="checkbox"
                        :value="13-n"
                        :disabled="lastCheckedPosition>=n"
                        v-model="checkedValues"
                        v-on:change="$emit('onCheckCount', checkedCount)"
                        v-on:click="lastCheckedPosition =n"


                />
            </td>
        </tr>
    </table>

</template>

<script>
    export default {
        name: "Playrow",

        props: {
            color: String,
            checked: Boolean
        },
        data: function () {
            return {
                checkedValues: [],
                lastCheckedPosition: 0,
                //disableddsdsdsds: false,
                // disabledCell: false,




            };        },
        methods: {

        },

        computed: {
            checkedCount: function () {
                return this.checkedValues.length
            },
            // getDisabled: function(){
            //     return !this.disabledCell
            // }



        }


    }
    ;
</script>

<style>
    .playRow {
        margin: auto;
        border-radius: 5px;
        width: 100%;
    }

    .padlock {
        width: 10px;
    }

    .disabledCellColor {
        background-color: black;
    }

    /*.playRow input:disabled {*/

    /*}*/


</style>
