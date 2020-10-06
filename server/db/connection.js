const monk = require('monk');
const db = monk('localhost/auth-1');


module.exports = db;