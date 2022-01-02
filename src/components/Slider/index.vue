<template>
  <div class="sliderWrapper" :style="marginStyle">
    <div v-for="item in filteredData" :key="item.id" class="slider_item">
      <img :src="require('../../assets/images/' + item.image)" alt="" />
      <span>{{ item.name }}</span>
    </div>
    <div class="next" @click="move($event, 'next', filteredData.length)">
      <v-icon> fas fa-caret-right </v-icon>
    </div>
    <div class="prev" @click="move($event, 'prev', filteredData.length)">
      <v-icon> fas fa-caret-left </v-icon>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
