const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).send(`
        <h1>Home page</h1>
        <a href="/about">Go to About page</a>    
    `)
});

app.get('/about', (req, res) => {
    res.status(200).send(`
        <h1>About page</h1>
        <a href="/">Go to Home page</a>
    `)
})

app.all('*', (req, res) => {
    res.status(404).send(`
        <h1>404 Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/">Return to Home Page</a>
    `)
})

app.listen(PORT, () => {
    console.log(`Server is running: http://localhost:${PORT}/`)
})