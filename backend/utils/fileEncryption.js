const crypto = require('crypto');

function encrypt(buffer, password) {
  const cipher = crypto.createCipher('aes-256-cbc', password);
  const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
  return encrypted;
}
