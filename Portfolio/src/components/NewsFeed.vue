<template>
    <div id="div-twitter">
        <h1 :style="{ opacity: titleOpacity }" id="h1-twitter">NewsFeed</h1>
        <div id="container-show" style="display: flex; flex-direction: column;">
            <v-container class="container" style="display: flex;">
                <img class="depth-effect" @click="showModal1 = true" style="margin: 2%; width: 220vw; height: 50vw;"
                    src="../assets/newsfeed/Newsfeed-home.PNG" alt="Aperçu" />

                <div v-if="showModal1" @click="showModal1 = false" class="modal">
                    <div class="modal-content" @click.stop>
                        <img style="margin: 2%; width: 90vw; height: 50vw;" src="/src/assets/newsfeed/Newsfeed-home.PNG" />
                    </div>
                </div>
                <div>
                    <h2>Page d'accueil NewsFeed</h2>
                    <p>Visualisation des projets sur lesquels on est affilié.</p>
                </div>
            </v-container>
            <v-container class="container" style="display: flex; flex-direction: row-reverse;">
                <img @click="showModal2 = true" style="margin: 2%; width: 220vw; height: 50vw;"
                    src="../assets/newsfeed/Newsfeed-creation.PNG" alt="" srcset="" class="depth-right">
                <div v-if="showModal2" @click="showModal2 = false" class="modal">
                    <div class="modal-content" @click.stop>
                        <img style="margin: 2%; width: 90vw; height: 50vw;" src="../assets/newsfeed/Newsfeed-creation.PNG" class="responsive" />
                    </div>
                </div>
                <div>
                    <h2>Page de choix de type de report</h2>
                    <ul>
                        <li>
                            <strong>Choix du type de report</strong>
                            <ul>
                                <li>Historique des reports selon le report choisi</li>
                                <li>Crétation du mail</li>
                                <li>Possibilité de définir le mail comme important ou non</li>
                            </ul> 
                            </li>
                    </ul>
                </div>
            </v-container>
            <v-container class="container" style="display: flex;">
                <img @click="showModal3 = true" style="margin: 2%; width: 220vw; height: 50vw;" class="depth-effect"
                    src="../assets/newsfeed/Newsfeed-mail-teams.PNG" alt="" srcset="">
                <div v-if="showModal3" @click="showModal3 = false" class="modal">
                    <div class="modal-content" @click.stop>
                        <img style="margin: 2%; width: 90vw; height: 50vw;" src="../assets/newsfeed/Newsfeed-mail-teams.PNG" class="responsive" />
                    </div>
                </div>

                <div>
                    <h2>Visuel mail/teams</h2>
                    <p>Tableau comportant les mails et canaux teams liée au projet</p>
                </div>

            </v-container>
            <v-container class="container" style="display: flex; flex-direction: row-reverse;">
                <img @click="showModal4 = true" style="margin: 2%; width: 220vw; height: 50vw;" class="depth-right" src="../assets/newsfeed/Newsfeed-preview.PNG"
                    alt="" srcset="">
                    <div v-if="showModal4" @click="showModal4 = false" class="modal">
                    <div class="modal-content" @click.stop>
                        <img style="margin: 2%; width: 90vw; height: 50vw;" src="../assets/newsfeed/Newsfeed-preview.PNG" class="responsive" />
                    </div>
                </div>
                <div>
                    <ul>
                        <li><strong>Visualisation du mail</strong></li>
                        <ol>
                            <li><strong>Preview du mail</strong>
                                <ul>
                                    <li>Visuel du mail créer pour outlook</li>
                                </ul>
                            </li>
                        </ol>
                    </ul>

                </div>
            </v-container>
        </div>
    </div>
    <Comments />

</template>
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showModal1 = ref(false);
const showModal2 = ref(false);
const showModal3 = ref(false);
const showModal4 = ref(false);

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
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.container {
    margin: 3%;
}

#div-twitter {
    padding-top: 10vw;
}

#h1-twitter {
    position: relative;
    padding-bottom: 5vw;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 8.4vw;
    font-family: 'Druk Text Wide Heavy Trial', sans-serif;
    max-width: 100%;
    text-align: center;
}


h2 {
    color: #ffffff
}

h3 {
    color: #ffffff
}

li {
    color: #ffffff;
}

.depth-effect {
    display: inline-block;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    /* Arrondir les coins */
    box-shadow: 20px 10px 10px rgba(0, 0, 0, 0.11);
    /* Ombre pour l'effet de profondeur */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* Animation de l'effet de profondeur */
}

.depth-right {
    display: inline-block;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    /* Arrondir les coins */
    box-shadow: -20px 10px 10px rgba(0, 0, 0, 0.11);
    /* Ombre pour l'effet de profondeur */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    /* Animation de l'effet de profondeur */
}
</style>