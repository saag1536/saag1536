const express = require("express");
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan =require('morgan')
const app = express();
const port = 4000;

app.use(morgan('combined'));
app.get("/",(req,res)=>{
    res.send("Pongpol 2");


})
app.listen(port,()=>{
    debug("Help Me Pls"+chalk.yellow(port));


})

