<template>
  <main>
    <RouterLink to="/">
      <img
      v-if="showArrow"
      class="arrow animate__animated animate__backInUp"
      src="https://media.tenor.com/xxUK8KWCD1AAAAAj/spiderman.gif"
      alt=""
      srcset=""
    ></RouterLink>
    <v-container class="navme">
      
    <div :style="{ opacity: titleOpacity }">
    <RouterLink id="title" to="/" >
      <span class="animate__animated animate__backInLeft">MIKE</span>
      <span class="animate__animated animate__backInRight">.co</span>
  </RouterLink>
    <ul class="animate__animated animate__backInUp">
      <li>
        <a href="/">À propos</a>
      </li>
      <li>
        <a href="/">CV</a>
      </li>
      <li>
        <a href="/">mickael.lesueur@epitech.eu</a>
      </li>
    </ul>
  </div>
  </v-container>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const hasScrolled = ref(false);
const showArrow = ref(false);
const titleOpacity = ref(1);

const handleScroll = () => {
  const maxScroll = 200; // Ajustez cette valeur selon vos besoins
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  titleOpacity.value = Math.max(0, 1 - scrollTop / maxScroll);
  hasScrolled.value = window.scrollY > 0;
  showArrow.value = hasScrolled.value && route.path !== '/';
};
// const handleScroll = () => {
//   hasScrolled.value = window.scrollY > 0;
//   showArrow.value = hasScrolled.value && route.path !== '/';
// };

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.arrow{
    position: fixed !important;
    width: 6vw;
    right: 10px;
    z-index: 1000;
}

.navme {
  position: fixed;
  left: 50px;
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


</style>
