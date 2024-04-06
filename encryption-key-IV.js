const { createCipheriv } = require('crypto');

function encryptText(text, key, iv) {
  const cipher = createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(iv));
  let encryptedData = cipher.update(text, 'utf8', 'base64');
  encryptedData += cipher.final('base64');
  return encryptedData;
}

// Your text to encrypt
const originalText = "";

// Your encryption key and IV
const key = "encryptionKey123"; // Ensure key is 32 bytes long for AES-256
const iv = "encryptionIV456"; // Ensure IV is 16 bytes long for AES

// Encrypt the text
const encryptedText = encryptText(originalText, key, iv);
console.log("Encrypted Text:", encryptedText);
