function buildBot(builder, connector) {
    var bot = new builder.UniversalBot(connector);
    var intents = new builder.IntentDialog();
    bot.dialog('/', intents);

    intents.matches(/^Metal/i, [
        function (session) {
            session.send("Always rockin");
            session.cancelDialog();
        }
    ]);

    intents.matches(/^Hi$/i, [
        function (session) {
            builder.Prompts.text(session, "I’m practicing metal right now, but I always have time for my fellow LA metalheads!:the_horns: What’s your name?");
        },
        function (session, results) {
            session.userData.name = results.response;
            builder.Prompts.text(session, results.response + " Metal punched a tin can, hahaha! What's Up?"); 
        },
        function (session, results) {
            builder.Prompts.text(session, "My favorite place is Masa in Echo Park");
        },
        function (session, results) {
            session.send("Well, I’m always metaling…Check out this place ");
            session.cancelDialog();
        }
    ]);

    intents.onDefault((session) => {
        session.send("No idea what you're talking about...");
    });
    return bot;
}


exports.buildBot = buildBot;