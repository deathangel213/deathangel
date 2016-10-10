var builder = require('botbuilder');

var deathangelBot = require('./deathangelBot');

var connector = new builder.ConsoleConnector().listen();
var bot = deathangelBot.buildBot(builder, connector);


console.log(process.argv[2]);
