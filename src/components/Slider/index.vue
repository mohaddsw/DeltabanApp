<template>
  <div
    class="sliderWrapper"
    @mousedown="start"
    @mousemove="move"
    @mouseup="end"
    ref="slider"
    :style="marginStyle"
  >
    <div class="slider_item">
      <img src="../../assets/images/5.jpeg" alt="" />
      <span>Maldiv</span>
    </div>
    <div class="slider_item">
      <img src="../../assets/images/4.jpeg" alt="" />
      <span>Maldiv</span>
    </div>
    <div class="slider_item">
      <img src="../../assets/images/3.jpeg" alt="" />
      <span>Maldiv</span>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
