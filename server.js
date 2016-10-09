var builder = require('botbuilder');
var restify = require('restify');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url); 
});

var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.dialog('/', [
   function (session) {
        builder.Prompts.text(session, "I’m practicing metal right now, but I always have time for my fellow LA metalheads!:the_horns: What’s your name?");
    },
    function (session, results) {
        session.userData.name = results.response;
        builder.Prompts.text(session, results.response + "Metal punched a tin can, hahaha! What's Up?"); 
    },
    function (session, results) {
        builder.Prompts.text(session, "My favorite place is Masa in Echo Park");
    },
    function (session, results) {
        session.send("Well, I’m always metaling…Check out this place ");
    }
]);
