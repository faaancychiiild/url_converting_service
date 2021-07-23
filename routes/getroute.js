const express = require('express'),
router = express.Router(),
Url = require('../schemas/url'),
User = require('../schemas/user');

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ nano: req.params.code });
    if (url) {
      url.count += 1;
      url.save();
      return res.redirect(url.original).json(req.headers['x-forwarded-for']);
    } else {
      return res.status(404).json('We can not find the URL you requested.');
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json('Server error');
  }
});

module.exports = router;
