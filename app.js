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
const url = process.env.DB_CONNECTION
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to DB')
    })
    .catch( () => {
        console.error(`Error connecting to the DB. \n${err}`)
    })

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on PORT: ${port}`))

// latest rev