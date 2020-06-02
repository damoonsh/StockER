<template>
    <div
        class="main"
    >
        <v-card 
            color="#FF8C00"
        >
            <v-img
                :src="this.news.urlToImage"
                aspect-ratio="1"
                class="news-image"
            >
            
            </v-img>

            <v-card-title>
                {{this.news.title}}
            </v-card-title>

            <v-card-subtitle>
                {{this.news.author}}
                <br>
                {{this.news.description.slice(0,500 - this.news.title.length)}} 
            </v-card-subtitle>

            <v-card-actions>

            <v-btn
                color="#033"
                text
                :href="this.news.url"
                target="_blank"
                outlined
                block
            >
                Read More
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "news-holder",
    props:["news"],
    data: () => ({
        color: "#FF8C00",
    })
}
</script>

<style scoped>
.main {
  width: 100%;
  background: #ccc;
}
    .news-image {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>