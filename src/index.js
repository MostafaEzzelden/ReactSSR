import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import config from './config/config';
import userRoutes from './routes/userRoutes';

const app = express();
app.use(express.static('public'));

userRoutes(app);

app.get('*', (req, res) => {
    const store = createStore(req);
    const promises = matchRoutes(Routes, req.path)
        .map(({
            route
        }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    Promise.all(promises).then(() => {
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
