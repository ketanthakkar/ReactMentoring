var express = require('express');
var app = express();
const port = 4000

app.use(express.static('src'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})