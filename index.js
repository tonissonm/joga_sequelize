const express = require("express");
const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:true}));
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');
sequelize.authenticate().then(()=>{
        console.log('Connected to the database.');
    })
    .catch(err =>{
        console.error('Unable to connect to the database: ',err);
    });

const articleRouter = require('./routes/article');
const authorRouter = require('./routes/author');
app.use('/', articleRouter);
app.use('/article',articleRouter);
app.use('admin/article',articleRouter);
app.use('/',authorRouter);

app.listen(3006, ()=> {
    console.log("Swerver is running on http://localhost:3006");
});