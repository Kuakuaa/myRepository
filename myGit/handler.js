const fs = require("fs");

function home(response,) {
  console.log("这是home的handel");
  response.setHeader("Content-Type", "text/html;charset: utf-8;");
  fs.createReadStream(__dirname + "/index.html").pipe(response);
}

function review(response) {
  console.log("这是review的handel");
  response.setHeader("Content-Type", "text/html;charset: utf-8;");
  fs.createReadStream(__dirname + "/review.html").pipe(response);
}

function api_records(response, params) {
  console.log("这是api_records的handel");
  response.setHeader("Content-Type", "application/json;charset: utf-8;");
  let myObj = {
    name: "布谷",
    age: 17,
  };
  response.end(JSON.stringify(params));
}

module.exports = {
  home,
  review,
  api_records
}