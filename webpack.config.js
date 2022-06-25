const path = require('path');
const fs = require('fs');
const loader = require('sass-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");


const PAGES_DIR = `${path.resolve(__dirname, "src")}/pug/pages/`;

const PAGES = fs
    .readdirSync(PAGES_DIR)
    .filter((fileName) => fileName.endsWith(".pug"));

console.log(PAGES_DIR)
    
module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, './src/js/index.js')
    },
    output: {
        filename: '[name].js',
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]'
    }, 
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
            },
        port: 3000,
        open: true,
        hot: true,
        compress: true, 
        historyApiFallback: true,
        liveReload: true,
        watchFiles: {
        paths: PAGES.map(i => {
            return `./src/pug/pages/${i.replace(/\.pug/, ".html")}`
        }), 
            options: {
            usePolling: true,
            },
        },
    },
    module: {
        rules : [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractWebpackPlugin.loader,
                    'css-loader',
                    'resolve-url-loader',
                    'sass-loader'
                ]
            },
            { 
                test: /\.(png|svg|jpg|jpeg|gif|ttf)$/i, 
                type: 'asset/resource', 
            },
            {
                test: /\.pug$/,
                include: path.join(__dirname, 'src/pug'),
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
        ]
    },
    plugins: [
        ...PAGES.map(
            (page) =>
            new HtmlWebpackPlugin({
                template: `${PAGES_DIR}/${page}`,
                filename: `./${page.replace(/\.pug/, ".html")}`,
            })
        ),
        new MiniCssExtractWebpackPlugin({
            filename: '[name].css'
        }),
        new HtmlWebpackPugPlugin({
            adjustIndent: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "./src/assets",
                    to: "./assets"
                }
            ]
        }),
    ]
};
