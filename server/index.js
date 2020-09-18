/*
 * @Author: zhou teng
 * @Date: 2020-09-08 15:56:20
 * @LastEditTime: 2020-09-18 16:24:42
 */
const express = require('express')
const app = express()
const fs = require('fs')

const successTeplate = {
  code: 200,
  msg: 'success'
}

app.get('/login', function (req, res) {
  // res.json({})
});


let server = app.listen(9002);