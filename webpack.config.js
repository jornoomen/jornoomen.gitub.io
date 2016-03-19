var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
});

var sassOptions = {
    outputStyle: 'nested',
    includePaths: [
        path.resolve(__dirname, 'node_modules/bootstrap-sass/assets/stylesheets')
    ]
};

module.exports = {
    entry : [
        __dirname + '/app/scss/app.scss'
    ],
    output: {
        path: __dirname + "/build/",
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
        new ExtractTextPlugin('css/app.css'),
        HTMLWebpackPluginConfig
    ]
};
