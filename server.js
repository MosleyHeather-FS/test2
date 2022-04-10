const express = require("express");
require("dotenv").config();
const app = express();

app.get('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        message: "Using Get /",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id,
        }
    });
})

// post, patch, delete

app.post('/:id', (req, res, next) => {
    res.json({
        message: "Using - Post",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        },
    })
})

app.patch('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        message: "Using - Patch",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id,
        }
    })
})

app.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    res.json({
        message: "Using - Patch",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id,
        }
    })
})


// middleware modules for error handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});
//middleware to send error nicely
app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
        message: error.message, 
        status: error.status,
        method: req.method
    }
  });
})


app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))