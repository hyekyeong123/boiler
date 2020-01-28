const express = require('express');
const app = express();
const port = 3333;
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jhg097:2368wjdzxc@@hyekyeong-dnvtr.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('몽고디비가 성공적으로 연결되었습니다.'))
    .catch(err => console.log(err));
//--------------------------- 
app.get('/', (req, res) => res.send('안녕하세요.')); //루트 디렉토리
app.listen(port, () => console.log(`${port}포트에 잘 들어오셨습니다.`));