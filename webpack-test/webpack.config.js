module.exports = {
    entry: './main.js',
    // entry: {
    //     Profile: './main.js',
    //     Feed: './main1.js'
    // },
    output: {
        path: './dist',
        publicPath: './dist/',
        filename: 'bundle.js'
        // filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
        ]
    }
}