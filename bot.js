require('dotenv').config();
const { Client, Intents } = require('discord.js');
const morningJob = require('./src/crons/cron');
const keepAlive = require('./server');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Welcome ${client.user.tag}`);

    const channel = client.channels.cache.get('992875822102872114')
    morningJob(channel).start()
});

client.on("message", (msg)=>{
    if(msg.content === 'Hey'){
        msg.channel.send('Hey there, friend.')
    }
    else if(msg.content.includes('i love you')){
        msg.channel.send('I love you, friend.')
    }
})

keepAlive()
client.login(process.env.SECRET_TOKEN);
