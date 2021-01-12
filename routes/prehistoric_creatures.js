const express = require('express');
const router = express.Router();
const fs = require('fs');

//index /preshistoric_creatures
router.get('/', (req, res) => {
    let creatures = fs.readFileSync('./prehistoric_creatures.json');
    //parse JSON into a JS mutable data structure
    let creatureData = JSON.parse(creatures);
    res.render('creatures/creaturesindex.ejs', {creatures: creatureData})
})

//get 1 - /prehistoric_creatures/1


//new - /prehistoric_creatures/new

//post - prehistoric_creatures
module.exports = router;