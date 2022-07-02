require('dotenv').config();
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Welcome ${client.user.tag}`);
});


client.on('message', msg => {
    if (msg.content.startsWith("hey")) {
            msg.reply(`**Kosomak`)
    
    }
});


client.login(process.env.SECRET_TOKEN);
