const express = require('express')
const router = express.Router();

const profileController = require('../controllers/project_controller')

router.get('/project',profileController.project)


module.exports = router;