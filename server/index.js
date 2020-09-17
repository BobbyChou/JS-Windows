/*
 * @Author: zhou teng
 * @Date: 2020-09-08 15:56:20
 * @LastEditTime: 2020-09-08 16:15:45
 */
const express = require('express')
const app = express()
const superagent = require('superagent');
const fs = require('fs')

app.get('/', function (req, res) {
  res.send('Hello World!');
});

superagent.get('https://juejin.im/frontend').end((err, res) => {
  if (err) {

  } else {
    fs.writeFile('./server/index.html', res.text, 'utf8', function (error) {
      if (error) {
        console.log(error);
        return false;
      }
      console.log('写入成功');
    })
  }
});

let server = app.listen(9002);