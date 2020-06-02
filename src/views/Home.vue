<template>
  <div class="app-div">
    <Nav class="navbar" />
    <NewsPage class="news-page" />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/NavBar/Nav";
import NewsPage from "../components/News/news-page/NewsPage";

export default {
  name: "Home",
  components: {
    Nav,
    NewsPage
  }
};
</script>

<style scoped>
* {
  -webkit-user-select: none;
  -webkit-app-region: drag;
}

@media screen and (min-width: 30em) {
  .app-div {
    display: grid;
    grid-template-columns: 30px 1fr auto;
    grid-template-rows: 50px repeat(12, auto);
  }

  .nav-bar {
    grid-column: 1/2;
    grid-row: 3;
  }

  .news-page {
     padding-right: 1rem;
    grid-column: 3/12;
  }
}

@media screen and (min-width: 50em) {
  .app-div {
    display: grid;
    grid-template-columns: 40px 2fr auto;
    grid-template-rows: 50px repeat(4, auto);
  }

  .nav-bar {
    grid-column: 1/2;
    grid-row: 3;
  }

  .news-page {
     padding-right: 1rem;
    grid-column: 2 / 12;
  }
}

@media screen and (min-width: 70em) {
  .app-div {
    display: grid;
    grid-template-columns: 70px 2.5fr auto;
    grid-template-rows: 30px repeat(12, auto);
  }

  .nav-bar {
    grid-column: 1/2;
  }

  .news-page {
     padding-right: 1rem;
    grid-column: 2/20;
  }
}
</style>