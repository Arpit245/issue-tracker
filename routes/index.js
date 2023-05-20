const express = require('express')

const router = express.Router()
const mainController = require('../controllers/home_controller')

router.get('/',mainController.home)
router.use('/project',require('./project'))








console.log("router running")
module.exports = router;