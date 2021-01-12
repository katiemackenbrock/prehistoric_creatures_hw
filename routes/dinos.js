const express = require('express');
const router = express.Router();
const fs = require('fs');

//Mounted at /dinos

//Index, stubbing out your route - /dinos
router.get('/', (req, res) => {
    // read the file that stores all my dinos and save in a variable to use later
    let dinos = fs.readFileSync('./dinos.json');
    //parse JSON into a JS mutable data structure
    let dinoData = JSON.parse(dinos);
    console.log(dinoData);

    // res.send('DINOS BABY!')
    res.render('dinos/index', { dinos: dinoData });
});

// New route , exists at /dinos/new
router.get('/new', (req, res) => {
    console.log('--------- New dino who dis')
    res.render('dinos/new');
})

// Create - POST to /dinos
router.post('/', (req, res) => {
    console.log(req.body);
    // res.send('posting a dino')
    //turn dinos.json into a mutable array
    let dinos = fs.readFileSync('./dinos.json');
    dinosJS = JSON.parse(dinos);
    //add new dino from req.body to array
    dinosJS.push(req.body);
    //turn dino array into JSON
    let dinoJSON = JSON.stringify(dinosJS);
    //write to dinos.json
    fs.writeFileSync('./dinos.json', dinoJSON);
    
    res.redirect('/dinos');
})

module.exports = router;