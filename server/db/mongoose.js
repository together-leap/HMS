var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb://<username>:<password>@<hostname>:<port-no>/nhs-app");

module.exports = {mongoose};
