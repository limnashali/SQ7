module.exports = {
    entry:  '/Users/limnash/SQ7/src/index.js',
    output: {
        path:  '/Users/limnash/SQ7/src/js',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js/,
            loader: 'babel',
            include: __dirname + '/src',
          },
          {
            test:   /\.scss/,
            loader: 'style!css!sass',
            
        },
        {
            test:   /\.html/,
            loader: 'html',
        }
        ]
      }
};