<template>
    <div>
        <v-card >
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
                {{this.news.description.slice(0,100)}} 
            </v-card-subtitle>

            <v-card-actions>
            <v-btn text>Share</v-btn>

            <v-btn
                color="purple"
                text
                :href="this.news.url"
                target="_blank"
            >
                Explore
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
      show: false,
    })
}
</script>

<style scoped>
    .news-image {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
</style>