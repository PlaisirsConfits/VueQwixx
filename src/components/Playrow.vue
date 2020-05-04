<template>
    <table :class="['playRow', color]" >

        <tr v-if="this.color==='red' ||this.color==='yellow'">
            <td v-for="n in 11" :key="n">{{ n +1 }}</td>
            <td><img class="padlock" src="/assets/padlock.png"></td>
        </tr>
        <tr v-else>
            <td v-for="n in 11" :key="n">{{ 13- n }}</td>
            <td><img class="padlock" src="/assets/padlock.png"></td>
        </tr>
        <tr>
            <td v-for="n in 12" :key="n">
                <input
                        type="checkbox"
                        :value="n+1"
                        v-model="checkedValues"
                        v-on:change="$emit('onCheckCount', checkedCount)"/>
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
                checkedValues: []
            };
        },
        methods: {},

        computed: {
            checkedCount: function () {
                return this.checkedValues.length
            }
        }
    };
</script>

<style>
    .playRow {
        margin: auto;
        border-radius: 5px;
        width: 100%;
    }
    .padlock{
        width: 10px;
    }

</style>