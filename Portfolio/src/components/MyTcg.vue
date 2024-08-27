<template>
    <div style="position: relative;top: 10vw;">
     <h1 :style="{ opacity: titleOpacity }" id="h1-twitter">TCG</h1>
     <div style="display: flex; flex-direction: column;">
     <img style="position: relative; left: 28vw;width:45vw !important" src="../assets/my-tcg/my-tcg.gif" alt="">
     <div>
        <ul>
  <li><strong>Titre du projet :</strong> W3 - Tests (W-WEB-310) : My_TCG</li>
  <li><strong>Objectif :</strong> 
    <ul>
      <li>Initiation aux tests unitaires en développant la logique métier d'un jeu de cartes à collectionner (TCG).</li>
      <li>Garantir la qualité du code à travers les tests unitaires.</li>
    </ul>
  </li>
  <li><strong>Méthode de livraison :</strong> 
    <ul>
      <li>Dépôt sur GitHub</li>
      <li>Inclure tous les fichiers sources nécessaires, excluant les fichiers inutiles (binaires, fichiers temporaires, etc.)</li>
      <li>Les fichiers bonus doivent être dans un répertoire "bonus".</li>
      <li>Les messages d'erreur doivent être écrits sur la sortie d'erreur standard et le programme doit sortir avec le code d'erreur 84 (0 s'il n'y a pas d'erreur).</li>
    </ul>
  </li>
  <li><strong>Technologie :</strong> 
    <ul>
      <li>Langage : JavaScript (ES6)</li>
      <li>Aucun outil de build requis</li>
      <li>Utiliser le framework Jasmine pour le développement dirigé par le comportement (BDD)</li>
    </ul>
  </li>
  <li><strong>Déroulement du projet :</strong>
    <ol>
      <li><strong>Bootstrap et Introduction :</strong>
        <ul>
          <li>Recherche sur la méthodologie BDD promue par Jasmine.</li>
          <li>Commencer par configurer et exécuter correctement les tests Jasmine.</li>
        </ul>
      </li>
      <li><strong>Premiers tests unitaires :</strong>
        <ul>
          <li>Écrire les tests selon les spécifications avant d'implémenter les méthodes.</li>
          <li>Suivre la philosophie BDD en écrivant les tests au fur et à mesure de la définition du comportement souhaité de l'application.</li>
          <li>Implémenter et tester les classes suivantes :</li>
          <ul>
            <li><strong>Deck :</strong> gestion d'un paquet de cartes (méthodes : shuffle, insertAt, draw, getCardsCount)</li>
            <li><strong>Hand :</strong> gestion de la main d'un joueur (méthodes : addCard, removeCard, getAllCards, getCardsCount)</li>
            <li><strong>Board :</strong> gestion des cartes en jeu (étend Hand)</li>
            <li><strong>Cemetary :</strong> gestion du cimetière (étend Deck)</li>
            <li><strong>Pawn :</strong> éléments pouvant combattre (méthodes : getLife, getStrength, getDef, attack, receiveAttack)</li>
            <li><strong>Player :</strong> gestion d'un joueur (propriétés : Deck, Board, Hand, Cemetary ; méthodes : shuffle, draw, playCard, discard, attack)</li>
            <li><strong>Game :</strong> encapsulation du jeu (méthodes : proxy, getTurn, changeTurn)</li>
          </ul>
        </ul>
      </li>
      <li><strong>Let’s Play :</strong>
        <ul>
          <li>Développer le jeu en suivant des objectifs progressifs, par exemple :</li>
          <ul>
            <li>Afficher les cartes de la main du joueur courant dans la console.</li>
            <li>Ajouter des cartes au deck, piocher 7 cartes en début de jeu, afficher les PV des joueurs, permettre à une carte d’attaquer un joueur, etc.</li>
          </ul>
          <li>La logique de jeu et l'interface graphique doivent être bien séparées, avec des points de contact limités (seul l'arène doit communiquer avec le modèle).</li>
        </ul>
      </li>
    </ol>
  </li>
</ul>

     </div>
    </div>
</div>
<Comments />

</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount } from 'vue';

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
}</style>