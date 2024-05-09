"use strict"

const express = require("express")
const app = express()

/* ------------------------------------------------------- */
//! Required Modules:

require("dotenv").config()
const PORT = process.env.PORT || 8000

require("express-async-errors")

/* ------------------------------------------------------- */
//! Configrations:

const { dbConnection } = require("./src/configs/dbConnection")
dbConnection()

/* ------------------------------------------------------- */
//! Middlewares:

app.use(express.json())

app.use(require('./src/middlewares/authentication'))

app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */
//! Routes:

app.use("/", require("./src/routes"))

app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to PRODUCT API',
        docs: {
            swagger: "http://127.0.0.1:8000/documents/swagger",
            redoc: "http://127.0.0.1:8000/documents/redoc",
            json: "http://127.0.0.1:8000/documents/json",
        },
        user: req.user,
    })
})

app.use("/uploads", express.static("./uploads"))

/* ------------------------------------------------------- */
//! errorHandler:

app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */
//! RUN SERVER:

app.listen(PORT, () => console.log('http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */
//! Syncronization 

// require('./src/helpers/sync')() // !!! Bütün dataları siler