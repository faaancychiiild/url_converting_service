const express = require('express'),
router = express.Router();
const { nanoid } = require('nanoid'),
config = require('config'),
isValid = require('is-valid-http-url'),
User = require('../schemas/user'),
Url = require('../schemas/url');
const cors = require('cors');
router.use(cors());

router.post('/url', async (req, res) => {
  const { original } = req.body;
  const baseUrl = config.get('baseUrl');

  // Check if the base URL is valid
  if (!isValid(baseUrl)) {
    return res.status(401).json('The URL is not valid.');
  }

  // Create some code
  const nano = nanoid(7);
  // Check if the long URL is already converted
  if (isValid(original)) {
    try {
      let check = await Url.findOne({ minified: original });
      if(check){
        return res.status(401).json("This URL is shortened.");
      }
      let url = await Url.findOne({ original });
      let count = 0;
      if (url) {
        res.status(200).json(url);
      } else {
        const minified = baseUrl + '/' + nano;

        url = new Url({
          nano,
          original,
          minified,
          count
        });

        await url.save();

        res.status(200).json(url);
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json('Server error occured');
    }
  } else {
    res.status(401).json('Invalid long url');
    res.send('The URL you entered is not valid.');
  }
});

router.post('/addNewUser', async (req, res) => {
  try {
    const { ip, record } = req.body;
    const userAgent = req.headers['user-agent'];
    const uniqueVisitor = ip + userAgent;
    let user = await User.findOne({ uniqueVisitor });
    if(user){
      user.history.push(record);
      user.save();
      res.status(200).json(user);
    }else{
      user = new User({
        uniqueVisitor,
        history: [record]
      });
      await user.save();
      res.status(200).json(user);
    }
  } catch(error) {
    res.send('Unexpected error occured.');
  }
});
router.post('/delallaPPhisToRy', async (req, res) => {
    try {
      const { ip } = req.body;
      const userAgent = req.headers['user-agent'];
      const uniqueVisitor = ip + userAgent;
      const user = await User.findOne({ uniqueVisitor });
      if(user){
        user.history = [];
        user.save();
        res.status(200).json("history is cleared");
      }else{
        res.status(401).json("No history");
      }
    } catch(error) {
      res.status(404).json("Error");
    }
});
router.post('/app/history', async (req, res) => {
  try {
    const { ip } = req.body;
    const userAgent = req.headers['user-agent'];
    const uniqueVisitor = ip + userAgent;
    let data = await User.findOne({ uniqueVisitor });
    if(data){
      res.status(200).json(data.history);
    }else{
      res.status(401).json("No user history.");
    }
  }catch(error) {
      res.status(401).json("No user history.");
  }
});

module.exports = router;
