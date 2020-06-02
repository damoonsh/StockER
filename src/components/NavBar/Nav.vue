/* eslint-disable vue/no-parsing-error */
<template>
  <!-- eslint-disable-next-line -->
  <v-container>
      <v-navigation-drawer
        v-model="drawer"
        :color="color"
        :width="200"
        :expand-on-hover="true"
        :mini-variant-width="70"
        :right="false"
        :permanent="true"
        :fixed="true"
        class="nav-bar"
        absolute
        dark
      >
        <v-list
          dense
          nav
          class="py-0"
        >
          <v-list-item 
          two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="../../../public/me.jpg">
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
          <div class="items-container">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }} </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          
          
              <v-list-item 
              link
              @click="closeApp"
            >
              <v-list-item-icon>
                <v-icon>mdi-close</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                  <v-list-item-title>QUIT</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            
            
          </div>
          
          
        </v-list>
      </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Account', icon: 'mdi-account-box-outline'},
        { title: 'Home', icon: 'mdi-home' },
        { title: 'News', icon: 'mdi-newspaper' },
        { title: 'Notifications', icon: 'mdi-notification-clear-all'},
        { title: 'Assets', icon: 'mdi-notebook' }
      ],
      miniVariant: true,
      color: '#334455',
      width: 220,
      mwidth: window.innerWidth / 3,
    };
  },
  methods: {
    closeApp() {
      this.$store.dispatch('closeApp')
    }
  }
};
</script>

<style scoped>

  .nav-bar {
    position: fixed;
    margin-top: 3rem;
    height: 100%;
  }

</style>
