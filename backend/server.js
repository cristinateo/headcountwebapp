const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const Cors = require('@koa/cors')
const BodyParser = require('koa-bodyparser')
const Helmet = require('koa-helmet')
const respond = require('koa-respond')
const mongoose = require('mongoose');

const app = new Koa()
const router = new Router()

if (process.env.NODE_ENV === 'development') {
  app.use(Logger())
}

app.use(Cors())

require('./routes')(router)

app.use(BodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

// app.use(require('koa-static')('./build'))

mongoose.connect('mongodb://user:P4ssword!@ds046377.mlab.com:46377/headcountapp_mongodb')

module.exports = app
