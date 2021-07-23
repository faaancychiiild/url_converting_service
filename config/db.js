const mongoose = require('mongoose');
// const password = process.argv[2];
const uri = `mongodb+srv://serene_fortress:1234@cluster0.mt9p4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const connect = () => {
	mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log("Mongo is connected"))
	.catch(err => console.log(err.message));
	}
module.exports = connect;
