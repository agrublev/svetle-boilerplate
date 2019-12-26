const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const { less } = require("svelte-preprocess-less");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { mdsvex } = require("mdsvex");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
    entry: {
        bundle: ["./src/index.js"]
    },
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte")
        },
        extensions: [".mjs", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].[id].js"
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        hotReload: true,
                        style: less()
                    }
                }
            },
            {
                test: /\.md$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        hotReload: true,
                        preprocess: mdsvex({
                            extension: ".md", // the default is '.svexy', if you lack taste, you might want to change it
                            // layout: path.join(__dirname, "./DefaultLayout.svelte"), // this needs to be an absolute path
                            // parser: md => md.use(SomePlugin), // you can add markdown-it plugins if the feeling takes you
                            // you can add markdown-it options here, html is always true
                            markdownOptions: {
                                typographer: true,
                                linkify: true
                                // highlight: (str, lang) => whatever(str, lang) // this should be a real function if you want to highlight
                            }
                        })
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    /**
                     * MiniCssExtractPlugin doesn't support HMR.
                     * For developing, use 'style-loader' instead.
                     * */
                    prod ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            title: "AWESOME SVETLE"
        })
    ],
    devtool: prod ? false : "source-map"
};
