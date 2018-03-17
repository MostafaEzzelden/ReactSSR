module.exports = app => {
    app.get('/api/users', (req, res) => {
        res.json(users);
    });
};

const users = [
    { id: 1, name: 'Mostafa Ezz'},
    { id: 2, name: 'Ervin Howell'},
    { id: 3, name: 'Clementine Bauch' },
    { id: 4, name: 'Patricia Lebsack' },
    { id: 5, name: 'Chelsey Dietrich' }
];
