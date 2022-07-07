import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config.js';
import Middlewares from './api/middlewares.js'
import Authentication from './api/authentication.js'
import UserRouter from './user/router.js'
import ItemRouter from './items/router.js'

const app = express();

mongoose.connect(config.mongoose.uri, { useNewUrlParser: true, useUnifiedTopology: true })
.catch(err=>console.error(err));

mongoose.Promise = global.Promise;

// App Setup
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

app.get('/ping', (req, res) => res.send('pong'))

app.post('/signup', Authentication.signup)

app.post('/signin', Authentication.signin)

app.get('/auth-ping', Middlewares.loginRequired, (req, res) => res.send('connected'))

app.use('/user', Middlewares.loginRequired, UserRouter)

app.use('/user', Middlewares.loginRequired, ItemRouter)

app.use((err, req, res, next) => {
    console.log('Error:', err.message);
    res.status(422).json(err.message);
});

// Server Setup
const port = process.env.PORT || 1234
http.createServer(app).listen(port, ()=>{
    console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
});
