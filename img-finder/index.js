const {PORT, API_URL, IMG_WIDTH} = require('./config');
const app = require('express')();
const path = require('path');
const fs = require('fs');
const axios = require('axios');

const curretDir = process.cwd();
const sharedDir = path.join(curretDir, 'shared');
const imgPath = path.join(sharedDir, 'img.jpg');

const downloadImage = async () => {
    const response = await axios.get(`${API_URL}/${IMG_WIDTH}`, { responseType: 'arraybuffer' });
    fs.writeFileSync(imgPath, response.data);
};


app.get('/', async (req, res) => {
    fs.unlinkSync(imgPath)
    await downloadImage();
    res.sendFile(imgPath);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // create shared dir if it doesn't exist
    if (!fs.existsSync(sharedDir)) {
        fs.mkdirSync(sharedDir);
    }
    if (!fs.existsSync(imgPath)) {
        downloadImage();
    }
});
