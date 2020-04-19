<template>
    <img :src="'/assets/'+value+'.svg.png'" :style="{'background-color':color}"/>
</template>

<script>
    export default {
        name: "Dice",
        props: {

            value: {
                type: Number,
                default: 1
            },
            color: String,
        },
        data: function () {
            return {};
        },
        methods: {},

        computed: {}
    };
</script>

