<template>
  <div class="app">
    <password-generator></password-generator>
    <password-history></password-history>
  </div>
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


li,
a {
  cursor: pointer;
  list-style: none;
  text-decoration: none;
}

.app {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  margin: auto;
}
</style>
