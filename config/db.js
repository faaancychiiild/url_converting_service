const mongoose = require('mongoose');
const path = require('path');
const relative_path = path.join(__dirname, '../', '/.env');

require('dotenv').config({path: relative_path});
// const password = process.argv[2];
const uri = process.env.URI;
const connect = () => {
	mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log("Mongo is connected"))
	.catch(err => console.log(err.message));
	}
module.exports = connect;
