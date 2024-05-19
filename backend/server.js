const Discord = require('discord.js');
const axios = require('axios');
const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const crypto = require('crypto');
const fs = require('fs');
const stream = require('stream');
const path = require('path');

// Import your chunking and encryption functions
const { chunkFile } = require('./utils/fileChunking');
const { encrypt } = require('./utils/fileEncryption');

const app = express();

const db = require('./database');

app.post('/upload', upload.single('file'), (req, res) => {
    const { originalname: name, size, path } = req.file;
    db.run(`INSERT INTO files(name, size, path) VALUES(?, ?, ?)`, [name, size, path], function(err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
    console.log(req.file);
    // Add your logic here to handle the uploaded file
    // This might involve calling chunkFile and encrypt

    res.status(200).send('File uploaded successfully');
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

const client = new Discord.Client();
client.login(100352); // 'your-bot-token'

client.on('ready', () => {
    const channel = client.channels.cache.get('channel-id');
    fs.readdirSync('chunks').forEach((chunkFile) => {
        const chunkPath = path.join('chunks', chunkFile);
        channel.send({
            files: [{
                attachment: chunkPath,
                name: chunkFile
            }]
        });
    });
});
