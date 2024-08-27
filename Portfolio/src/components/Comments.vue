<template>
    <v-container style="position: relative; top: 30vw;" id="comments">
        <v-card>
            <v-container style="max-height: 300px; overflow-y: auto;">
                <v-card v-for="(comment, index) in [...data].reverse()" :key="index">
                    <v-container>
                        <img style="width: auto; margin-bottom: -3vw;" :src="getRandomImage()" alt="Profile Picture">
                        <v-container >
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

const data = ref([]);
const route = useRoute();

async function fetchData() {
    if (route.path === '/puissance4') {
        try {

            const response = await axios.get('http://localhost:3001/puissance4/show');
            data.value = response.data;
        }
        catch (error) {
            console.error('Error fetching data', error);
        }
    }
    if (route.path === '/twitter') {
        try {

            const response = await axios.get('http://localhost:3001/twitter/show');
            data.value = response.data;
        }
        catch (error) {
            console.error('Error fetching data', error);
        }
    }
    if (route.path === '/tcg') {
        try {

            const response = await axios.get('http://localhost:3001/tcg/show');
            data.value = response.data;
        }
        catch (error) {
            console.error('Error fetching data', error);
        }
    }
    if (route.path === '/newsfeed') {
        try {

            const response = await axios.get('http://localhost:3001/newsfeed/show');
            data.value = response.data;
        }
        catch (error) {
            console.error('Error fetching data', error);
        }
    }
}
onMounted(() => {
    fetchData();
});


const imagePaths = [
    '/src/assets/profilPicture/icons8-cloud-akatsuki-96.png',
    '/src/assets/profilPicture/icons8-doraemon-96.png',
    '/src/assets/profilPicture/icons8-dragon-ball-legends-100.png',
    '/src/assets/profilPicture/icons8-dragon-ball-legends-100.png',
    '/src/assets/profilPicture/icons8-monkey-d-luffy-96.png',
    '/src/assets/profilPicture/icons8-sakura-haruno-96.png',
    '/src/assets/profilPicture/icons8-satoru-gojo-96.png',
    '/src/assets/profilPicture/icons8-spider-man-head-96.png',
    '/src/assets/profilPicture/icons8-vegeta-96.png',
    '/src/assets/profilPicture/icons8-vegeta-100.png',
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    return imagePaths[randomIndex];
}

const message = ref('');
const pseudo = ref('');
const isValidComment = computed(() => {
  return pseudo.value.length <= 10 && message.value.length >= 15;
});


async function sendMessage() {
    console.log('Sending message...');

    if (route.path === '/puissance4') {
        if (!isValidComment.value) {
        return;
        }
        
    try {
        const response = await axios.post('http://localhost:3001/puissance4/insert', { comment: message.value, pseudo: pseudo.value });
        console.log('Message sent:', response);
        message.value = '';
    } catch (error) {
        console.error('Error sending comment:', error);
    }
}

if (route.path === '/twitter') {

try {
    const response = await axios.post('http://localhost:3001/twitter/insert', { comment: message.value, pseudo: pseudo.value });
    console.log('Message sent:', response);
    message.value = '';
} catch (error) {
    console.error('Error sending comment:', error);
}
}

if (route.path === '/tcg') {

try {
    const response = await axios.post('http://localhost:3001/tcg/insert', { comment: message.value, pseudo: pseudo.value });
    console.log('Message sent:', response);
    message.value = '';
} catch (error) {
    console.error('Error sending comment:', error);
}
}

if (route.path === '/newsfeed') {

try {
    const response = await axios.post('http://localhost:3001/newsfeed/insert', { comment: message.value, pseudo: pseudo.value });
    console.log('Message sent:', response);
    message.value = '';
} catch (error) {
    console.error('Error sending comment:', error);
}
}

    fetchData();
}

async function likeMessage(id: any) {
    if (route.path === '/puissance4') {
    try {
        const userIp = await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip);
        const response = await axios.post('http://localhost:3001/puissance4/like', { id, userIp });
        console.log('like update:', response.data);
    } catch (error) {
        console.error('Error like:', error);
    }
}

if (route.path === '/twitter') {
    try {
        const userIp = await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip);
        const response = await axios.post('http://localhost:3001/twitter/like', { id, userIp });
        console.log('like update:', response.data);
    } catch (error) {
        console.error('Error like:', error);
    }
}

if (route.path === '/tcg') {
    try {
        const userIp = await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip);
        const response = await axios.post('http://localhost:3001/tcg/like', { id, userIp });
        console.log('like update:', response.data);
    } catch (error) {
        console.error('Error like:', error);
    }
}

if (route.path === '/newsfeed') {
    try {
        const userIp = await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip);
        const response = await axios.post('http://localhost:3001/newsfeed/like', { id, userIp });
        console.log('like update:', response.data);
    } catch (error) {
        console.error('Error like:', error);
    }
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
#comments{
    width: 90vw;
}
</style>