/* eslint-disable vue/no-parsing-error */
<template>
  <!-- eslint-disable-next-line -->
  <v-container>
      <v-navigation-drawer
        v-model="drawer"
        :height="height"
        :color="color"
        :width="width"
        :expand-on-hover="true"
        :mini-variant-width="70"
        :right="false"
        :permanent="true"
        :fixed="true"
        absolute
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="../../public/me.jpg">
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title
                  dense="true"
                  dark
                >Damoon Shahhosseini</v-list-item-title>
                <v-list-item-subtitle>Student</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

          <v-divider></v-divider>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
          >
            <v-list-item-icon class="list-item">
              <v-icon>{{ item.icon }} </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: 'nav',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home' },
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      color: '#334455',
      width: window.innerWidth / 4,
      mvwidth: window.innerWidth / 5,
    };
  },
};
</script>

<style scoped>
  * {
    padding: 0%;
  }
</style>
