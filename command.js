const prefix = require('./config.json')

module.exports = (client, aliases, callback) => {

    if (typeof aliases === 'string') {
        aliases = [aliases]
    }

    client.on('message', message => {
        const { content } = message;

        aliases.forEach(alias => {
            const commmand = `${prefix}${alias}`;

            if (message.content == (`${commmand} `) || content === commmand) {
                console.log(`Running the command ${commmand}`);
                callback(message);
            }
        });
    })
}