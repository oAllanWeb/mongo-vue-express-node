const express = require('express')
const mongodb = require('mongodb')

const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await loadPostCollection();
    posts.find({}).toArray(
        (err, docs) => {     
            res.send(docs);
        }
    )
})
router.post('/', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
            text: req.body.text,
            createdAt: new Date()
        })
        res.status(201).send()
})


async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect(`mongodb://${process.env.M_USER}:${process.env.M_PASSWORD}@ds151354.mlab.com:51354/${process.env.M_DB}`,
    {
        useNewUrlParser:true
    })

    return client.db('vueteste').collection('posts')

}
module.exports = router;