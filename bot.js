require('dotenv').config();
const { Client, Intents } = require('discord.js');
const morningJob = require('./src/crons/cron');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Welcome ${client.user.tag}`);

    const channel = client.channels.cache.get('992875822102872114')
    morningJob(channel).start()
});

client.login(process.env.SECRET_TOKEN);
