var path = require('path');


module.exports = {
    entry: {
        viz: "./app/viz/Main.js",
        data: "./app/data/Main.js",
        tests: './app/TestContext.js'
    },
    output: {
        filename: "./static/[name]_bundle.js"
    },

    devtool: 'source-map',

    resolve: {
      root: [
          path.resolve('./')
      ]
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}