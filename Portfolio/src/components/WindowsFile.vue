<template>
    <v-container class="perspective-box-far">
        <RouterLink class="face front" to="/puissance4"><h1 class="h1-home animate__animated" :class="{ 'animate__bounceInDown': Animations }">Puissance4</h1></RouterLink>
        <RouterLink class="face front" to="/twitter"><h1 class="h1-home animate__animated" :class="{ 'animate__bounceInDown': Animations }">Twitter</h1></RouterLink>
        <RouterLink class="face front" to="/my-tcg"><h1 class="h1-home animate__animated" :class="{ 'animate__bounceInDown': Animations }">TCG</h1></RouterLink>
        <RouterLink class="face front" to="/newsfeed"><h1 class="h1-home animate__animated" :class="{ 'animate__bounceInDown': Animations }">NewsFeed</h1></RouterLink>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import 'animate.css';

const Animations = ref(true);

onMounted(() => {
  const hasVisited = localStorage.getItem('hasVisited');
  if (hasVisited) {
    Animations.value = false;
  } else {
    localStorage.setItem('hasVisited', 'true');
  }
});
</script>

<style>
.h1-home{
  font-size: 6.4vw;
  animation-duration: 5s;
}

.background-square {
  position: fixed;
  bottom: 25%;
  left: -30vw;
  height: 1vh;
}

body{
  background-color: #881A1A;
}
@font-face {
  font-family: 'Druk Text Wide Heavy Trial';
  src: url('../../public/fonts/DrukTextWide-Heavy-Trial.otf') format('opentype');
}
@font-face {
  font-family: 'akzidenz-grotesk';
  src: url('../../public/fonts/AkzidenzGroteskBE-Light.otf') format('opentype');
}
a{
  text-decoration: none;
}
.navme {
  position: fixed;
  left: 50px;
}
ul{
  padding-top: 3%;
}
li{
  list-style: none;
}
li a{
  margin-bottom: 0.5%;
  list-style: none;
  font-family: 'akzidenz-grotesk', sans-serif;
}
li a:hover {
  font-size: 0.7vw;
  transition: .3s all ease-in-out;
}
li a:visited{
  color: #ffffff;
}
* {
  cursor: url('../assets/point.png'), auto;
}
#title{
  display:flex;
  flex-direction: column;
  font-size: 3vw;
  line-height: .6em;
  font-family: 'Druk Text Wide Heavy Trial', sans-serif;
  color: #ffffff;
}
#title:hover {
  transition: .5s all ease-in-out;
  color: transparent;
  -webkit-text-stroke: 2px #EF798A;
}
.face:hover {
  transform: perspective(100px) rotateX(0deg) rotateY(0deg);
  transition: .3s all ease-in-out;
  color: transparent;
  -webkit-text-stroke: 2px #EF798A;
}
.face {
  padding-bottom: 6%;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 6.4vw; 
  font-family: 'Druk Text Wide Heavy Trial', sans-serif;
  line-height: 0.3em;
  transition: transform .5s, box-shadow .5s;
  z-index: 1;
  transform: perspective(200px) rotateX(0deg) rotateY(-3deg);
  word-break: break-word; 
  overflow-wrap: break-word; 
  max-width: 100%; 
  text-align: right; 
  align-self: flex-end;
}

.perspective-box-far {
  margin-top: 5%;
  margin-right: 200px !important;
  width: 95%;
  display: flex;
  flex-direction: column;
  max-width: 100vw; 
  text-align: right; 
}
/* Petits écrans (téléphones en mode portrait) */
@media (max-width: 519px) {
  .perspective-box-far {
  position: fixed;
  top: 70vw;
  margin-right: 200px !important;
}

.face {
  font-size: 30vw;
}

.h1-home{
  font-size: 10vw;
  animation-duration: 5s;
}

.background-square {
  position: fixed;
  bottom: 20%;
  left: -30vw;
}

}

@media (min-width: 520px) and (max-width: 599px) {
  .perspective-box-far {
  position: fixed;
  bottom: 1vw;
}

.face {
  font-size: 30vw;
}

.h1-home{
  font-size: 10vw;
  animation-duration: 5s;
}

.background-square {
  position: fixed;
  top: 20%;
  right: -50vw;
}

}

@media (min-width: 600px) and (max-width: 767px) {
  .background-square {
  position: fixed;
  bottom: 32%;
  left: -30vw;
  height: 1vh;
}
}

/* Tablettes */
@media (min-width: 768px) and (max-width: 1023px) {
  .background-square {
  position: fixed;
  bottom: 30%;
  left: -30vw;
  height: 1vh;
}
}

</style>
