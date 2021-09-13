const { Routes } = require('discord-api-types/v9');
const { Collection, Client, Discord, MessageEmbed, Intents, Interaction } = require('discord.js');
const client = new Client({
    intents: [Intents.
        FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES
    ]
});
const config = require('./config.json')
const { badwords } = require('./badwords.json')
const member = require('discord.js')
const user = require('discord.js')
const guild = require('discord.js')
const fs = require('fs')
const Levels = require('discord-xp');
const prefix = "!"
let servers = {};
const ytdl = require('ytdl-core')

client.on('ready', () => {
    console.log(`${client.user.tag} is now online and logged in! Discord.js 13`)

    client.on('message', message => {
        if (message.content === "-ping") {
            console.log("Pong")
            message.reply("pong")
        }
        if (message.content === "badword") {
            message.delete()
            return channel.send("Please don't swear!");
        }
        var content = message.content;
        for (var i = 0; i < badwords.length; i++) {
            if (content.includes(badwords[i])) {
                message.delete();
                message.channel.send(`Please don't swear ${message.author.username} this could result in a mute, kick or a ban.🙏🏻`)
                console.log(badwords[i], message.author.username, message.content);
                break;
            }
        }
        if (message.content.startsWith('http', 'https')) {

            message.delete();
            message.channel.send("Don't advertise here!")

        }

        // if (message.content.startsWith('discord.gg')) {
        //     message.delete();
        //     message.channel.sendTyping("Discord")
        //     message.channel.send("Don't advertise here!")
        // }

    })
})

client.login(config.token)