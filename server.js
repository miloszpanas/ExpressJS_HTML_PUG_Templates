const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/login', function(req, res) {
    res.render('logging_page');
});

app.get('/auth/google', function(req, res) {
    res.render('you_are_logged');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('The page you are looking for does not exist');
});
