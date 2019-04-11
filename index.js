var linebot = require('linebot');
var express = require('express');

var bot = linebot({
    channelId: 1563814246,
    channelSecret: "f2bd0280c9bc6f287c0d0d107f44abe1",
    channelAccessToken:  "NrjzrSvHrLvzXyHWptjRphKdXRaT1HBKk1ICNSJy/VVXHXh5YZ+aDtR20F3c38lWVOKCWNw0ITjNBeLFOfGy7xvM9uBSZ6U6CjZnZwTcA3PDbCsblV3Ivs/lU3bz30cIfqmSsv5t84SqaPJWdMFWZwdB04t89/1O/w1cDnyilFU="
});


bot.on('message', function(event) {
    console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});
