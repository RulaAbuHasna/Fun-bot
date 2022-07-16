require('dotenv').config();
const { Client, Intents, MessageEmbed } = require('discord.js');
const morningJob = require('./src/crons/cron');
const keepAlive = require('./server');
const { isMessageValid, response } = require('./src/helpers/helpers')

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Welcome ${client.user.tag}`);

    const channel = client.channels.cache.get('992875822102872114')
    morningJob(channel).start()
});

client.on("message", (message) => {
    const msg = message.content

    if (message.author.bot) { // Don't listen to bots. Even Idle-RPG himself.
        return;
    }
    if (isMessageValid(msg)) {
        message.reply(response(msg))
    } else if (msg === '#play') {
        message.reply('Wanna play tic tac toe with me?')

        const collector = message.channel.createMessageCollector({ max: 10, time: 10000 });
        //   collector.on('collect', m => {
        //       console.log(m.content);
        //   })
        collector.on('collect', m => {
            if (m.content === 'yes') {
                const embed = new MessageEmbed({ title: 'Great 🥰', description: 'I will send you an invite later today', color: 'BLURPLE' })
                message.reply({ embeds: [embed] })
            }
        })
    }
})

keepAlive()
client.login(process.env.SECRET_TOKEN);
