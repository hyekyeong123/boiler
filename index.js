const express = require('express');
const app = express();
const port = 3333;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const config = require('./config/key')
const { User } = require('./models/User');
//------------------------------------------------------------------------------- 
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('몽고디비가 성공적으로 연결되었습니다.'))
    .catch(err => console.log(err));
//--------------------------- 
app.get('/', (req, res) => res.send('안녕하세요.')); //루트 디렉토리


//회원가입할때 필요한 정보들을 클라이언트에서 가져오면 그것들을 데이터 베이스에 넣어야함
app.post('/register', (req, res) => {
    const user = new User(req.body);
    //회원가입할때 사용자 입력 정보
    
    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({success:true})
    })
    //몽고디비 내용 저장하기
    
});

app.listen(port, () => console.log(`${port}포트에 잘 들어오셨습니다.`));