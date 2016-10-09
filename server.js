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
        builder.Prompts.text(session, "My favorite place is Masa in Echo Park https://www.yelp.com/biz/masa-of-echo-park-los-angeles");
    },
    function (session, results) {
        session.send("Well, I’m always metaling… Check out this place they have lots of metal trains and stuff https://www.yelp.com/biz/union-station-los-angeles");
    },
    function (session, results) {
        builder.Prompts.text(session, "Well I think hanging out on the sidewalk is pretty rad.");
    },
    function (session, results) {
        session.send("There are some great Museums around this town... Like the iron works place, the metal recylcing place, any junkyard with lots of metal.");
    },
    function (session, results) {
        builder.Prompts.text(session, "You have a very unmetal name. I think I'll call you Thrasher");
    },
    function (session, results) {
        session.send("The Broad Museum has a very rock and roll building, Thrasher. I guess the inside has some evil exhibits. https://www.yelp.com/biz/the-broad-los-angeles-4");
    },
        function (session, results) {
        session.send("Did I ever tell you about that time I saw skid row on tour? :the_horns:");
    },
    function (session, results) {
        builder.Prompts.text(session, "Good music around here? Well the Grammy Museum has many halls of rockers. https://www.yelp.com/biz/the-grammy-museum-los-angeles-2");
    },
    function (session, results) {
        session.send("Head banging, hell yeah! I love pizza! Check out https://www.yelp.com/biz/pizza-romana-los-angeles?osq=Best+Pizza");
    },
    function (session, results) {
        builder.Prompts.text(session, "I would suggest The Rooftop Bar at the Standard... Hair, leather, and makeup check? https://www.yelp.com/biz/the-rooftop-at-the-standard-downtown-la-los-angeles?osq=rooftop+bars");
    },
    function (session, results) {
        session.send("I'm tired what kind of person is up in the afternoon," + results.response + "??");
    },
    function (session, results) {
        builder.Prompts.text(session, "May rock be with you");
    }
]);
