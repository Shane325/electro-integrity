'use strict'

/**
 * Module dependencies
 *
 */
let express = require('express')
let router = express.Router()
let controller = require('./main.controller')
let service = require('./main.service')

// Define the application routes
router.get('/', controller.getHome)
router.get('/about', controller.getAbout)
router.get('/services', controller.getServices)
router.get('/projects', controller.getProjects)
// router.get('/project/:projectId', controller.getProject)
router.get('/contact', controller.getContact)
// router.post('/contact/send-email', controller.sendContactEmail)

// Route middleware
// router.param('projectId', service.getProjectById)

module.exports = router