<template>
  <v-app>
    <v-content>
      <Nav />
    </v-content>
  </v-app>
</template>

<script>
import Nav from './components/Nav';

export default {
  name: 'App',

  components: {
    Nav,
  },
};
</script>
