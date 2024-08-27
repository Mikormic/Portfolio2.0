<template>
  <main>
    <RouterLink to="/">
      <img v-if="showArrow" style="width: 10vw;" class="arrow animate__animated animate__backInUp"
        src="https://media.tenor.com/xxUK8KWCD1AAAAAj/spiderman.gif" alt="" srcset="">
    </RouterLink>
    <v-container v-if="isHomePage" class="navme">

      <div :style="{ opacity: titleOpacity }">
        <RouterLink id="title" to="/">
          <span class="animate__animated" :class="{ 'animate__animated animate__backInLeft': Animations }">MIKE</span>
          <span class="animate__animated" :class="{ 'animate__animated animate__backInRight': Animations }" >.co</span>
        </RouterLink>
        <ul class="animate__animated" :class="{ 'animate__animated animate__backInUp': Animations }">
          <li>
        <RouterLink class="link-span" to="/about">À propos</RouterLink>
          </li>
          <li>
        <RouterLink class="link-span" to="/cv">CV</RouterLink>
          </li>
          <li>
            <a class="link-span" href="/">mickael.lesueur@epitech.eu</a>
          </li>
        </ul>
      </div>
    </v-container>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const hasScrolled = ref(false);
const showArrow = ref(false);
const showList = ref(false);
const titleOpacity = ref(1);

const isHomePage = ref(route.path === '/');

const Animations = ref(true);

onMounted(() => {
  const Visite = localStorage.getItem('Visite');
  if (Visite) {
    Animations.value = false;
  } else {
    localStorage.setItem('Visite', 'true');
  }
});

// Surveille les changements de route
watch(() => route.path, (newPath) => {
  isHomePage.value = newPath === '/';
});

const handleScroll = () => {
  const maxScroll = 200; // Ajustez cette valeur selon vos besoins
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  titleOpacity.value = Math.max(0, 1 - scrollTop / maxScroll);
  hasScrolled.value = window.scrollY > 0;
  showArrow.value = hasScrolled.value && route.path !== '/';
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.arrow {
  position: fixed !important;
  width: 6vw;
  right: 10px;
  z-index: 1000;
}

.navme {
  position: fixed;
  left: 50px;
}

#title {
  display: flex;
  flex-direction: column;
  font-size: 3vw;
  line-height: .6em;
  font-family: 'Druk Text Wide Heavy Trial', sans-serif;
  color: #ffffff;
}

.link-span{
  text-decoration: none;
  color: #ffffff;
}

#title:hover {
  transition: .5s all ease-in-out;
  color: transparent;
  -webkit-text-stroke: 2px #EF798A;
}

@media (max-width: 599px) {
  .navme {
    margin-top: 5%;
  }

  .navme span {
    font-size: 15vw;
    margin-bottom: 10%;
  }
}

/* Petits écrans (téléphones en mode paysage) */
@media (min-width: 600px) and (max-width: 767px) {
  /* Styles pour les téléphones en mode paysage */
}

/* Tablettes */
@media (min-width: 768px) and (max-width: 1023px) {
  /* Styles pour les tablettes */
}

/* Petits ordinateurs portables ou grands tablettes */
@media (min-width: 1024px) and (max-width: 1279px) {
  /* Styles pour les petits ordinateurs portables */
}

/* Ordinateurs de bureau */
@media (min-width: 1280px) and (max-width: 1919px) {
  /* Styles pour les ordinateurs de bureau */
}

/* Grands écrans (moniteurs haute résolution) */
@media (min-width: 1920px) {
  /* Styles pour les grands écrans */
}
</style>
