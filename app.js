const express = require('express');
const app = express();

const connection = require('./db/connection.js');

connection.once('open', () => {
    const server = app.listen(process.env.PORT || 8080, () => {
        console.log("Connected and listening");
    });
});

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const Film = require('./models/film.js');

app.post('/api/films', (req, res) => {
    let film = new Film(req.body);
    film.save()
        .then(res.status(201).json())
        .catch(e => res.status(500).send("error occurred"));
})

app.get('/api/films', (req, res) => {
    Film.find({}).exec()
        .then(data => res.json(data))
        .catch(e => res.status(500).send("error occurred"));
});


