const express = require('express');
const path = require('path')
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'))
});

app.get('/about', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/about.html'))
})

app.get('/style.css', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'style.css'))
})

app.get('/Expressjs.svg', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'Expressjs.svg'))
})

app.all('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, './public/404.html'))
})


app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}/`)
})