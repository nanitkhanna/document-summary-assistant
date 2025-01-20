const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname, '../../.env')});

const requiredEnvVariables = [
  'PORT',
  'ALLOWED_ORIGINS',
  'UPLOAD_PATH',
  'GEMINI_API_KEY',
  'ALLOWED_FILE_TYPES'
];

if (process.env.NODE_ENV === 'development') {
  requiredEnvVariables.forEach((key) => {
    if (!process.env[key]) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  });
}

module.exports = {
  PORT: process.env.PORT || 3000,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS,
  UPLOAD_PATH: process.env.UPLOAD_PATH,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  ALLOWED_FILE_TYPES: process.env.ALLOWED_FILE_TYPES
};
