var builder = require('botbuilder');
var restify = require('restify');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
  console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);

function testResponse(req, res, next) {
    console.log("Hi");
    res.send('hello, you');
    return next();
}

server.get('/hello', testResponse);
server.post('/api/messages', connector.listen());

// Create LUIS recognizer that points at our model and add it as the root '/' dialog for our Cortana Bot.
var model = 'https://api.projectoxford.ai/luis/v1/application/preview?id=bb83b31a-f451-4b7c-b962-df4d4af75a2c&subscription-key=71cd924cf4d04f82ba6c2b1fd1585530&q=';
var recognizer = new builder.LuisRecognizer(model);
var intents = new builder.IntentDialog({ recognizers: [recognizer] });
bot.dialog('/', intents);

intents.matches('FindFood', [
    function (session, args, next) {
        session.send("You want some food");
        // var task = builder.EntityRecognizer.findEntity(args.entities, 'TaskTitle');
        // if (!task) {
        //     builder.Prompts.text(session, "What would you like to call the task?");
        // } else {
        //     next({ response: task.entity });
        // }
    },
    // function (session, results) {
    //     if (results.response) {
    //         // ... save task
    //         session.send("Ok... Added the '%s' task.", results.response);
    //     } else {
    //         session.send("Ok");
    //     }
    // }
]);




// Add intent handlers



// dialog.onDefault(builder.DialogAction.send("I'm sorry I didn't understand. I can only create & delete alarms."));

intents.onDefault((session) => {
    session.send("No idea what you're talking about...");
});


