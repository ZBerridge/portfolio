var webpack = require('webpack');
var path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: {
        app: ['./src/main.js',]
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: '/dist/js',
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': 'vue-style-loader!css-loader!sass.loader',
                        'sass': 'vue-style-loader!css-loader!sass.loader?indendtedSyntax'
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};
