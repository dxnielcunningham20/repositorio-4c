const express = require('express');
const app = express();
const port = 8000;

app.get('/',(req,res) => {
    res.send('¡Servidor express funcionando en el puerto' + port + '!');
});

app.listen(port, () => {
    console.log('Servidor en funcionamiento en https:localhost:' + port);
});
