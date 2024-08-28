<template>

  <v-container style="padding: 5%;">
    <RouterLink to="/"><v-img :width="100" aspect-ratio="16/9" cover src="../assets/icons/vers-le-haut.png" id="arrow"></v-img></RouterLink>
    <p style="color: #EF798A;">
      À 16 ans, j’ai eu mon premier contact avec le monde du développement informatique, une étincelle allumée par mon
      oncle qui m’a fait découvrir un site de programmation. Cette découverte a été le début d’une passion qui ne m’a
      plus quitté. J’ai rapidement plongé dans l’univers du code à travers des jeux éducatifs, cherchant à définir mon
      avenir professionnel.

      Le jeu vidéo a toujours été mon domaine de prédilection, un rêve que je nourris depuis l’enfance. J’ai commencé
      par maîtriser les bases du web : HTML, CSS, puis JavaScript. C’est en me confrontant aux tests d’entrée de
      diverses formations que j’ai fait la connaissance du PHP, un langage qui allait s’avérer central dans ma
      formation.

      Mon expérience a été marquée par un événement inattendu : un tournoi de Magik. Sans expérience préalable, j’ai
      appris les règles du jeu en une semaine et, contre toute attente, je me suis hissé en demi-finale. Ce succès m’a
      ouvert les portes d’une formation en développement web/mobile, WebForce 3.

      Mon parcours académique a pris une tournure significative avec Webforce 3, où j’ai acquis une certification en
      développement web. Mais la pandémie m’a empêché de poursuivre en alternance.

      J’ai également tenté d’intégrer l’école 42, tout en consolidant mon expérience professionnelle en tant que
      vendeur. Aujourd’hui, à 26 ans, je continue de me former à la Webacadémie et j’ai l’opportunité de m’épanouir en
      alternance chez Ubisoft, le leader français du jeu vidéo. Cette expérience est l’aboutissement d’un parcours
      déterminé et le début d’une carrière prometteuse dans l’industrie qui me passionne.
    </p>
  </v-container>
</template>

<script setup lang="ts">

</script>


<style>
@font-face {
  font-family: 'akzidenz-grotesk';
  src: url('../../public/fonts/AkzidenzGroteskBE-Light.otf') format('opentype');
}

p {
  padding: 5%;
  font-weight: bold;
  font-family: 'akzidenz-grotesk', sans-serif;
}
#arrow{
  transform: rotate(180deg);
}
</style>