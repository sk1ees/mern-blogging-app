const express = require('express')
const cors = require('cors')
const { connect } = require('mongoose')
require('dotenv').config()

const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')


const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "https://localhost:3000" }))

app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)

connect(process.env.MONGO_URI).then(app.listen(process.env.PORT, () => { console.log(`server is running on port${process.env.PORT}`) })).catch(error => {
    console.log(error);
})