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
  }
}