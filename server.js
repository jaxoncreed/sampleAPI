var documentation = require('./apidocs.json');





var restify = require('restify');


var server = restify.createServer();
server.use(restify.bodyParser());


server.get('v0/hello/:name', function(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
});
server.post('v0/adduri/:a/:b', function(req, res, next) {
    res.send(parseInt(req.params.a) + parseInt(req.params.b) + "");
    next();
});
server.post('v0/addbody', function(req, res, next) {
    res.send(parseInt(req.body.a) + parseInt(req.body.b) + "");
    next();
});
server.get('/apidocs', function(req,res,next) {
    res.send(documentation);
    next();
});








server.listen(8000, function() {
  console.log('%s listening at %s', server.name, server.url);
});