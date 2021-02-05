const axios = require('axios');

const weatherApi = {
    weather(city, country){
        axios({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=de7a597c6f1f7ed2153264e5433703cb`,
        })
        .then((res) => {
            console.log('test data', res)
        })
        .catch((err)=>{
            console.log('test err', err)
        })
    }
}

