import { User } from '../models/user';

export default (req, res, next) => {
    const token = req.session._token;
    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }
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
