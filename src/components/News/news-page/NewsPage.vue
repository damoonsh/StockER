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
import { articles } from '../../../components/mock.json';
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
  @media screen and (min-width: 30em) {
		.main-div {
      /* Grid */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
      grid-gap: 1.5rem;
      grid-auto-flow: dense;
      /* Padding */
      padding-top: 1rem;
      padding-left: 4rem;
    }
    .news-item {
      padding-bottom: 1.5vh;
      display: flex;
      flex-direction: row; 
      width: 100%;
    }
	}

  @media screen and (min-width: 50em) {
		.main-div {
      /* Grid */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(330px, 3fr));
      grid-gap: 1rem;
      grid-auto-flow: dense;
      /* Padding */
      padding-top: 0.8rem;
      padding-left: 2.5rem;
    }
    .news-item {
      padding-bottom: 1.5vh;
      display: flex;
      flex-direction: row; 
      width: 100%;
    }
	}

   @media screen and (min-width: 60em) {
		.main-div {
      /* Grid */
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 4fr));
      grid-gap: 1.0rem;
      grid-auto-flow: dense;
     /* Padding */
      padding-top: 0.5rem;
      padding-left: 2rem;
    }
    .news-item {
      padding-bottom: 1.5vh;
      display: flex;
      flex-direction: row; 
      width: 100%;
    }
	}
</style>