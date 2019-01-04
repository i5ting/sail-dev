#!/usr/bin/env node

process.env.NODE_ENV = 'development'

const devConfig = require(process.cwd()+'/build/webpack.config.dev')
const path = require("path")
const kwm = require("kwm")
const webpack = require('webpack')
const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')

// $ GET /package.json
app.use(serve( path.resolve( process.cwd(), "./dist" )))
// This function makes server rendering of asset references consistent with different webpack chunk/entry configurations

const compile = webpack(devConfig)

app.use(kwm(compile))

app.listen(3000)
