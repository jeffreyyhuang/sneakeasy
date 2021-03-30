const express = require('express');

const controllers = require('./controller.js');

let sneakers = express.Router();

sneakers.get('/', controllers.getUpcomingReleases);

module.exports.sneakers = sneakers;