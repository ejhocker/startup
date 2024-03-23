const express = require('express');
const app = express();

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});

app.use(express.static('public'));

