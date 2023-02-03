const path = require('path');
const express = require('express');
const cors = require('cors');
const { keyboard, Key } = require('@nut-tree/nut-js');

const app = express();

app.use(cors());
app.use(express.static('views'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/'));
})

app.post('/ileri', async (req, res) => {
    await keyboard.pressKey(Key.Right);
    await keyboard.releaseKey(Key.Right);
    console.log('ileri');
    res.status(200).send('ok');
})

app.post('/bosluk', async (req, res) => {
    await keyboard.pressKey(Key.Space);
    await keyboard.releaseKey(Key.Space);
    console.log('bosluk');
    res.status(200).send('ok');
})

app.post('/geri', async (req, res) => {
    await keyboard.pressKey(Key.Left);
    await keyboard.releaseKey(Key.Left);
    console.log('geri');
    res.status(200).send('ok');
})

app.post('/yukari', async (req, res) => {
    await keyboard.pressKey(Key.Up);
    await keyboard.releaseKey(Key.Up);
    console.log('yukarı');
    res.status(200).send('ok');
})

app.post('/asagi', async (req, res) => {
    await keyboard.pressKey(Key.Down);
    await keyboard.releaseKey(Key.Down);
    console.log('aşağı');
    res.status(200).send('ok');
})

app.listen(5070, () => console.log('5070 portu dinleniyor...'));