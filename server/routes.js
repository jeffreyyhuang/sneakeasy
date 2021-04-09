const express = require('express');

const controllers = require('./controller.js');

let sneakers = express.Router();

sneakers.get('/', controllers.getUpcomingReleases);

sneakers.post('/wishlist', controllers.addToWishlist);

module.exports.sneakers = sneakers;