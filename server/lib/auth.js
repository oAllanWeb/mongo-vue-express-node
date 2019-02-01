var md5 = require('md5');
var token = require('./token');


module.exports.authorize = function (request, response, next) {
    console.log(request.headers);
    var apiToken = request.headers['x-api-token'];
    token.verify(apiToken, next);
    next();
};

