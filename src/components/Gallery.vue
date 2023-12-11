<template>
    <div :id="galleryID">
        <div class="image">
            <div class="magnify" @click="handleZoomButtonClick(index)"><img src="@/assets/icons/search.png"></div>
            <a class="image-item" v-for="(image, index) in imagesData" :key="index" :href="image.largeURL" disabled
                :data-pswp-width="image.width" :data-pswp-height="image.height" target="_blank" rel="noreferrer"
                @click.prevent="() => false">
                <img :src="image.thumbnailURL" alt="" class="img-fluid" />
            </a>
        </div>
    </div>
</template>
  
<script setup>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { toRef, onUnmounted, onMounted } from 'vue';

const props = defineProps(['galleryID', 'images']);

const imagesData = toRef(props, 'images');
let lightbox = null;

onMounted(() => {
    if (!lightbox) {
        lightbox = new PhotoSwipeLightbox({
            gallery: `#${props.galleryID}`,
            children: 'a',
            pswpModule: () => import('photoswipe'),
            showHideAnimationType: 'none',
        });
        lightbox.init();
    }
});

onUnmounted(() => {
    if (lightbox) {
        lightbox.destroy();
        lightbox = null;
    }
});

const handleZoomButtonClick = (index) => {
    console.log(index)
    if (lightbox) {
        lightbox.loadAndOpen(index)
        console.log(lightbox)
    }
}
</script>
<style scoped>
.image {
    position: relative;
}

.image-item {
    display: block;
    pointer-events: none;
    cursor: default;
}

.magnify {
    background-color: white;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 900;
    padding: 10px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.magnify img {
    width: 16px;
    height: 16px;
}
</style>
  