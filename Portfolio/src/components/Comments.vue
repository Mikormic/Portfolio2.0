<template>
    <v-container style="position: relative; top: 30vw;" id="comments">
      <v-card>
        <v-container style="max-height: 300px; overflow-y: auto;">
          <v-card v-for="(comment, index) in [...data].reverse()" :key="index">
            <v-container>
              <img style="width: auto; margin-bottom: -3vw;" :src="getRandomImage()" alt="Profile Picture">
              <v-container>
                <p class="font-weight-bold" style="color: black;">{{ comment.pseudo }}</p>
                <p style="margin-top: -6vw;" @click="limitOrNot" class="text-black text-center">
                  {{ limit ? comment.comment : limitCharact(comment.comment, 350) }}
                </p>
              </v-container>
              <button @click="likeMessage(comment._id)" class="position-absolute bottom-0 right-0 pt-1">
                <img style="width: auto;" src="../assets/profilPicture/icons8-like-481.png" alt="Like Icon">
                <span>{{ comment.like }}</span>
              </button>
            </v-container>
          </v-card>
        </v-container>
  
        <v-container>
          <v-row>
            <v-col class="flex flex-col space-y-4">
              <v-col cols="12" sm="2">
                <v-textarea v-model="pseudo" label="Pseudo" row-height="15" rows="1" variant="outlined"
                  auto-grow></v-textarea>
              </v-col>
              <v-textarea v-model="message" label="Comment" type="text"></v-textarea>
              <v-btn block @click="sendMessage" :disabled="!isValidComment">Send</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  
  // Define the interface for comments
  interface Comment {
    _id: string;
    pseudo: string;
    comment: string;
    like: number;
  }
  
  const data = ref<Comment[]>([]);
  const route = useRoute();
  
  async function fetchData() {
    let url: string;
    switch (route.path) {
      case '/puissance4':
        url = 'https://backend-ox88.onrender.com/puissance4/show';
        break;
      case '/twitter':
        url = 'https://backend-ox88.onrender.com/twitter/show';
        break;
      case '/tcg':
        url = 'https://backend-ox88.onrender.com/tcg/show';
        break;
      case '/newsfeed':
        url = 'https://backend-ox88.onrender.com/newsfeed/show';
        break;
      default:
        return;
    }
  
    try {
      const response = await axios.get(url);
      data.value = response.data;
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }
  
  onMounted(() => {
    fetchData();
  });
  
  const imagePaths = ref([
  new URL('@/assets/profilPicture/icons8-cloud-akatsuki-96.png', import.meta.url).href,
  new URL('@/assets/profilPicture/icons8-doraemon-96.png', import.meta.url).href,
  new URL('@/assets/profilPicture/icons8-dragon-ball-legends-100.png', import.meta.url).href,
  new URL('@/assets/profilPicture/icons8-monkey-d-luffy-96.png', import.meta.url).href,
  new URL('@/assets/profilPicture/icons8-sakura-haruno-96.png', import.meta.url).href,
  new URL('@/assets/profilPicture/icons8-satoru-gojo-96.png', import.meta.url).href,
  new URL('@/assets/profilPicture/icons8-spider-man-head-96.png', import.meta.url).href,
  new URL('@/assets/profilPicture/icons8-vegeta-96.png', import.meta.url).href,
  new URL('@/assets/profilPicture/icons8-vegeta-100.png', import.meta.url).href,
]);

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imagePaths.value.length);
  return imagePaths.value[randomIndex];
}
  
  const message = ref('');
  const pseudo = ref('');
  const isValidComment = computed(() => {
    return pseudo.value.length <= 10 && message.value.length >= 15;
  });
  
  async function sendMessage() {
    if (!isValidComment.value) {
      return;
    }
  
    let url: string;
    switch (route.path) {
      case '/puissance4':
        url = 'https://backend-ox88.onrender.com/puissance4/insert';
        break;
      case '/twitter':
        url = 'https://backend-ox88.onrender.com/twitter/insert';
        break;
      case '/tcg':
        url = 'https://backend-ox88.onrender.com/tcg/insert';
        break;
      case '/newsfeed':
        url = 'https://backend-ox88.onrender.com/newsfeed/insert';
        break;
      default:
        return;
    }
  
    try {
      const response = await axios.post(url, { comment: message.value, pseudo: pseudo.value });
      console.log('Message sent:', response);
      message.value = '';
    } catch (error) {
      console.error('Error sending comment:', error);
    }
  
    fetchData();
  }
  
  async function likeMessage(id: string) {
    let url: string;
    switch (route.path) {
      case '/puissance4':
        url = 'https://backend-ox88.onrender.com/puissance4/like';
        break;
      case '/twitter':
        url = 'https://backend-ox88.onrender.com/twitter/like';
        break;
      case '/tcg':
        url = 'https://backend-ox88.onrender.com/tcg/like';
        break;
      case '/newsfeed':
        url = 'https://backend-ox88.onrender.com/newsfeed/like';
        break;
      default:
        return;
    }
  
    try {
      const userIp = await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip);
      const response = await axios.post(url, { id, userIp });
      console.log('like update:', response.data);
    } catch (error) {
      console.error('Error like:', error);
    }
  
    fetchData();
  }
  
  const limit = ref(false);
  function limitOrNot() {
    limit.value = !limit.value;
  }
  
  function limitCharact(text: string | undefined, limit: number) {
    const safeText = text || '';
    return safeText.length > limit ? safeText.substring(0, limit) + ' ...' : safeText;
  }
  </script>
  
  <style>
  #comments {
    width: 90vw;
  }
  </style>
  