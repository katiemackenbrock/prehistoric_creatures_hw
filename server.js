const express = require('express');
const layouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded({ extended: false })); //body parsing middleware

app.get('/', (req, res) => {
    // res.send('HOME')
    res.render('home')
});

app.use('/dinos', require('./routes/dinos'));

app.use('/prehistoric_creatures', require('./routes/prehistoric_creatures'));
// app.use('/prehistoric_creatures/1', require('.routes/prehistoric_creatures/1'));
// app.use('/prehistoric_creatures/new', require('.routes/prehistoric_creatures/new'));

app.listen(8000, () => console.log('hey listen'));