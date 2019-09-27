var express = require('express');
var app = express();
var path = require('path')
 
var bodyParser = require('body-parser');

var storage = {"alarma": "No Alarm"}

app.use(bodyParser.json());

// app.get("/"), function (req, res) {
//   console.log("Serving index.html...")
//   res.sendfile(html_dir + 'index.html');
// }

app.use(express.static(path.join(__dirname, 'public')));

app.get('/data', function (req, res) {
  console.log("Requesting alarm status. GET /")
  res.send(storage);
});

// POST method route
app.post('/send', function (req, res) {
    console.log("Received data from sensor")
    console.log(req.body)
    storage = req.body
    // if (req.body.alarma != undefined) {
      res.send({"Received": "OK"})
    // } else {
    //   res.send({"error": "Malformed request"})
    // }
    
  })
 
app.listen(80, function () {
  console.log('App listening on port 80!');
});
