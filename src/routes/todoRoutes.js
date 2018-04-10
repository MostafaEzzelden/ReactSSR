import { Todo } from './../models/todo';
import authenticate from '../middleware/authenticate';
import clearCache from '../middleware/clearCache';


export default (app) => {

    app.get('/api/todos', authenticate, async(req, res) => {
        const todos = await Todo.find({
            _creator: req.user._id
        }).cache({
            key: req.user._id
        });
        res.json(todos);
    });

    app.post('/api/todos', authenticate, clearCache, (req, res) => {
        const todo = new Todo({
            text: req.body.text,
            content: req.body.content,
            _creator: req.user._id
        });

        todo.save()
            .then((todo) => {
                res.json(todo);
            })
            .catch((e) => {
                res.json(e);
            });
    });


};
