import _ from 'lodash';
import { User } from '../models/user';


export default (app) => {

    app.get('/api/current_user', function getCurrentUser(req, res) {
        res.json({
            status: 'Error'
        })
    });

    app.post('/api/users', (req, res) => {
        var body = _.pick(req.body, ['username', 'email', 'age', 'password']);
        var user = new User(body);

        user.save()
            .then(() => {
                return user.generateAuthToken();
            })
            .then((token) => {
                res.cookie('_token',token, { maxAge: 900000, httpOnly: true}); // res.clearCookie('_token');
                res.json(user);
            })
            .catch((e) => {
                res.json(e);
            });
    });


};
