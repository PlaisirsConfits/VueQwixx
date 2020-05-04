<template>
    <img :class="['dice', color]" :src="'/assets/'+value+'.svg.png'" />
</template>

<script>
    export default {
        name: "Dice",
        methods: {},
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

        computed: {}
    };
</script>

<style scoped>
    .dice {
        margin: 5px;
        border-radius: 8px;
        width: 50px;
        height: 50px;


    }
</style>