var documentation = {
    "name": "Sample API",
    "description": "Use this API to test things.",
    "version": "0.0.0",
    "author": {
        "name": "Jackson Morgan",
        "website": "http://www.JacksonCMorgan.com",
        "email": "jaxoncreed@gmail.com"
    },
    "tags": ["sample", "test"],
    "functions": [
        {
            "name": "Hello",
            "description": "Tells you Hello!",
            "backendUrl": "/v0/hello/{name}",
            "method": "GET",
            "uri": "/hello/{name}",
            "sampleUri": "/hello/Jackson"
        },
        {
            "name": "URI Add",
            "description": "Adds to numbers in the URL",
            "backendUrl": "/v0/adduri/{a}/{b}",
            "method": "POST",
            "uri": "/adduri/{a}/{b}",
            "sampleUri": "/adduri/3/2"
        },
        {
            "name": "Body Add",
            "description": "Adds to numbers provided in the body",
            "backendUrl": "/v0/addbody",
            "method": "POST",
            "uri": "/addbody",
            "sampleUri": "/adduri",
            "bodyModel": {
                "a": "Number",
                "b": "Number"
            },
            "sampleBody": {
                "a": 3,
                "b": 2
            }
        }
    ]
}





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








server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});