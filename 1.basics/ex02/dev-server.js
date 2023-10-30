//서버를 만들어서 사용하는 중..

const http = require("http");
const path = require("path");
const express = require("express");

const port = 9090;
const application = express().use(
  express.static(path.join(__dirname, "public"))
); // =default servelt
http
  .createServer(application)
  .on("listening", () => {
    console.log(`server starts...on ${port}`);
  })
  .listen(port);
