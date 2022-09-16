const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/GroceryStore')

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error connecting to db'))

db.once('open', ()=>{
    console.log('Successfully connected to db');
})

module.exports = db;