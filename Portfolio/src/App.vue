<template>
  <main>
    <RouterLink to="/">
      <img v-if="showArrow" class="arrow animate__animated animate__backInUp"
        src="../src/assets/icons/vers-le-haut.png" alt="" srcset="">
    </RouterLink>
    <v-container v-if="isHomePage" class="navme">

      <div :style="{ opacity: titleOpacity }">
        <RouterLink id="title" to="/">
          <span class="animate__animated" :class="{ 'animate__animated animate__backInLeft': Animations }">MIKE</span>
          <span class="animate__animated" :class="{ 'animate__animated animate__backInRight': Animations }">.co</span>
        </RouterLink>
        <ul class="animate__animated" :class="{ 'animate__animated animate__backInUp': Animations }">
          <li>
            <RouterLink class="link-span" to="/about">À propos</RouterLink>
          </li>
          <li>
            <RouterLink class="link-span" to="/cv">CV</RouterLink>
          </li>
          <li>
            <a class="link-span" href="mailto:lesueur774@gmail.com">lesueur774@gmail.com</a>
          </li>
          <li style="display: flex; flex-direction: row;">
            <a href="https://www.linkedin.com/in/micka%C3%ABl-lesueur-4748a5201/"><v-img width="30" src="@/assets/icons/icons8-linkedin-50.png"></v-img></a>
            <a href="https://github.com/Mikormic/Portfolio2.0"><v-img width="30" src="@/assets/icons/icons8-git-50.png"></v-img></a>
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

watch(() => route.path, (newPath: string) => {
  isHomePage.value = newPath === '/';
});

const handleScroll = () => {
  const maxScroll = 200;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  titleOpacity.value = Math.max(0, 1 - scrollTop / maxScroll);
  hasScrolled.value = window.scrollY > 0;
  showArrow.value = hasScrolled.value && (route.path !== '/' && route.path !== '/cv' && route.path !== '/about');
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
  transform: rotate(180deg) !important;
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

.link-span {
  text-decoration: none;
  color: #ffffff;
  font-size: larger;
  border-bottom: 1px solid #EF798A;
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
  .arrow {
    width: 25vw;
}
}

/* Petits écrans (téléphones en mode paysage) */
@media (min-width: 600px) and (max-width: 767px) {
  .arrow {
    width: 15vw;
}
}

/* Tablettes */
@media (min-width: 768px) and (max-width: 1023px) {
  .arrow {
    width: 15vw;
}
}

/* Petits ordinateurs portables ou grands tablettes */
@media (min-width: 1024px) and (max-width: 1279px) {
  .arrow {
    width: 5vw;
}
}

/* Ordinateurs de bureau */
@media (min-width: 1280px) and (max-width: 1919px) {
  .arrow {
    width: 5vw;
}
}

/* Grands écrans (moniteurs haute résolution) */
@media (min-width: 1920px) {
  .arrow {
    width: 5vw;
}
}
</style>
