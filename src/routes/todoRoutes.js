import {
    Todo
} from './../models/todo';

export default (app) => {
    app.get('/api/todos', (req, res) => {
        Todo.find({}).then((todos) => {
            res.json(todos);
        }, (e) => {
            res.status(400).send(e);
        });
    });
};
