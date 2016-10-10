var builder = require('botbuilder');
var restify = require('restify');

var deathangelBot = require('./deathangelBot');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url); 
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = deathangelBot.buildBot(builder, connector);
server.post('/api/messages', connector.listen());

