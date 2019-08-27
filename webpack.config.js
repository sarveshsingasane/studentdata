const HtmlWebpackPlugin = require("html-webpack-plugin");
  
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    
                    'style-loader',
                    'css-loader'
                ]
                
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }

                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },
    devServer: {
        proxy: {
        "/api": {
        "target": "http://localhost:3004",
        "secure": false,
        "pathRewrite": {
            "^/api": ""
        }
        }
        }
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
    ]
}