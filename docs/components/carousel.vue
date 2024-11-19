<script setup>
// Import Third-Party Dependencies
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

// Props
const props = defineProps({
  includes: {
    type: Array,
    required: true,
    validator(value) {
      return value.every(item => typeof item === 'string');
    }
  },
  excludes: {
    type: Array,
    required: false,
    validator(value) {
      return value.every(item => typeof item === 'string');
    }
  }
});

const filteredFiles = CAROUSEL_IMAGE_LIST.filter((file) => {
  const includeMatch = props.includes.every((str) => file.path.match(RegExp(str, "g")) !== null);
  const excludeMatch = props.excludes?.every((str) => file.path.match(RegExp(str, "g")) === null) ?? true;
  
  return includeMatch && excludeMatch;
});
</script>

<style>
.carousel__prev, .carousel__next {
  color: #0bd1d1;
  opacity: 100;
  transition: transform 0.1s ease;
  transform: rotate(0deg);
  top: 48%;
  background-color: #383838;
  border-radius: 5px;
  height: 22px;
  width: 22px;
}
.carousel__next:hover {
  color: rgb(0, 0, 0);
  transform: rotate(0deg) translateX(-2px);
}
.carousel__prev:hover {
  color: rgb(0, 0, 0);
  transform: rotate(0deg) translateX(2px);
}
</style>

<template>
  <div>
    <div v-if="filteredFiles.length === 0">Aucun fichier trouvé pour {{ props.src }}</div>
    <Carousel>
      <Slide v-for="file in filteredFiles" :key="file.name">
        <img :src="'\\' + file.path" :alt="file.name" />
      </Slide>
  
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>