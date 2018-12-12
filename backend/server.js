const express = require('express');
const router = require('./api/routes.js');
const bodyParser = require('body-parser');
//const cors = require("cors")
const PORT = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({
  extended: true 
}))
app.use(bodyParser.json())
//app.use(cors())
app.use(router)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`)
})