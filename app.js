const express = require('express')
const app = express()
const port = 3000

//!! Middleware para servir contenido static.
app.use(express.static('public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/generic', (request, res) => {
    res.sendFile(__dirname + '/public/generic.html');
});

app.get('/elements', (request, res) => {
    res.sendFile(__dirname + '/public/elements.html');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))