<template>
  <div class="header-main">
    <h1>Header</h1>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-main {
  position: fixed;
  top: 0;
  height: 50px;
  line-height: 50px;
  font-weight: bold;
  font-family: Helvetica;
  font-size: 30px;
  background: darkcyan;
  width: 100%;
  padding: 0 20px;
  color: white;
  opacity: 0.2;
}
</style>