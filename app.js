const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express()

app.use(cors())
app.use(bodyParser.json())

// Import Routes
const userRoute = require('./routes/user');
const listsRoute = require('./routes/lists')
app.use('/user', userRoute);
app.use('/lists', listsRoute)

// Routes
app.get('/', (req, res, next) => {
    res.send('Hello World')
})
// app.post()
// app.put()
// app.delete()

// Connect mongoDB
mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true  }, () => {
	console.log("Connected to DB")
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on PORT: ${port}`))

// latest rev