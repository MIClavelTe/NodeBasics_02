const username = "miclavelte";
const https = require('http');

function printMessage(username, badges, points) {
    const message = `${username} has ${badges} badge(s) and ${points} points`;
    console.log(message);
}

const request = https.get(`http://teamtreehouse.com/${username}.json`, response => {
    console.log(response.statusCode);
});