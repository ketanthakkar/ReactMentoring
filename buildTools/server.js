import express from 'express';
import open from 'open';

var app = express();
const port = 4000;

app.use(express.static('src'));

//Not required as it's index.html
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + '/src/index.html'));
// });

app.listen(port, function (err) {
  if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
})