/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const axios = require('axios');
const fs = require('fs');
const articles = require('../src/components/mock.json');

let list = articles['articles']
// fetches new based on the sources
let baseSourceURL = 'https://newsapi.org/v2/sources?';
let baseURL = 'https://newsapi.org/v2/top-headlines?';

const countries = [];

const categories = ["business", 'entertainment', 'technology', 'general', 'general', 'general', 'sports'];

function urlMaker(q, sources, category, country) {
    // country does not go with sources
    // country goes with category
    // country goes with q

    let url = "";

    if (q != "") {
        url += "q=" + q; 
    } else if (sources != "") {
        url += "sources=" + sources; 
    } else if (category != "") {
        url += "category=" + category;
    } else if (country != "") {
        url += "country=" + country
        if (category != "") {
            url += "&category=" + category;
        } else if (q != "") {
            url += "&q=" + q;
        }
    }

    return url;
}

async function fetchData(q, sources, category, country, apiKey='84f2bbf63c7d4afe8419396d901fb246') {
    
    let targetURL = urlMaker(q, sources, category, country)
    console.log(`${baseURL}${targetURL}&pageSize=50&apiKey=${apiKey}`)
    axios.
    get(`${baseURL}${targetURL}&apiKey=${apiKey}`)
    .then(res => {
        // console.log(res.data)
        console.log(list.length, res.data.articles.length)
        let newList = res.data.articles.concat(list);
        var obj = {"articles": newList}
        var json = JSON.stringify(obj)
        fs.writeFile('../src/components/mock.json', json, 'utf8', () => console.log('done'));
    })
    .catch((err) => console.log('There have been an error: ', err))
}

fetchData(
    '', '', 'entertainment', 'au'
)


