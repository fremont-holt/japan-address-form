<template>
  <div>
    <navBar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Titillium+Web&display=swap');
html {
  font-family: 'Titillium Web', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #404040;
}
</style>
