// modules =================================================
var express        = require('express');
var app            = express();
var port = process.env.PORT || 8080; // set our port

app.use(express.static("public")); // set the static files location /public/img will be /img for users

// routes ==================================================

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});

// start app ===============================================

app.listen(port);	
console.log('Server start on port ' + port);
