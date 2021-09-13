module.exports = (client) => {

    const isInvite = (guild, code) => {
        guild.fetchInvites().then(invites => {
            console.log(invites)
        })
    }
    client.on('message', message => {
        const { member, content, guild } = message;
        if (content.includes('https://')) {
            message.delete()
            message.channel.send("It needs alot of work")
            isInvite(guild, '')
        }
    })
}