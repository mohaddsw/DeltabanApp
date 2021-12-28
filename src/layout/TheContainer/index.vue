<template>
  <div class="theCountainerAppWrapper">
    <TheHeader />
    <div class="theCountainerAppWrapper_body">
      <main class="theCountainerAppWrapper_main">
        <div class="theCountainerAppWrapper_content">
          <router-view :key="$route.path"></router-view>
        </div>
      </main>
    </div>
    <TheFooter />
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
