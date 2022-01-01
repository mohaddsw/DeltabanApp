<template>
  <div class="HomeWrapper">
    <h1 class="Home_title">Where would you like to go?</h1>
    <div class="Home_searchRow">
      <div class="Home_searchDiv">
        <input type="text" />
        <button>
          <v-icon> fa fa-search </v-icon>
        </button>
      </div>
    </div>
    <h1 class="Home_category">Category</h1>
    <div class="Home_categoriesRow">
      <div class="Home_categoriesDiv">
        <div class="item">
          <v-icon class="active"> fas fa-place-of-worship </v-icon>
          <span class="active">place</span>
        </div>
        <div class="item">
          <v-icon> fas fa-plane </v-icon>
          <span>place</span>
        </div>
        <div class="item">
          <v-icon> fas fa-hotel </v-icon>
          <span>place</span>
        </div>
        <div class="item">
          <v-icon> fas fa-concierge-bell </v-icon>
          <span>place</span>
        </div>
      </div>
    </div>
    <div class="Home_sliderRow">
      <SliderComponent />
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
