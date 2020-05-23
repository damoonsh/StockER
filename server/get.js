const axios = require('axios');

axios.get('http://localhost:5000/news')
.then(res => {
    console.log(res.data)
    // console.log(Object.keys(res))
})
.catch(err => console.log(err))