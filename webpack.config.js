const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        'ui-kit-colors-type': './src/pages/ui-kit-colors-type/index.js',
        'ui-kit-form-elements': './src/pages/ui-kit-form-elements/index.js',
        'ui-kit-cards': './src/pages/ui-kit-cards/index.js',
        'ui-kit-headers-footers': './src/pages/ui-kit-headers-footers/index.js',
        'landing-page': './src/pages/landing-page/index.js',
        'search-room': './src/pages/search-room/index.js',
        'room-details': './src/pages/room-details/index.js',
        'registration': './src/pages/registration/index.js',
        'sign-in': './src/pages/sign-in/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['html-loader', 'pug-plain-loader'],
            },
            {
                test: /\.(scss|css)$/, 
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|ttf|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/pages/ui-kit-colors-type/index.pug',
            filename: 'ui-kit-colors-type/index.html',
            chunks: ['ui-kit-colors-type']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/ui-kit-form-elements/index.pug',
            filename: 'ui-kit-form-elements/index.html',
            chunks: ['ui-kit-form-elements']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/ui-kit-cards/index.pug',
            filename: 'ui-kit-cards/index.html',
            chunks: ['ui-kit-cards']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/ui-kit-headers-footers/index.pug',
            filename: 'ui-kit-headers-footers/index.html',
            chunks: ['ui-kit-headers-footers']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/landing-page/index.pug',
            filename: 'landing-page/index.html',
            chunks: ['landing-page']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/search-room/index.pug',
            filename: 'search-room/index.html',
            chunks: ['search-room']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/room-details/index.pug',
            filename: 'room-details/index.html',
            chunks: ['room-details']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/registration/index.pug',
            filename: 'registration/index.html',
            chunks: ['registration']
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/sign-in/index.pug',
            filename: 'sign-in/index.html',
            chunks: ['sign-in']
        }),
    ]
}