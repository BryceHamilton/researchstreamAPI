const router = require('express').Router();
const clientAddress = process.env.CLIENT_ADDRESS;

router.get('/', (req, res) => {
  res.redirect(clientAddress);
});

module.exports = router;
