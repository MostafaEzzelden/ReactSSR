import {
    User
} from '../models/user';

var authenticate = (req, res, next) => {
    var token = req.session._token;
    User.findByToken(token).then((user) => {
        if (!user) { return Promise.reject() }
        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
         res.json({
            'status': 'error',
            message: 'Invalid Credintial'
        });
    });
};

export {
    authenticate
};
