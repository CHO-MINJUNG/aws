const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'index.html')));

app.get('/about', (req, res)=>{
    res.send('안녕 나는 어바웃');
});


app.listen(app.get('port'), ()=>{
    console.log('익스프레스 서버 실행');
});