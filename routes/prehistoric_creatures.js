const express = require('express');
const router = express.Router();
const fs = require('fs');

let creatures = fs.readFileSync('./prehistoric_creatures.json');
//parse JSON into a JS mutable data structure
let creatureData = JSON.parse(creatures);

//index /preshistoric_creatures
router.get('/', (req, res) => {
    res.render('creatures/creaturesindex.ejs', {creatures: creatureData})
})

//new - /prehistoric_creatures/new
router.get('/new', (req, res) => {
    res.render('creatures/new')
})

//get 1 - /prehistoric_creatures/1
router.get('/:id', (req, res) => {
    let index = req.params.id;
    res.render('creatures/show', { creatures: creatureData[index] });
})

//post - prehistoric_creatures
router.post('/', (req, res) => {
    creatureData.push(req.body);
    let histJson = JSON.stringify(creatureData);
    fs.writeFileSync('./prehistoric_creatures.json', histJson);
    res.redirect('/prehistoric_creatures');
});

module.exports = router;