const axios = require("axios");
const API_TOKEN = require("./api.token")

function getEmojis() {
    axios.get(
        "https://api.github.com/emojis",
        {
            headers: {
                'Authorization': `token ${API_TOKEN}`
            }
        })
        .then((data) => {
            console.log(data)
            res.send(data)
        })
        .catch((err) => {
            throw err
        })
}

getEmojis()