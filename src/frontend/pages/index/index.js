// required to reload when html file is edited
const webpackHotMiddleware = require('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true')

webpackHotMiddleware.subscribe((message) =>
{
    if (message.action === 'reload' || message.reload === true)
    {
        window.location.reload()
    }
})

import './index.css'

// required to reload when js or css is edited
if (module.hot)
{
    module.hot.accept()
}

console.log('test');