const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {nanoid} = require('nanoid');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const UserSchema = require('./models/user')
const cors = require('cors');

require('dotenv').config();

const app = express();

const getSession = require('./lib/getSession');

const router = require('./routes/router');
mongoose.connect('mongodb+srv://dannyh186:codenation@clusterduck-cpzou.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(session({
    store: new MongoStore({
        // url:'mongodb+srv://dannyh186:codenation@clusterduck-cpzou.mongodb.net/test?retryWrites=true&w=majority'
        mongooseConnection: mongoose.connection
    }),
    secret: 'keyboardcat',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true
    },
    genid: () => {
        return nanoid();
    }
}));

app.use('/', router);

// app.get('/ping', async(req, res) => {
//     console.log(req.session.userID);
    
//     let loggedIn = await getSession(req.session.userID);
//     console.log(loggedIn);
    
//     if (loggedIn){
//     res.send('pong');
//     } else {
//         res.send('get a session first');
//     }
// });
 
app.listen(8000);