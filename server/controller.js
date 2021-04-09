const db = require('../db/connection.js');

module.exports = {
  getUpcomingReleases: (req, res) => {
    let mysqlString = `SELECT * FROM sneakers INNER JOIN photos ON sneakers.product_id = photos.product`;
    db.query(mysqlString, (error, results) => {
      if (error) {
        console.log('error with getUpcomingReleases query: ', error);
      } else {
        res.status(200).send(results);
      }
    })
  },

  addToWishlist: (req, res) => {
    let mysqlString = `INSERT INTO wishlist(product) VALUES(${req.body.product_id})`;
    db.query(mysqlString, (error, results) => {
      if (error) {
        console.log('error with posting item to wishlist: ');
      } else {
        res.status(201).send('Added product to wishlist!');
      }
    })
  },

  getWishlist: (req, res) => {
    let mysqlString = `SELECT * FROM sneakers INNER JOIN photos on sneakers.product_id = photos.product INNER JOIN wishlist on sneakers.product_id = wishlist.product`;
    db.query(mysqlString, (error, results) => {
      if (error) {
        console.log('error with retrieving wishlist');
      } else {
        res.status(201).send(results);
      }
    })
  }
}