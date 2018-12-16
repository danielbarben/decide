const express = require('express');
const router = require('./api/routes.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

/*app.use(bodyParser.urlencoded({
  extended: false 
}))
app.use(bodyParser.json())*/
server.use(bodyParser.json({ extended: false })); aus dem Beispiel
app.use(router)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`)
})