const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/amazon-cart';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;