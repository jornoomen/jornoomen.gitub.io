var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path');

var sassOptions = {
    outputStyle: 'compressed',
    includePaths: [
        path.resolve(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets')
    ]
};

module.exports = {
    entry : [
        __dirname + '/src/scss/app.scss'
    ],
    devtool: 'source-map',
    output: {
        path: __dirname + "/assets/build/",
        publicPath: "/build/",
        filename: 'js/app.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style',
                'raw!autoprefixer?{browsers:["last 2 version", "ie >= 9"]}!sass?' + JSON.stringify(sassOptions)
            )
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/app.css')
    ]
};
