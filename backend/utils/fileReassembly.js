const Discord = require('discord.js');
const client = new Discord.Client();

client.login(100352); //'your-bot-token'

client.on('ready', () => {
  const channel = client.channels.cache.get('channel-id');
  channel.send({
    files: [{
      attachment: './path/to/your/file',
      name: 'file.txt'
    }]
  });
});
 
