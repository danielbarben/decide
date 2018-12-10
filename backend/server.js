const express = require('express');
const router = require('./api/routes.js');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.urlencoded({
  extended: false 
}))
app.use(router)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}...`)
})