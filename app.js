const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();

mongoose.connect(`mongodb://127.0.0.1:27017/siyu`, { useNewUrlParser: true })
    .then(() => console.log(`MongoDB connected...`))
    .catch(err => console.log(`MongoDB connection error: ${err}`));

app.use(logger(`dev`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get(`/`, (req, res) => res.sendStatus(200));

app.use((req, res, next) => {
    res.sendStatus(500);
});

app.listen(4000, () => console.log(`Express running...`));