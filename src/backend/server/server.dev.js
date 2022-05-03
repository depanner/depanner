const express = require('express')
const http = require('http')
const path = require('path')
const webpack = require('webpack')
const chokidar = require('chokidar') // Use chokidar to watch for html files

const webpackConfig = require(path.resolve('webpack', 'webpack.dev.js'))
const compiler = webpack(webpackConfig)
const app = express()
const server = http.createServer(app)
const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {publicPath: webpackConfig.output.publicPath})
const webpackHotMiddleware = require('webpack-hot-middleware')(compiler, {log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000})
const htmlFiles = `${path.resolve('src', 'frontend')}/**/*.html` // only take .html files
const watcher = chokidar.watch(htmlFiles)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve('_build')))
app.use(webpackDevMiddleware)
app.use(webpackHotMiddleware)

app.get('/', (request, response) =>
{
    response.sendFile(path.resolve('_build', 'index.html'))
})

watcher.on('ready', () =>
{
    console.debug('[DEBUG] watcher ready')
})

watcher.on('change', (path) => 
{
    console.debug(`[DEBUG] change detected on *** ${path} ***`)

    webpackHotMiddleware.publish({action: 'reload'})
})

server.listen(8000, () => 
{
    console.log('Server starting at http://localhost:8000')
})