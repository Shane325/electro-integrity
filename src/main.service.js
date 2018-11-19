'use strict'

/*
 * Module dependencies
 */
let _ = require('lodash')
let projects = require('./config/projects').projects

/*
 * Return a project by id
 *
 * @param - projectId
 * @returns - project object
 */
module.exports.getProjectById = (req, res, next, projectId) => {
  var project = _.find(projects, (project) => {
    return project.id == projectId
  })
  req.project = project
  next()
}
