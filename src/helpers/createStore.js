import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import reducers from '../client/reducers';

export default (req) => {
    console.log('cookie', req.get('cookie'))

    const axiosInstance = axios.create({
        baseURL: req.protocol + '://' + req.hostname + (process.env.PORT ? (':' + process.env.PORT) : '') + '/api',
        headers: {
            "cookie": req.get('cookie') || '',
        }
    });

    const store = createStore(
        reducers, {},
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    );

    return store;
};
