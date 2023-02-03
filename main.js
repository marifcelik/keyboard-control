const path = require('path');
const express = require('express');
const cors = require('cors');
const { keyboard, Key } = require('@nut-tree/nut-js');

const app = express();

async function press(key) {
    await keyboard.pressKey(key);
    await keyboard.releaseKey(key);
}

app.use(cors());
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/'));
})

app.post('/ileri', (req, res) => {
    press(Key.Right);
    console.log('ileri');
    res.status(200).send('ok');
})

app.post('/bosluk', (req, res) => {
    press(Key.Space);
    console.log('bosluk');
    res.status(200).send('ok');
})

app.post('/geri', (req, res) => {
    press(Key.Left);
    console.log('geri');
    res.status(200).send('ok');
})

app.post('/yukari', (req, res) => {
    press(Key.Up);
    console.log('yukarı');
    res.status(200).send('ok');
})

app.post('/asagi', (req, res) => {
    press(Key.Down);
    console.log('aşağı');
    res.status(200).send('ok');
})

app.listen(5070, () => console.log('5070 portu dinleniyor...'));