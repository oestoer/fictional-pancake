require('dotenv').config();

const constainer = document.querySelector('#continer');
const basUrl = 'http://api.brewerydb.com/v2/?key=' + process.env.BREWERY_DB_KEY;
