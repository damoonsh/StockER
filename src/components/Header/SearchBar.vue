<template>
    <div class="search-bar">
        <v-text-field
            class="search-field"
            label="Search"
            :outlined="true"
            :loading="false"
            :dense="true"
            :solo="true"
            counter="20"
          ></v-text-field>
    </div>
</template>

<style scoped>
    .search-bar {
        display: grid;
        grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    }

    .search-field {
        grid-column: 3/4;
    }
</style>
