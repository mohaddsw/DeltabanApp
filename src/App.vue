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

a {
  text-decoration: none;
}
li {
  list-style: none;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently
                                    supported by Chrome and Opera */
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
