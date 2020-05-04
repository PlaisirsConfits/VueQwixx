<template>
    <div id="homePage">
        <h1> Welcome to Qwixx </h1>

                <div> JOUER </div>

                <div class="player">
                    <router-link to="/qwixx/1"><img  src="/assets/player1.png"></router-link>
                </div>
                <div class="player">
                    <router-link to="/qwixx/2"><img src="/assets/player2.png"></router-link>
                </div>
        <div>
            <router-link to="/rules"> Règles du jeu</router-link>
        </div>



    </div>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped>
    #homePage {
        font-family: Arial;
        text-align: center;
        padding: 15px 0px 0px 0px;
        margin: 0;
        background-image: url("/assets/motif.png");
        background-size: 50%;
        color: mediumspringgreen;
        height: 100vh;

    }


img {
    width: 50px;
    height: 50px;
}
    .player {
        margin: 5px;
        padding: 5px;
        display: inline-block;
        border: 10px double white;
        background-color: mediumspringgreen;
        border-radius: 25px;
    }


</style>