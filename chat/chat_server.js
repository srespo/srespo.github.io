var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request');
var chatArchive = [];


//following is copied from etherpad
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World im here!');
});

var user, requestOptions;
io.on('connection', function(socket) { //when socket makes a connection from the client to the server

        socket.on("chat message", function(msg) {

            var msgWords = msg.text.split(" ");
            //var lastWord = msgWords[msgWords.length - 1];//
            var randomMsgWord = msgWords[Math.floor(Math.random() * msgWords.length)];

            requestOptions = {
                url: 'http://api.giphy.com/v1/gifs/random',
                qs: {
                    api_key: 'dc6zaTOxFJmzC',
                    tag: randomMsgWord
                }
            };
            request("http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + randomMsgWord, function(err, res, body) {
                body = JSON.parse(body);
                msg.text = msg.text + '<br>' + '<br>' + '<img src="' + body.data.image_url + '" width="400" /><br>';
                chatArchive.push(msg);
                io.emit("chat message", msg);

            });
        });
    })
    //dc6zaTOxFJmzC giphy 
    // random gif - http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=


/*request("https://api.spotify.com/v1/search?q=track:" + lastWord + "&type=track", function(err, resp, body) {
    body = JSON.parse(body);
		var randomTrackNumber = Math.floor(Math.random() * body.tracks.items.length);
		console.log(randomTrackNumber);
		var randomTrack = body.tracks.items[randomTrackNumber];
		msg.text = msg.text + "<a href'" + randomTrack.external_urls.spotify +"'>" + randomTrack.name + "</a> by" + randomTrack.artists[0].name;
		chatArchive.push(msg);
	io.emit("chat message", msg);
	messageArchive.push(msg);
	});*/

app.get('/get_archive', function(req, res) {
    res.send(chatArchive); //show the previous chat lines from past converstions with other 
});

app.use(express.static('public'));

app.get('chat', function(req, res) {
    res.sendfile(_dirname + 'chat_client.html');
});

http.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
