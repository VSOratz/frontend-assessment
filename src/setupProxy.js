const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://s3.us-west-2.amazonaws.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/cdn.number8.com/LA'
      }
    })
  );
};