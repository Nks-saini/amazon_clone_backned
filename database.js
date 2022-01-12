// include library

const mongoose = require('mongoose')
const assert = require('assert')
const db_url = process.env.DB_URL;
// const db_local_url = process.env.DB_URL_LOCAL;   



// //establist data connection
mongoose.connect(
    db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    (error, link) => {
        //check database connect error
        assert.strictEqual(error, null , "DB Connection fail..");

        //database conn success
        console.log("database connected successfully...")
    }
);



// const URI = process.env.DB_URL;
// mongoose.connect(URI, {

// useNewUrlParser: true, 
// useUnifiedTopology: true 

// }, err => {
// if(err) throw err;
// console.log('Connected to MongoDB!!!')
// });