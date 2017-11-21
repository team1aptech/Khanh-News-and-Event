// modules =================================================
var express               = require('express');
var app                   = express();
var mongoose              = require('mongoose');
var bodyParser            = require('body-parser');

// var Comment = require('./public/model/comment');

var commentSchema = mongoose.Schema({
    text: String,
    author: String
});
var Bmw01 = mongoose.model('Bmw01', commentSchema);
var Bmw02 = mongoose.model('Bmw02', commentSchema);
var Bmw03 = mongoose.model('Bmw03', commentSchema);
var Bmw04 = mongoose.model('Bmw04', commentSchema);
var Bmw05 = mongoose.model('Bmw05', commentSchema);
var Harley01 = mongoose.model('Harley01', commentSchema);
var Harley02 = mongoose.model('Harley02', commentSchema);
var Harley03 = mongoose.model('Harley03', commentSchema);
var Harley04 = mongoose.model('Harley04', commentSchema);
var Harley05 = mongoose.model('Harley05', commentSchema);
var Honda01 = mongoose.model('Honda01', commentSchema);
var Honda02 = mongoose.model('Honda02', commentSchema);
var Honda03 = mongoose.model('Honda03', commentSchema);
var Honda04 = mongoose.model('Honda04', commentSchema);
var Honda05 = mongoose.model('Honda05', commentSchema);
var Kawasaki01 = mongoose.model('Kawasaki01', commentSchema);
var Kawasaki02 = mongoose.model('Kawasaki02', commentSchema);
var Kawasaki03 = mongoose.model('Kawasaki03', commentSchema);
var Kawasaki04 = mongoose.model('Kawasaki04', commentSchema);
var Kawasaki05 = mongoose.model('Kawasaki05', commentSchema);
var Suzuki01 = mongoose.model('Suzuki01', commentSchema);
var Suzuki02 = mongoose.model('Suzuki02', commentSchema);
var Suzuki03 = mongoose.model('Suzuki03', commentSchema);
var Suzuki04 = mongoose.model('Suzuki04', commentSchema);
var Suzuki05 = mongoose.model('Suzuki05', commentSchema);
var Yamaha01 = mongoose.model('Yamaha01', commentSchema);
var Yamaha02 = mongoose.model('Yamaha02', commentSchema);
var Yamaha03 = mongoose.model('Yamaha03', commentSchema);
var Yamaha04 = mongoose.model('Yamaha04', commentSchema);
var Yamaha05 = mongoose.model('Yamaha05', commentSchema);

var userSchema = mongoose.Schema({
    email: String,
    password: String
});
var User = mongoose.model('User', userSchema);

var port = 8080; // set our port

mongoose.connect("mongodb://localhost/khanh_motor_demo1", {useMongoClient:true});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // parse application/json

app.use(express.static("public")); // set the static files location /public/img will be /img for users

// routes ==================================================

app.get('/api/user', function (req, res) {
    User.find({},function (err, users) {
        if(err){
            res.send(err);
        } else {
            res.json(users);     //return all comments in JSON format
        }
    });
});
app.post('/api/user', function (req, res) {
    User.remove({}, function (err) {
        if(err){
            console.log(err);
        }
        User.create({
            email: req.body.email,
            password: req.body.password
        }, function (err, user) {
            if(err){
                res.send(err);
            } else{
                User.find({},function (err, users) {
                    if(err)
                        res.send(err);
                    res.json(users);     //return all comments in JSON format
                });
            }
        })
    })
});

