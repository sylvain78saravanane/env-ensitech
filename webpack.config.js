const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin'); // Ajoutez cette ligne

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // Babel pour transpiler le code JS moderne
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            // Traitement des fichiers SASS
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Injecte le CSS dans le DOM
                    'css-loader', // Résout les imports CSS
                    'sass-loader', // Compile SASS en CSS
                ],
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist'), // Remplace 'contentBase' par 'static'
        compress: true,
        port: 9000,
        hot: true, // Active le hot reload
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Template HTML
        }),
        new ESLintPlugin({
            extensions: ['js', 'jsx'], // Extension de fichiers à lister
            emitWarning: true, // Affiche les avertissements dans la console
            emitError: true, // Affiche les erreurs dans la console
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'], // Extensions résolues par défaut
    },
};
