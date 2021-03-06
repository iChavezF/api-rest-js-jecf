const { Router } = require('express');
const cors = require('cors')
const router = Router();

router.use(cors())
const Book = require('../models/Book');

router.get('/', async (req,res) =>{
    const books = await  Book.find();
    res.json(books);
});

router.post('/', async(req,res)=>{
    const { title, author, isbn} = req.body;
    const newBook = new Book({title, author, isbn});
    await  newBook.save();
    res.json({message: 'Book Saved'});

});

router.delete('/:id', async (req,res) =>{
    const book = await Book.findByIdAndDelete(req.params.id);
    res.send({message: 'Book Deleted'});
})



module.exports = router;
