var builder = require('botbuilder');

var connector = new builder.ConsoleConnector().listen();
var bot = new builder.UniversalBot(connector);

bot.dialog('/', [
   function (session) {
        builder.Prompts.text(session, " I’m practicing metal right now, but I always have time for my fellow LA metalheads!:the_horns: What’s your name?");
    },
    function (session, results) {
        session.userData.name = results.response;
        builder.Prompts.number(session, results.response + " Metal punched a tin can, hahaha! What's Up?"); 
    },
    function (session, results) {
        session.userData.coding = results.response;
        builder.Prompts.choice(session, "My favorite place is Masa in Echo Park"]);
    },
    function (session, results) {
        session.userData.language = results.response.entity;
        session.send("Well, I’m always metaling…Check out this place "
    }
]);
