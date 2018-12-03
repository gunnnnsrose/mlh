
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/appapi', { 
    target: 'http://www.mei.com',
    host:"www.mei.com",
    changeOrigin:true 
  }))

} 	