const express = require('express'),
router = express.Router();

const cors = require('cors');
router.use(cors());
const messagebird = require('messagebird')('vnJkHLEz16EmYg3UdA9vDSFrk');
//This messagebird key is private and will be removed soon.

router.post('/sign_up', async (req, res) => {
	try {
		console.log("client number received");
		const { number } = req.body;
		messagebird.messages.create({
		  "recipients": '+995595477997',
		  "originator": "Me",
		  "body": "......."
		}, function (err, response) {
		  if (err) {
		    console.log(err);
		    res.status(401).json("Not a valid number");		  
		} else {
		  	console.log(response);
		  	res.status(200).json("sms was sent to my phone number ");
		  }
		});
		
	} catch(err) {
		res.json("auth failed");
	}

});

module.exports = router;
