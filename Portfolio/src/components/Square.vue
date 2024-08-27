<template>
  <v-container class="animation-container">
    <div class="square">
      <div v-for="(item, index) in items" :key="index"
        :class="['item', `position-${positions[index]}`, { 'hovered-item': hoveredIndex === index }]"
        @mouseover="onHover(index)" @mouseleave="onLeave">
          <a :href="links[index].src"><v-img width="20" :src="item.src"></v-img>ok</a>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const items = ref([
  { src: new URL('@/assets/icons/icons8-git-50.png', import.meta.url).href },
  { src: new URL('@/assets/icons/icons8-instagram-50.png', import.meta.url).href },
  { src: new URL('@/assets/icons/icons8-linkedin-50.png', import.meta.url).href },
  { src: new URL('@/assets/icons/icons8-twitter-50.png', import.meta.url).href }
]);

const links = ref([
  { src: ('https://github.com/Mikormic/Portfolio2.0') },
  { src: ('/') },
  { src: ('https://www.linkedin.com/in/micka%C3%ABl-lesueur-4748a5201/') },
  { src: ('/') }
])
const positions = ref([0, 1, 3, 2]); // Initial positions: top-left, top-right, bottom-right, bottom-left
const isHovered = ref(false);
const hoveredIndex = ref<number | null>(null);
const onHover = (index: number) => {
  isHovered.value = true;
  hoveredIndex.value = index;

  // Get the positions of the items not being hovered
  const otherPositions = positions.value.filter((_, i) => i !== index);

  // Calculate new positions for the other items
  otherPositions.forEach((pos, idx) => {
    let targetPos = idx === otherPositions.length - 1 ? 0 : idx + 1;
    let div = document.querySelector(`.position-${pos}`) as HTMLElement;
    if (div) {
      div.style.transform = getTransformForPosition(targetPos);
    }
  });
};

const onLeave = () => {
  isHovered.value = false;
  hoveredIndex.value = null;
  resetTransforms();
};

const resetTransforms = () => {
  positions.value.forEach(pos => {
    let div = document.querySelector(`.position-${pos}`) as HTMLElement;
    if (div) {
      div.style.removeProperty('transform');
    }
  });
};

const getTransformForPosition = (position: number) => {
  switch (position) {
    case 0:
      return 'translate(50px, 150px)';
    case 1:
      return 'translate(50px, 75px)';
    case 2:
      return 'translate(50px, 0px)';
    case 3:
      return 'translate(50px, 75px)';
    default:
      return '';
  }
};

let intervalId: number | undefined;

const shuffleItems = () => {
  if (!isHovered.value) {
    positions.value = [positions.value[1], positions.value[2], positions.value[3], positions.value[0]];
  }
};

onMounted(() => {
  intervalId = window.setInterval(shuffleItems, 2000);
});

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
.animation-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: transparent;
}

a:visited {
  text-decoration: none;
  color: transparent;
}

.square {
  position: relative;
}

.item {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  transition: transform 0.5s ease-in-out;
}

.position-0 {
  transform: translate(0, 0);
}

.position-1 {
  transform: translate(100px, 0);
}

.position-2 {
  transform: translate(0, 100px);
}

.position-3 {
  transform: translate(100px, 100px);
}
</style>