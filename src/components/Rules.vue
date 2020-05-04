<template>
    <div id="rules">

        <h1>Les règles du qwixx </h1>
        <p>
            <router-link to="/"> Retour</router-link>
        </p>


        <div class="textRules">
            <p>
                Le joueur qui lance les dés est appelé « joueur actif ». Qwixx n’est pas composé de manches ou de tours.
                Les
                joueurs lancent simplement les dés les uns après les autres jusqu’à ce que l’une des conditions de fin
                de
                partie se vérifie.

                Une fois les dés lancés, le joueur actif :

                Additionne le résultat des 2 dés blancs. Il peut inscrire ce score sur n’importe quelle ligne si il le
                souhaite. Les autres joueurs peuvent faire de même.
                Additionne le résultat d’1 dé blanc avec 1 dé de couleur. La couleur détermine la ligne sur laquelle le
                chiffre est noté. Seul le joueur actif peut faire cette action.


            </p>

            <h2>Conditions d’écriture </h2>
            <p>
                Les chiffres se cochent de gauche à droite. Les joueurs ne sont pas obligés de commencer par le chiffre
                le
                plus à gauche.

                Par contre, lorsqu’un chiffre est coché, il n’est plus possible de cocher les chiffres précédents. Par
                exemple, si je décide de rayer le 4 de la ligne rouge, je n’ai plus accès au 2 ni au 3 rouge.
                Précisions sur les actions

                Les joueurs doivent d’abord faire l’action 1, puis la 2. Ainsi, si les dés blancs donnent un 5, et qu’1
                dé
                blanc + 1 dé de couleur donnent un 4, le joueur actif devra d’abord cocher le 5 (résultat des 2 dés
                blancs).

                Les actions 1 et 2 ne sont pas obligatoires.

                Si le joueur actif ne coche aucune case, il prend une pénalité et coche l’une des cases « coup manqué »
                (en
                bas à droite). Chaque case « coup manqué » marquée lui fait perdre 5 points à la fin de la partie.
                Fermer une ligne

                Pour fermer une ligne, il faut cocher le dernier chiffre de la ligne (puis le cadenas). Ce chiffre est
                impossible à cocher tant que le joueur n’a pas au minimum 5 croix sur la ligne.

                Par exemple : si la somme des dés blancs fait 12, et que j’ai déjà 5 cases barrées sur la ligne rouge,
                je
                peux cocher le 12 rouge. Je clôture ensuite la ligne en cochant le cadenas. Le dé rouge est
                immédiatement
                retiré du jeu et il n’est plus possible d’écrire sur cette ligne.
            </p>

            <h2> Fin de la partie</h2>
            <p> La partie se termine si l’une des 2 conditions se vérifie : </p>
            <ul>
                <li> 2 lignes de couleurs différentes sont terminées, peu importe ou.</li>
                <li>L’un des joueurs a coché ses 4 cases « coup manqué »</li>
            </ul>

            <p>
                Les joueurs comptent le nombre de croix (le cadenas compte comme une croix) pour chaque couleur et
                gagnent
                les points indiqués. 5 croix valent ainsi 15 points.

                Ils soustraient ensuite 5 points par case « coup manqué » cochée.

                Le joueur qui possède le plus de points de victoire à la fin du décompte gagne la partie !
            </p>
        </div>
    </div>


</template>

<script>
    export default {
        name: "Rules"
    }
</script>

<style scoped>
    #rules {
        font-family: Arial;
        text-align: center;
        color: maroon;
        background-image: url("/assets/motif.png");
        background-size: 50%;
        text-align: justify;
        padding: 15px 60px 0px 60px;
    }

    .textRules {
        border: solid #ffda17;
        border-radius: 25px;
        background-color: white;
        opacity: 0.8;
        padding: 10px;
    }

    h1, h2 {
        text-align: center;
    }

</style>