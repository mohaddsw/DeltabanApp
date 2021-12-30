<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
@font-face {
  font-family: "shabnam";
  src: local("shabnam"), url("/../public/fonts/Shabnam.woff2") format("woff2"),
    url("/../public/fonts/Shabnam.woff") format("woff");
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "shabnam";
}
</style>
