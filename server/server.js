const path = require('path');
const express = require('express');
const app = express();
const router = require('./routes.js');

const PORT = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/sneakers', router.sneakers);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})