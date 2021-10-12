
const express = require('express');

const app = express();

const path = require('path');

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});


app.post("/resultadoRegister", (req, res) => {
    res.redirect("/")
});

app.listen(process.env.PORT || 3030, () =>
    console.log('Servidor corriendo')
)