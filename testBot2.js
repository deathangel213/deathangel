function buildBot(builder, connector) {
    var bot = new builder.UniversalBot(connector);

    var model = 'https://api.projectoxford.ai/luis/v1/application?id=bb83b31a-f451-4b7c-b962-df4d4af75a2c&subscription-key=71cd924cf4d04f82ba6c2b1fd1585530';
    var recognizer = new builder.LuisRecognizer(model);
    var intents = new builder.IntentDialog({ recognizers: [recognizer] });
    bot.dialog('/', intents);

    intents.matchesAny(['FindFood', 'findFood', 'findfood', 'deathangel.FindFood', 'deathangel:FindFood'], [
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

    return bot;

}


exports.buildBot = buildBot;