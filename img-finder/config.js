require('dotenv').config();

const PORT = process.env.PORT || 3001;
const API_URL = process.env.API_URL || 'https://picsum.photos';
const IMG_WIDTH = process.env.IMG_WIDTH || 600;

module.exports = {
    PORT,
    API_URL,
    IMG_WIDTH
};