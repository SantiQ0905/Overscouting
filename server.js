const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 3000;

dotenv.config();

app.get('/env', (req, res) => {
    res.json({
        TBA_AUTH_KEY: process.env.TBA_AUTH_KEY
    });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});