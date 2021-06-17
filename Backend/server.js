const express = require("express")
const morgan = require("morgan")
const cors = require('cors');
const bodyParser = require('body-parser');
const featured = require('./routes/featured')

const app = express()

app.use(morgan("tiny"))
app.use(cors())
app.use('/api/featured', featured)
app.get('/', (req, res) => res.send("store"));
app.get((req, res, next) => {
  res.status(200).json({ping: "pong"})
})

const port = 3000

app.listen(port, ()=> {
  console.log(`🚀 Server listening on port ` + port)
})
