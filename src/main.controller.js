'use strict'

/**
 * Module dependencies
 *
 */
let config = require('./config/config')
let commonConfig = require('./config/common')
let homeConfig = require('./config/home')
let aboutConfig = require('./config/about')
let servicesConfig = require('./config/services')
let projectsConfig = require('./config/projects')
// let projectConfig = require('./config/project')
let contactConfig = require('./config/contact')
// let HttpStatus = require('http-status-codes')
// let MAILGUN_API_KEY = config.mailgun.api_key
// let MAILGUN_DOMAIN = config.mailgun.domain
// let MAILGUN_EMAIL = config.mailgun.email
// let mailgun = require('mailgun-js')({
//   apiKey: MAILGUN_API_KEY,
//   domain: MAILGUN_DOMAIN
// })

/**
 * Return home page
 *
 * @returns - renders home page
 */
module.exports.getHome = (req, res) => {
  res.render('../views/pages/index', {
    js: config.lib.js,
    css: config.lib.css,
    pageTitle: homeConfig.pageTitle,
    state: homeConfig.state,
    common: commonConfig
  })
}

/**
 * Return about page
 *
 * @returns - renders about page
 */
module.exports.getAbout = (req, res) => {
  res.render('../views/pages/about', {
    js: config.lib.js,
    css: config.lib.css,
    pageTitle: aboutConfig.pageTitle,
    state: aboutConfig.state,
    common: commonConfig
  })
}

/**
 * Return services page
 *
 * @returns - renders services page
 */
module.exports.getServices = (req, res) => {
  res.render('../views/pages/services', {
    js: config.lib.js,
    css: config.lib.css,
    pageTitle: servicesConfig.pageTitle,
    state: servicesConfig.state,
    common: commonConfig
  })
}

/**
 * Return projects page
 *
 * @returns - renders projects page
 */
module.exports.getProjects = (req, res) => {
  res.render('../views/pages/projects', {
    js: config.lib.js,
    css: config.lib.css,
    pageTitle: projectsConfig.pageTitle,
    state: projectsConfig.state,
    common: commonConfig
  })
}

/**
 * Return project page
 *
 * @returns - renders project page
 */
module.exports.getProject = (req, res) => {
  res.render('../views/pages/project')
}

/**
 * Returns contact page
 *
 * @returns - renders contact page
 */
module.exports.getContact = (req, res) => {
  res.render('../views/pages/contact', {
    js: config.lib.js,
    css: config.lib.css,
    pageTitle: contactConfig.pageTitle,
    state: contactConfig.state,
    common: commonConfig
  })
}

/**
 * Send contact email
 *
 */
// module.exports.sendContactEmail = (req, res, next) => {
//   var data = {
//     from: req.body.email,
//     to: MAILGUN_EMAIL,
//     subject: req.body.name + ' sent a message from www.kearneyplumbinginc.com',
//     text: req.body.message
//   }

//   mailgun.messages().send(data, (error, body) => {
//     if (error) {
//       return next(error)
//     }

//     res.status(HttpStatus.OK)
//     res.send('ok')
//   })
// }
