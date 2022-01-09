<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!--    <NavBar/>-->
    <!--    <router-view :key="$route.fullPath"/>-->
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/styles/app.scss";
</style>
