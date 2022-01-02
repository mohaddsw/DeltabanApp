<template>
  <div class="HomeWrapper">
    <h1 class="Home_title">Where would you like to go?</h1>
    <div class="Home_searchRow">
      <div class="Home_searchDiv">
        <input
          type="text"
          :placeholder="searchObj.placeHolder"
          v-model="searchObj.value"
          @keypress.enter="search"
        />
        <button @click="search">
          <v-icon> fa fa-search </v-icon>
        </button>
      </div>
    </div>
    <h1 class="Home_category">Category</h1>
    <div class="Home_categoriesRow">
      <div class="Home_categoriesDiv">
        <div
          @click="activeCategoryClass(cat)"
          class="item"
          v-for="cat in categories"
          :key="cat.value"
        >
          <v-icon :class="cat.text === activeCat ? 'active' : ''">
            {{ cat.icon }}
          </v-icon>
          <span :class="cat.text === activeCat ? 'active' : ''">{{
            cat.text
          }}</span>
        </div>
      </div>
    </div>
    <div class="Home_sliderRow">
      <SliderComponent
        @changeCat="change = false"
        :change="change"
        :filteredData="filteredTravel"
      />
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
