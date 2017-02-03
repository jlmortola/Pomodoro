module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    root: __dirname,
    alias: {
    Add: 'public/components/Add.jsx',
    App: 'public/components/App.jsx',
    Sub: 'public/components/Sub.jsx',
    Start: 'public/components/Start.jsx',
    Timer: 'public/components/Timer.jsx'
    },

    extensions: ['', '.js', '.jsx']

  },

  module:{
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets:['react','es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      }
    ]
  }
}