//comments for bmw-01
app.get('/api/comments/bmw-01', function (req, res) {
    Bmw01.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/bmw-01', function (req, res) {
    //create comment
    Bmw01.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Bmw01.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for bmw-02
app.get('/api/comments/bmw-02', function (req, res) {
    Bmw02.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/bmw-02', function (req, res) {
    //create comment
    Bmw02.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Bmw02.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for bmw-03
app.get('/api/comments/bmw-03', function (req, res) {
    Bmw03.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/bmw-03', function (req, res) {
    //create comment
    Bmw03.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Bmw03.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for bmw-04
app.get('/api/comments/bmw-04', function (req, res) {
    Bmw04.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/bmw-04', function (req, res) {
    //create comment
    Bmw04.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Bmw04.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for bmw-05
app.get('/api/comments/bmw-05', function (req, res) {
    Bmw05.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/bmw-05', function (req, res) {
    //create comment
    Bmw05.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Bmw05.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for harley-01
app.get('/api/comments/harley-01', function (req, res) {
    Harley01.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/harley-01', function (req, res) {
    //create comment
    Harley01.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Harley01.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for harley-02
app.get('/api/comments/harley-02', function (req, res) {
    Harley02.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/harley-02', function (req, res) {
    //create comment
    Harley02.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Harley02.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for harley-03
app.get('/api/comments/harley-03', function (req, res) {
    Harley03.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/harley-03', function (req, res) {
    //create comment
    Harley03.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Harley03.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for harley-04
app.get('/api/comments/harley-04', function (req, res) {
    Harley04.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/harley-04', function (req, res) {
    //create comment
    Harley04.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Harley04.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for harley-05
app.get('/api/comments/harley-05', function (req, res) {
    Harley05.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/harley-05', function (req, res) {
    //create comment
    Harley05.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Harley05.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for honda-01
app.get('/api/comments/honda-01', function (req, res) {
    Honda01.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/honda-01', function (req, res) {
    //create comment
    Honda01.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Honda01.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for honda-02
app.get('/api/comments/honda-02', function (req, res) {
    Honda02.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/honda-02', function (req, res) {
    //create comment
    Honda02.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Honda02.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for honda-03
app.get('/api/comments/honda-03', function (req, res) {
    Honda03.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/honda-03', function (req, res) {
    //create comment
    Honda03.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Honda03.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for honda-04
app.get('/api/comments/honda-04', function (req, res) {
    Honda04.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/honda-04', function (req, res) {
    //create comment
    Honda04.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Honda04.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for honda-05
app.get('/api/comments/honda-05', function (req, res) {
    Honda05.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/honda-05', function (req, res) {
    //create comment
    Honda05.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Honda05.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for kawasaki-01
app.get('/api/comments/kawasaki-01', function (req, res) {
    Kawasaki01.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/kawasaki-01', function (req, res) {
    //create comment
    Kawasaki01.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Kawasaki01.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for kawasaki-02
app.get('/api/comments/kawasaki-02', function (req, res) {
    Kawasaki02.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/kawasaki-02', function (req, res) {
    //create comment
    Kawasaki02.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Kawasaki02.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for kawasaki-03
app.get('/api/comments/kawasaki-03', function (req, res) {
    Kawasaki03.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/kawasaki-03', function (req, res) {
    //create comment
    Kawasaki03.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Kawasaki03.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for kawasaki-04
app.get('/api/comments/kawasaki-04', function (req, res) {
    Kawasaki04.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/kawasaki-04', function (req, res) {
    //create comment
    Kawasaki04.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Kawasaki04.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for kawasaki-05
app.get('/api/comments/kawasaki-05', function (req, res) {
    Kawasaki05.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/kawasaki-05', function (req, res) {
    //create comment
    Kawasaki05.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Kawasaki05.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for suzuki-01
app.get('/api/comments/suzuki-01', function (req, res) {
    Suzuki01.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/suzuki-01', function (req, res) {
    //create comment
    Suzuki01.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Suzuki01.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for suzuki-02
app.get('/api/comments/suzuki-02', function (req, res) {
    Suzuki02.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/suzuki-02', function (req, res) {
    //create comment
    Suzuki02.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Suzuki02.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for suzuki-03
app.get('/api/comments/suzuki-03', function (req, res) {
    Suzuki03.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/suzuki-03', function (req, res) {
    //create comment
    Suzuki03.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Suzuki03.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for suzuki-04
app.get('/api/comments/suzuki-04', function (req, res) {
    Suzuki04.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/suzuki-04', function (req, res) {
    //create comment
    Suzuki04.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Suzuki04.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for suzuki-05
app.get('/api/comments/suzuki-05', function (req, res) {
    Suzuki05.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/suzuki-05', function (req, res) {
    //create comment
    Suzuki05.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Suzuki05.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

//comments for yamaha-01
app.get('/api/comments/yamaha-01', function (req, res) {
    Yamaha01.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/yamaha-01', function (req, res) {
    //create comment
    Yamaha01.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Yamaha01.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for yamaha-02
app.get('/api/comments/yamaha-02', function (req, res) {
    Yamaha02.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/yamaha-02', function (req, res) {
    //create comment
    Yamaha02.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Yamaha02.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for yamaha-03
app.get('/api/comments/yamaha-03', function (req, res) {
    Yamaha03.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/yamaha-03', function (req, res) {
    //create comment
    Yamaha03.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Yamaha02.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for yamaha-04
app.get('/api/comments/yamaha-04', function (req, res) {
    Yamaha04.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/yamaha-04', function (req, res) {
    //create comment
    Yamaha04.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Yamaha04.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});
//comments for yamaha-05
app.get('/api/comments/yamaha-05', function (req, res) {
    Yamaha05.find({},function (err, comments) {
        if(err){
            res.send(err);
        } else {
            res.json(comments);     //return all comments in JSON format
        }
    });
});
app.post('/api/comments/yamaha-05', function (req, res) {
    //create comment
    Yamaha05.create({
        text: req.body.text,
        author: req.body.author
    }, function (err, comment) {
        if(err){
            res.send(err);
        } else{
            Yamaha05.find({},function (err, comments) {
                if(err)
                    res.send(err);
                res.json(comments);     //return all comments in JSON format
            });
        }
    })
});

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});





// start app ===============================================

app.listen(port);	
console.log('Server start on port ' + port);
