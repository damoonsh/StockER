<template>
  <div class="app-div">
    <Nav class="navbar" />
    <News class="news-feed" />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from "../components/NavBar/Nav";
import News from "../components/News/news-page/News";

export default {
  name: "Home",
  components: {
    Nav,
    News
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
    grid-template-columns: 80px 1fr auto;
    grid-template-rows: 50px repeat(12, auto);
  }

  .nav-bar {
    grid-column: 1/2;
    grid-row: 3;
  }

  .news-feed {
    grid-column: 2/12;
  }
}

@media screen and (min-width: 60em) {
  .app-div {
    background-color: #bdb6b0;
    display: grid;
    grid-template-columns: 70px 2.5fr auto;
  }

  .nav-bar {
    grid-column: 1/2;
  }

  .news-feed {
    grid-column: 2/14;
  }
}
</style>