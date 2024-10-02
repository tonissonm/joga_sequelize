const Sequelize =require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');
const models = require('../models');
const Author = require('../models/author')(sequelize,Sequelize.DataTypes);

const getAllAuthors = (req,res)=>{
    models.Author.findAll()
    .then(authors =>{
        console.log(authors)
        return res.status(200).json({authors});
    })
    .catch(error=>{
        return res.status(500).json(error.message);
    }) 
}

const getAuthorsById =(req,res) =>{
    models.Author.findOne({
        where: {
            id: req.params.id
        },
        include:[{
            model: models.Article
        }]    
    })
    .then(author =>{
        if(!author){
            return res.status(401).json({message: 'Autorit ei ole olemas.'})
        } 
        console.log(author);
        return res.status(200).json({author});
    })
    .catch(error =>{
        return res.status(500).send(error.message);
    })
};
module.exports = {
    //getAllAuthors,
    getAuthorsById
};
