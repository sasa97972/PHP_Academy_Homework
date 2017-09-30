module.exports = {

    entry: './src/homework.js',
    output: {
        filename: 'index.js',
        path: '/Front-end/React/react-standalone/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] }
                }]
            }
        ]
    }
};