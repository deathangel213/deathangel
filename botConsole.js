const builder = require('botbuilder');

if (process.argv.length == 3) {

    console.log(`Using bot: ${process.argv[2]}`);

    const myBot = require(`./${process.argv[2]}`);

    const connector = new builder.ConsoleConnector().listen();
    const bot = myBot.buildBot(builder, connector);

}
else{
    console.log("Need 1 argument for the name of the bot")
}
