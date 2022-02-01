'use strict';

const fs = require('fs');

let Nationality = require("../Models/Nationality")

const file = fs.readFileSync(__dirname + "/nationality.json");

exports.importNationality = () =>{
    const nationality = JSON.parse(file)
    nationality.map(async element=>{
        await Nationality.create({title:element.title})
    })
    return "Nationalities Imported"
}
