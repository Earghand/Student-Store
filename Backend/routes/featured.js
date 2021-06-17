const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const fs = require('fs')
// const jsonFile = require('../assets/items.json');
const { json } = require('body-parser');

let rawdata = fs.readFileSync('items.json')
let features = JSON.parse(rawdata);
router.get('/', async(req,res)=>{
    console.log(features)
    res.send(features)
});

module.exports = router;