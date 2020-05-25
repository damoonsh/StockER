<template>
  <div class="main-div">
      <li 
        class="news-item" 
        v-for="news in this.newses" 
        :key="news.title"
      >
        <NewsHolder 
          v-bind:news="news" 
        />
      </li>
  </div>
</template>


<script>
import { articles } from './mock.json';
import NewsHolder from './NewsHolder';

export default {
  name: "news-page",
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
  @media screen and (min-width: 60em) {
		.main-div {
      /* Grid */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 2fr));
      grid-gap: 1rem;
      grid-auto-flow: dense;
      /* Padding */
      padding: 1rem;
    }
    .news-item {
      padding-bottom: 1.5vh;
      display: flex;
      flex-direction: row; 
    }
	}

  @media screen and (min-width: 30em) {
		.main-div {
      /* Grid */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 3fr));
      grid-gap: 1rem;
      grid-auto-flow: dense;
      /* Padding */
      padding: 1rem;
    }
    .news-item {
      padding-bottom: 1.5vh;
      display: flex;
      flex-direction: row; 
    }
	}

   @media screen and (min-width: 10em) {
		.main-div {
      /* Grid */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
      grid-gap: 1.0rem;
      grid-auto-flow: dense;
      /* Padding */
      padding: 1rem;
    }
    .news-item {
      padding-bottom: 1.5vh;
      display: flex;
      flex-direction: row; 
      width: 100%;
    }
	}
</style>