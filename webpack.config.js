const path = require('path');
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new htmlPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
        })
    ],

}