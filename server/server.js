const express = require('express');
const fs = require('fs');
const app = express();

app.get('/video/', (req, res) => {
    const filePath = "video/output.m3u8"

    fs.readFile(filePath, (error, content) => {
        if (error){
            res.writeHead(500);
            res.end(); 
        }
        else {
            res.writeHead(200, {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "vnd.apple.mpegURL"
            });

            res.end(content, "utf-8")
        }
    });
});

app.get('/video/:sequence', (req, res) => {
    const filePath = "./video/" + req.params.sequence;
    fs.readFile(filePath, (error, content) => {
        if (error){
            res.writeHead(500);
            res.end(); 
        }
        else {
            res.writeHead(200, {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "vnd.apple.mpegURL"
            });

            res.end(content, "utf-8")
        }
    });
});

app.listen("3000")