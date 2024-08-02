<template>
    <div id="div-twitter">
        <h1 :style="{ opacity: titleOpacity }" id="h1-twitter">NewsFeed</h1>
        <div id="container-show" style="display: flex; flex-direction: column;">
            <v-container class="container" style="display: flex;">
                <img src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="" srcset=""
                    class="animate__animated animate__fadeInTopLeft">
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda id neque quisquam maiores debitis laudantium ex ipsum ad fugiat! Enim saepe ex praesentium rem provident at, corrupti est pariatur.</p>
                </div>
            </v-container>
            <v-container class="container" style="display: flex; flex-direction: row-reverse;">
                <img style="width: 60vw;height: 30vw;" src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="" srcset=""
                    class="animate__animated animate__fadeInTopRight">
                <div>
                   <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione deserunt ut dolore quos a, eveniet debitis inventore veritatis id, eaque reiciendis iusto laborum commodi libero placeat maxime facere autem. Accusantium!</p>
                </div>
            </v-container>
            <v-container class="container" style="display: flex;">
                <img style="width: 60vw;height: 30vw;" src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="" srcset="">
                <div>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis repellat ad ipsa porro, id itaque excepturi perspiciatis animi earum similique mollitia. Velit officia quis corporis doloribus deleniti id voluptates!</p>
                </div>

            </v-container>
            <v-container class="container" style="display: flex; flex-direction: row-reverse;">
                <img src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg" alt="" srcset="">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam dolores quidem, corrupti illum, a
                    minima
                    aperiam ex expedita quibusdam odio rerum. Aut expedita doloremque, accusamus quos et sunt
                    consectetur
                    impedit.
                    Aliquam illo explicabo reiciendis recusandae iure sequi, minus autem accusamus accusantium dolore
                    officiis quae obcaecati molestiae repellendus expedita quam vel ab at consectetur sunt optio. Odio
                    voluptas quod distinctio aliquam?
                    Iure ipsam ab explicabo eaque assumenda temporibus aperiam, culpa error dolorem voluptatum quisquam
                    sint
                    excepturi odit quasi debitis rem, ratione incidunt dolores quae id saepe! Repudiandae optio nesciunt
                    vero natus.</p>
            </v-container>
        </div>
    </div>
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
.container{
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

img {
    width: 30vw;
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
</style>