/*
dotenvs read my variables from the ".env" file that is visible only to me
*/

require('dotenv').config();
console.log(process.env.USERNAME);
console.log(process.env.API_KEY);