const username = "miclavelte";
const https = require('https');

function printMessage(user, badges, points) {
    const message = `${user} has ${badges} badge(s) and ${points} points`;
    console.log(message);
}

const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = ""

    response.on('data', data => {
        body += data.toString();
    });

    response.on('end', () => {
        console.log(body);
    });
});