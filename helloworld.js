//Talking with the user.. as simple as possible
var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

bot.dialog('/', function (session) {
    session.send('You said: ' + session.message.text)
     session.send('Hello World');
});
