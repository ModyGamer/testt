const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("609016678902136877")
setInterval(function() {
channel.send(`ModyIsTheBest`);
}, 30)
})

client.login(process.env.BOT_TOKEN);