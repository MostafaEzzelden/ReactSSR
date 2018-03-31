import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import config from './config/config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { mongoose } from './db/mongoose';
import todoRoutes from './routes/todoRoutes';
import userRoutes from './routes/userRoutes';
import * as Cache from './services/cache';

// require('./services/cache');

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.COOKIE_KEY],
    name: "_token"
  })
);

app.use(express.static('public'));

todoRoutes(app);

userRoutes(app);

app.get('*', (req, res) => {
    const store = createStore(req, res);
    const promises = matchRoutes(Routes, req.path)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then((value) => {
                        resolve(value)
                    }).catch(resolve);
                });
            }
        });

    Promise.all(promises).then((val) => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

app.listen(process.env.PORT, () => {
    console.log('Listening on prot ' + process.env.PORT);
});
