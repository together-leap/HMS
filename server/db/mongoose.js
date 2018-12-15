var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://admin:admin123@ds145562.mlab.com:45562/nhs-app");

module.exports = {mongoose};
