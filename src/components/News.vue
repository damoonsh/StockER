<template>
  <div class="main-div">
      <li class="news-item" v-for="news in this.newses" :key="news.title">
        <NewsHolder v-bind:news="news" />
      </li>
  </div>
</template>


<script>
import { articles } from './mock.json';
import NewsHolder from './NewsHolder';
export default {
  name: "news",
  data() {
    return {
      newses: articles
    }
  },
  components: {
    NewsHolder,
  },
};
</script>

<style scoped>
    .main-div {
      /* Grid */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      grid-gap: 2rem;
      grid-auto-flow: dense;
      /* Padding */
      padding: 1rem;
    }
    .news-item {
      display: flex;
      flex-direction: row; 
    }
</style>