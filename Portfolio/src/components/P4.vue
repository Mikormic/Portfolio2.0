<template>
    <div style="display:flex; flex-direction: column;">
        <h1 :style="{ opacity: titleOpacity }" id="h1-p4">Puissance 4</h1>
        <div class="slider" style="--width: 60vw; --height: 15vw; --quantity: 9">
            <div class="list">
                <div class="item" style="--position: 1;"><img src="../assets/p4/v1.PNG"></div>
                <div class="item" style="--position: 2;"><img src="../assets/p4/v2.PNG"></div>
                <div class="item" style="--position: 3;"><img src="../assets/p4/v3.PNG"></div>
                <div class="item" style="--position: 4;"><img src="../assets/p4/v4.png"></div>
                <div class="item" style="--position: 5;"><img
                        src="../assets/p4/8-6ffa2-bit-2170b-gif-47298-wallpapers-e8686-top-a82de-free-0dd0a-8-66fdd-bit-38877-gif---backgrounds---wallpaperaccess.gif">
                </div>
                <div class="item" style="--position: 6;"><img src="../assets/p4/aaaaaaaaaaa01.gif"></div>
                <div class="item" style="--position: 7;"><img src="../assets/p4/naruto-background.gif"></div>
                <div class="item" style="--position: 8;"><img src="../assets/p4/Stkyof.gif"></div>
                <div class="item" style="--position: 9;"><img src="../assets/p4/lxopz7@facebook.gif"></div>
            </div>
        </div>
        <div id="p4">
        <a href="https://github.com/Mikormic/puissance4"><img width="50" src="../assets/icons/icons8-git-50.png" alt=""></a>

            <div>
                <h2>Résumé du Projet</h2>
                <p>Le projet consiste à créer une version interactive du jeu classique "Puissance 4" en utilisant
                    JavaScript
                    pour la logique du jeu, et HTML/CSS pour l'interface utilisateur. Le jeu est conçu comme un plugin
                    JavaScript modulable, permettant de personnaliser plusieurs paramètres, comme la taille de la
                    grille, les
                    couleurs des joueurs, et les noms des joueurs.</p>

                <h2>Notions Abordées</h2>
                <ul>
                    <li>JavaScript (ES6)</li>
                    <li>Algorithmie</li>
                    <li>Implémentation de jeu</li>
                </ul>

                <h2>Règles du Jeu</h2>
                <ol>
                    <li><strong>Nombre de Joueurs:</strong> Deux joueurs (traditionnellement Rouge et Jaune).</li>
                    <li><strong>Surface de Jeu:</strong> Grille de dimensions variables.</li>
                    <li><strong>Tour de Jeu:</strong> Les joueurs placent à tour de rôle un pion dans une colonne. Le
                        pion
                        descend jusqu'à la position la plus basse disponible.</li>
                    <li><strong>Conditions de Victoire:</strong> Aligner 4 pions horizontalement, verticalement ou en
                        diagonale.</li>
                    <li><strong>Fin de Partie:</strong> La partie se termine lorsqu'un joueur aligne 4 pions ou que la
                        grille
                        est pleine sans possibilité de victoire, déclarant la partie nulle.</li>
                </ol>
                <div v-if="showMore">
                    <h2>Fonctionnalités Implémentées</h2>
                    <ul>
                        <li><strong>Affichage de la Grille:</strong> Utilisation du DOM pour afficher et mettre à jour
                            le plateau de
                            jeu.</li>
                        <li><strong>Gestion des Données:</strong> Système d'information structuré avec des classes pour
                            les joueurs
                            et les cellules du plateau.</li>
                        <li><strong>Gameplay:</strong> Sélection de colonne pour placer un pion, alternance de tour
                            entre les
                            joueurs.</li>
                        <li><strong>Vérification de Victoire:</strong> Algorithmes pour vérifier l'alignement de 4 pions
                            après
                            chaque coup.</li>
                        <li><strong>Animation:</strong> Animation de la chute du pion de la position haute à la position
                            basse.</li>
                        <li><strong>Écran de Victoire:</strong> Affichage d'un message de victoire avec le nom du joueur
                            gagnant,
                            possibilité de relancer une partie.</li>
                        <li><strong>Personnalisation:</strong> Choix du pseudo des joueurs, couleur des jetons, et
                            dimensions de la
                            grille.</li>
                    </ul>

                    <h2>Fonctionnalités Avancées</h2>
                    <ul>
                        <li><strong>Écran de Fin de Partie en Cas de Nul:</strong> Gestion de l'écran de fin de partie
                            quand toutes
                            les cases sont remplies sans vainqueur.</li>
                        <li><strong>Annulation du Dernier Coup:</strong> Permet à un joueur d'annuler son dernier coup.
                        </li>
                        <li><strong>Score des Parties Précédentes:</strong> Affichage des scores cumulés des parties
                            précédentes.
                        </li>
                    </ul>
                </div>
            </div>
            <v-btn @click="toggleShowMore" class="link-span">
                {{ showMore ? 'Voir Moins' : 'Voir Plus' }}
            </v-btn>
        </div>
    </div>
    <Comments />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showMore = ref(false);

function toggleShowMore() {
    showMore.value = !showMore.value;
}

const titleOpacity = ref(1);

const handleScroll = () => {
    const maxScroll = 200;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    titleOpacity.value = Math.max(0, 1 - scrollTop / maxScroll);
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
<style>
h2 {
    padding: 2% 0 1% 0;
}

#h1-p4 {
    top: 10vw;
    position: relative;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 8.4vw;
    font-family: 'Druk Text Wide Heavy Trial', sans-serif;
    max-width: 100%;
    text-align: center;
}

#p4 {
    color: #ffffff;
    position: relative;
    top: 20vw;
    padding: 2% 5% 1% 5%;
}

p {
    color: #ffffff;
}

.slider {
    width: 100%;
    border: 5px solid rgb(255, 255, 255);
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(to right,
            transparent,
            black 10% 90%,
            transparent);
    position: relative;
    top: 15vw;
}

.slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
}

.slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    animation-delay: calc((10s / var(--quantity)) * (var(--position) - 1));
}

.slider .list .item img {
    width: 20vw;
    height: 15vw;
}

.slider:hover .item {
    animation-play-state: paused !important;
}

@keyframes autoRun {
    from {
        left: 100%
    }

    to {
        left: calc(var(--width) * -1);
    }
}
</style>