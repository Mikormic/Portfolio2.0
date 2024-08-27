<template>
    <div id="div-twitter">
        <h1 :style="{ opacity: titleOpacity }" id="h1-twitter">Twitter</h1>
        <div id="container-show" style="display: flex; flex-direction: column;">
            <v-container class="container" style="display: flex;">
                <img class="depth-effect" @click="showModal1 = true" style="margin: 2%; width: 220vw; height: 50vw;"
                    src="../assets/twitter/inscription.png" alt="Aperçu" />

                <div v-if="showModal1" @click="showModal1 = false" class="modal">
                    <div class="modal-content" @click.stop>
                        <img style="margin: 2%; width: 90vw; height: 50vw;" src="/src/assets/twitter/inscription.png" />
                    </div>
                </div>
                <div>
                    <h2>Formulaire d'inscription "Rejoignez DeadBird"</h2>
                    <p>L'image montre une fenêtre modale d'inscription pour le service "DeadBird", qui est la première
                        étape d'un processus en trois étapes. Cette modale se distingue par :</p>
                    <ul>
                        <li>Champ de texte pour le nom et prénom</li>
                        <li>Champ de texte pour l'adresse email</li>
                        <li>Sélection de la date de naissance via des menus déroulants pour le mois, le jour et l'année
                        </li>
                    </ul>
                    <p>L'utilisateur peut cliquer sur un bouton "Suivant" pour passer à l'étape suivante de
                        l'inscription.</p>

                    <h3>Détails Techniques :</h3>
                    <ul>
                        <li><strong>Processus en 3 étapes</strong> : L'inscription se fait en trois étapes distinctes
                            pour améliorer l'expérience utilisateur.</li>
                        <li><strong>Connexion</strong> : Il existe une modal similaire dédiée à la connexion des
                            utilisateurs.</li>
                        <li><strong>Base de données MySQL</strong> : Les données saisies sont reliées à une base de
                            données MySQL pour le stockage.</li>
                        <li><strong>Ajax</strong> : Tout le processus est géré via des appels Ajax pour assurer une
                            fluidité maximale et une meilleure expérience utilisateur sans rechargement de page.</li>
                    </ul>
                </div>
            </v-container>
            <v-container class="container" style="display: flex; flex-direction: row-reverse;">
                <img @click="showModal2 = true" style="margin: 2%; width: 220vw; height: 50vw;"
                    src="../assets/twitter/tl.png" alt="" srcset="" class="depth-right">
                <div v-if="showModal2" @click="showModal2 = false" class="modal">
                    <div class="modal-content" @click.stop>
                        <img style="margin: 2%; width: 90vw; height: 50vw;" src="../assets/twitter/tl.png" class="responsive" />
                    </div>
                </div>
                <div>
                    <h2>Interface utilisateur de DeadBird</h2>
                    <p>L'image montre l'interface principale de l'application DeadBird, un réseau social développé avec
                        HTML, CSS, PHP, et JavaScript (Ajax). Les fonctionnalités principales sont les suivantes :</p>

                    <ul>
                        <li>
                            <strong>Menu latéral :</strong>
                            <ul>
                                <li>Accueil : Accéder à la page principale.</li>
                                <li>Explorer : Découvrir de nouveaux contenus.</li>
                                <li>Notifications : Voir les notifications récentes.</li>
                                <li>Messages : Accéder aux messages privés.</li>
                                <li>Signets : Gérer les contenus enregistrés.</li>
                                <li>Mode clair/sombre : Option pour basculer entre les modes d'affichage.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Flux de contenu :</strong>
                            <ul>
                                <li>Affichage des publications des utilisateurs, avec les informations suivantes :
                                    <ul>
                                        <li>Auteur de la publication (nom et pseudonyme).</li>
                                        <li>Date de publication.</li>
                                        <li>Contenu de la publication (texte, images, gifs).</li>
                                        <li>Interactions disponibles : commentaires, likes, partages.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Barre latérale droite :</strong>
                            <ul>
                                <li>Recherche : Champ de recherche pour trouver des contenus ou des utilisateurs.</li>
                                <li>Inscription/Connexion : Boutons pour s'inscrire ou se connecter.</li>
                                <li>Tendances : Liste des sujets tendances du moment.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Détails Techniques :</h3>
                    <ul>
                        <li><strong>HTML/CSS :</strong> Structure et mise en forme de l'interface utilisateur.</li>
                        <li><strong>PHP :</strong> Gestion des interactions côté serveur et connexion à la base de
                            données.</li>
                        <li><strong>JavaScript (Ajax) :</strong> Manipulation dynamique de la page et interaction en
                            temps réel sans rechargement de la page.</li>
                    </ul>
                </div>
            </v-container>
            <v-container class="container" style="display: flex;">
                <img @click="showModal3 = true" style="margin: 2%; width: 220vw; height: 50vw;" class="depth-effect"
                    src="../assets/twitter/profil.png" alt="" srcset="">
                <div v-if="showModal3" @click="showModal3 = false" class="modal">
                    <div class="modal-content" @click.stop>
                        <img style="margin: 2%; width: 90vw; height: 50vw;" src="../assets/twitter/profil.png" class="responsive" />
                    </div>
                </div>

                <div>
                    <h2>Interface utilisateur de profil DeadBird</h2>
                    <p>L'image montre l'interface de la page de profil utilisateur de l'application DeadBird, un réseau
                        social développé avec HTML, CSS, PHP, et JavaScript (Ajax). Les fonctionnalités principales sont
                        les suivantes :</p>

                    <ul>
                        <li>
                            <strong>Menu latéral :</strong>
                            <ul>
                                <li>Accueil : Accéder à la page principale.</li>
                                <li>Explorer : Découvrir de nouveaux contenus.</li>
                                <li>Notifications : Voir les notifications récentes.</li>
                                <li>Messages : Accéder aux messages privés.</li>
                                <li>Signets : Gérer les contenus enregistrés.</li>
                                <li>Profil : Accéder à la page de profil de l'utilisateur.</li>
                                <li>Déconnexion : Se déconnecter du compte.</li>
                                <li>DeadBirder : Accéder à la fonctionnalité spécifique DeadBirder.</li>
                                <li>Mode clair/sombre : Option pour basculer entre les modes d'affichage.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Section principale du profil :</strong>
                            <ul>
                                <li>Bannière et avatar de l'utilisateur.</li>
                                <li>Nom de l'utilisateur, pseudonyme, et biographie.</li>
                                <li>Informations supplémentaires : localisation, date d'inscription.</li>
                                <li>Statistiques : nombre d'abonnements et d'abonnés.</li>
                                <li>Bouton "Éditer" pour modifier le profil.</li>
                                <li>Onglets pour naviguer entre les Tweets, Tweets et réponses, Médias, et J'aime.</li>
                                <li>Affichage des publications de l'utilisateur avec interactions disponibles
                                    (commentaires, likes, partages).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Barre latérale droite :</strong>
                            <ul>
                                <li>Recherche : Champ de recherche pour trouver des contenus ou des utilisateurs.</li>
                                <li>Suggestions d'utilisateurs à suivre : Liste de suggestions d'utilisateurs.</li>
                                <li>Tendances : Liste des sujets tendances du moment.</li>
                            </ul>
                        </li>
                    </ul>

                    <h3>Détails Techniques :</h3>
                    <ul>
                        <li><strong>HTML/CSS :</strong> Structure et mise en forme de l'interface utilisateur.</li>
                        <li><strong>PHP :</strong> Gestion des interactions côté serveur et connexion à la base de
                            données.</li>
                        <li><strong>JavaScript (Ajax) :</strong> Manipulation dynamique de la page et interaction en
                            temps réel sans rechargement de la page.</li>
                    </ul>
                </div>

            </v-container>
            <v-container class="container" style="display: flex; flex-direction: row-reverse;">
                <img @click="showModal4 = true" style="margin: 2%; width: 220vw; height: 50vw;" class="depth-right" src="../assets/twitter/message.gif"
                    alt="" srcset="">
                    <div v-if="showModal4" @click="showModal4 = false" class="modal">
                    <div class="modal-content" @click.stop>
                        <img style="margin: 2%; width: 90vw; height: 50vw;" src="../assets/twitter/message.gif" class="responsive" />
                    </div>
                </div>
                <div>
                    <ul>
                        <li><strong>Messagerie inspirée de Twitter</strong></li>
                        <ol>
                            <li><strong>Recherche Intuitive :</strong>
                                <ul>
                                    <li>Utilisation d'AJAX pour effectuer des recherches en temps réel sans recharger la
                                        page.</li>
                                    <li>Les utilisateurs peuvent facilement trouver et démarrer des conversations avec
                                        toutes les personnes inscrites sur le site.</li>
                                </ul>
                            </li>
                            <li><strong>Design des Messages :</strong>
                                <ul>
                                    <li>Les messages sont stylisés pour ressembler à ceux de Twitter, offrant une
                                        expérience utilisateur familière et agréable.</li>
                                    <li>Chaque message inclut l'avatar de l'utilisateur, le texte du message et l'heure
                                        d'envoi.</li>
                                </ul>
                            </li>
                            <li><strong>Affichage des Conversations :</strong>
                                <ul>
                                    <li>La colonne de gauche affiche les dernières personnes avec qui l'utilisateur a
                                        discuté.</li>
                                    <li>Les conversations récentes sont organisées par ordre chronologique, facilitant
                                        l'accès rapide aux discussions en cours.</li>
                                </ul>
                            </li>
                            <li><strong>Fonctionnalités Additionnelles :</strong>
                                <ul>
                                    <li>Bouton "Nouveau message" pour démarrer une nouvelle conversation facilement.
                                    </li>
                                    <li>Interface utilisateur responsive, optimisée pour une utilisation sur différents
                                        appareils (desktop, tablette, mobile).</li>
                                    <li>Système de notification en temps réel pour alerter les utilisateurs des nouveaux
                                        messages reçus.</li>
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