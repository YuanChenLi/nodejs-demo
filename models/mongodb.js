// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
exports.mongoose = mongoose;
