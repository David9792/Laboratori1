const mongoose =require('mongoose');
mongoose.connect("mongodb://192.168.1.101:27017/PRACTICA");
module.exports = mongoose;
