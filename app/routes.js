// express router
const express = require('express')
router = express.Router()
mainController = require('./controllers/main.controller')


// export router
module.exports = router;

// routes
router.get('/', mainController.showProperties)