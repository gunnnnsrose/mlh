
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/appapi', { 
    target: 'http://www.mei.com',
    host:"www.mei.com",
    changeOrigin:true 
  }));
  app.use(proxy('/v4', { 
    target: 'http://10.2.157.102:8080',
    host:"10.2.157.102:8080",
    changeOrigin:true 
  }))

} 	                                                                                         