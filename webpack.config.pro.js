const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: {
        index: './src/script/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',

    //Shows the source file error line
    devtool: "inline-source-map",


    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.(png|jpeg|gif|jpg|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: './img/[name].[ext]',
                },
            },
            // {
            //     use: [
            //         // Translates CSS into CommonJS
            //         'css-loader',
            //         //Prefix Css
            //         'postcss-loader',
            //         // Compiles Sass to CSS
            //         'sass-loader',
            //     ],
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: (resourcePath, context) => {
                        // publicPath is the relative path of the resource to the context
                        // e.g. for ./css/admin/main.css the publicPath will be ../../
                        // while for ./css/main.css the publicPath will be ../
                        return path.relative(path.dirname(resourcePath), context) + '/';
                      },
                      // by default it uses publicPath in webpackOptions.output
                      
                      hmr: process.env.NODE_ENV === 'development',
                     
                    },
                  },
                  'css-loader?url=false',
                  'postcss-loader',
                  'sass-loader'
                ],
              },
            //   {
            //     test: /\.css$/,
            //     use: [
            //       {
            //         loader: MiniCssExtractPlugin.loader,
            //         options: {
            //           publicPath: (resourcePath, context) => {
            //             return path.relative(path.dirname(resourcePath), context) + '/';
            //           },

            //           hmr: process.env.NODE_ENV === 'production',

            //         },
            //       },
            //       'css-loader',
            //     ],
            //   },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        removeComments: true,
                        collapseWhitespace: true
                    }
                }],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './css/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],

}
