const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const authRoutes = require("./routes/authRoutes")
// configure env
dotenv.config()

// database config
connectDB();

// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(morgan("dev")) // log requests to the console (only in development)

// routes
app.use('/api/v1/auth',authRoutes)

// rest api
app.get('/', (req, res) => {
    res.send(
        "<h1>Welcome to Ecommo App</h1>"
    )
})

// PORT
const PORT = process.env.PORT || 8080


// run listen
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port http://localhost:${PORT}`.cyan)
})