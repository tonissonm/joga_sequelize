const Sequelize =require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');
const models = require('../../models');

const createArticle = (req,res) =>{
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body
    const newArticle = models.Article.create({
        name:name,
        slug:slug,
        image:image,
        body:body,
        published: new Date().toISOString().slice(0,19).replace('T',' ')
    })
    .then(article =>{
        console.log(article);
        return res.status(200).json({message: 'New article is added'});
    })
    .catch(error =>{
        return res.status(500).send(error.message);
    })
};

const updateArticle = async (req,res) =>{
    const {id} = req.params;
    if(req.method === 'GET'){
        try{
            const article = await models.Article.findByPk(id);
            if(!article){
                return res.status(404).json({ message: 'Article not found.'})
            }
            const authors = await models.Author.findAll();
            return res.status(200).json({ 
                article, 
                authors 
            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, slug, image, body, published, author_id, updatedAt } = req.body;
            const updatedArticle = await models.Article.update({
                name: name,
                slug: slug,
                image: image,
                body: body,
                published:published,
                author_id: author_id,
                updatedAt: updatedAt 
            }, {
                where: { id: id }
            });
            if (updatedArticle[0] === 0) {
                return res.status(404).json({ message: 'Article not found or no changes were made' });
            }

            return res.status(200).json({ message: 'Article updated successfully' });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

};
const deleteArticle = async (req,res) => {
    const {id} = req.params;
    try{
        const article = await models.Article.findByPk(id);
        if(!article){
            return res.status(404).sjon({message:'Article not found'});
        }
        await article.destroy();
        return res.status(200).json({message: "Article has been deleted."});
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
} 


 
module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
};