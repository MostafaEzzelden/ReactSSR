import _ from 'lodash';
import { User } from '../models/user';
import { authenticate } from '../middleware/authenticate';

export default (app) => {
    app.post('/api/users', (req, res) => {
        var body = _.pick(req.body, ['username', 'email', 'age', 'password']);
        var user = new User(body);
        user.save()
            .then(() => {
                return user.generateAuthToken();
            })
            .then((token) => {
                req.session = {
                    _token: token
                }
                res.json(user);
            })
            .catch((e) => {
                res.json(e);
            });
    });

    app.get('/api/users/me', authenticate, (req, res) => {
        res.json({
            'status': 'success',
            user: req.user,
        })
    });

    app.delete('/api/users/me/token', authenticate, (req, res) => {
        req.user.removeToken(req.token).then(() => {
            req.session = {};
            res.status(200).json({
                'status': 'success'
            });
        }, () => {
            res.status(400).send();
        });
    });


};
