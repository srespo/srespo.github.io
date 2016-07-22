var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var request = require('request'); //added

var chatArchive = [];

//following is copied from etherpad
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World im here!');
});

// Youtube api key: AIzaSyDVXX5EIlVai2VfBn8Hia9QnkE7rlezEPI
// youtube video link: https://www.youtube.com/watch?v={video_id}
// Youtube API: https://www.googleapis.com/youtube/v3/search?part=snippet&q=cat&key={YOUR_API_KEY}
var user, requestOptions;
io.on('connection', function(socket){ //when socket makes a connection from the client to the server
	
	socket.on("chat message", function(msg){

		var msgWords = msg.text.split(" ");
		var lastWord = msgWords[msgWords.length - 1];
		var randomMsgWord = msgWords[Math.floor(Math.random() * msgWords.length)];

		if (user != msg.username) { // new speaker
			requestOptions = {
				url: 'http://api.giphy.com/v1/gifs/random',
				qs: {
					api_key: 'dc6zaTOxFJmzC',
					tag: randomMsgWord
				}
			};
			request(requestOptions, function(err, res, body) {
				if (err) { throw Error(err); }
				body = JSON.parse(body);
				console.log('new speaker');
				console.log('body', body.data.image_url);

				msg.text = msg.text + '<img src="' + body.data.image_url + '"/>';
				chatArchive.push(msg);
				io.emit("chat message", msg);
				
			});

		} else {

			requestOptions = { url: "https://www.googleapis.com/youtube/v3/search",
				qs: { 
					part: "snippet",
					q: lastWord,
					key: 'AIzaSyDVXX5EIlVai2VfBn8Hia9QnkE7rlezEPI'
				}
			};
			request(requestOptions, function(err, res, body) {
				if (err) { throw Error(err); }
				body = JSON.parse(body);

				var videoId = body.items[0].id.videoId;
				var title = body.items[0].snippet.title;
				msg.text = msg.text + ' [Youtube: <a href="https://www.youtube.com/watch?v=' + videoId + '">' + title + '</a>]';
				chatArchive.push(msg);
				io.emit("chat message", msg);
				
			});
		}
		user = msg.username;

	});
});

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

