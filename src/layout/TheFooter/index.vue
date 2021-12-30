<template>
  <div class="theCountainerFooterWrapper">
    <nav class="navgation">
      <ul>
        <li v-for="item in nav" :key="item.url" @click="activeClassFunc(item)">
          <router-link :to="item.url">
            <v-icon :class="activeClass === item.name ? 'active' : ''">
              {{ item.icon }}
            </v-icon>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
