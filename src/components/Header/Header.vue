<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Stocker</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-newspaper</v-icon>
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
      return {
          items: [
        { title: 'Account', icon: 'mdi-account-box-outline'},
        { title: 'Home', icon: 'mdi-home' },
        { title: 'News', icon: 'mdi-newspaper' },
        { title: 'Notifications', icon: 'mdi-notification-clear-all'}
      ],
    }
  }
};
</script>

<style scoped>

</style>