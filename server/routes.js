const express = require('express');

const controllers = require('./controller.js');

let sneakers = express.Router();

sneakers.get('/', controllers.getUpcomingReleases);

sneakers.post('/wishlist', controllers.addToWishlist);

sneakers.get('/wishlist', controllers.getWishlist);

module.exports.sneakers = sneakers;