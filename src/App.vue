<template>
  <div class="app">
    <password-generator></password-generator>
    <password-history></password-history>
  </div>
  <span>{{ $store.getters.setPassword }}</span>
</template>

<script>

import passwordGenerator from '@/components/passwordGenerator.vue';
import passwordHistory from '@/components/passwordHistory.vue';

export default {
  components: {
    passwordGenerator, passwordHistory
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow&family=Tomorrow:wght@400;600;700&display=swap");

$orange: #f8ef00;
$light: #fafafa;
$aqua: #00f0ff;
$grey: #bbbbbb;

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: black;
}

section {
  padding: 0px 15px;
}


li,
a {
  cursor: pointer;
  list-style: none;
  text-decoration: none;
}

.app {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}

@media(max-width:1115px) {
  .app {
    display: block;
  }
}
</style>
