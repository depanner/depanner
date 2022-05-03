# Webpack express hmr

### modules

* webpack 5
* express
* vanilla js (no frameworks)

### description

Here you will find an example of a basic project using webpack 5 with an express server using
webpack-dev-middleware and webpack-hot-middleware to trigger for updates (hmr)

I also uses the module chokidar to watch for html file changes

### install

```
git clone https://github.com/depanner/webpack_express_hmr.git

cd webpack_express_hmr

npm i

npm run build:dev

npm run start:dev
```

### test

modify thoses files :

* src/frontend/pages/index/index.css
* src/frontend/pages/index/index.html
* src/frontend/pages/index/index.js
