const express = require('express');
// const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.get('/news', (req, res) => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=84f2bbf63c7d4afe8419396d901fb246')
        .then(taken => res.json(taken.data.articles))
        .catch(() => 'error')
})

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => 
    {console.log(`Server connected on port ${PORT}`)}
);
