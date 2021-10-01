const express = require("express");
const http = require("http");

const app = express();

function wall(black_ip){
    app.use((req, res, next) => {
        console.log("received: ", req.ip)

        if (req.ip===black_ip){
            res.status(401).send("Denied!")
        }
        else {
            next();
        }
    });
    app.use((req, res) => {
        res.end("Hello")
    })
    app.listen(3000, () => {
        console.log("Firewall up!")
    })
}

wall("::ffff:127.0.0.1")