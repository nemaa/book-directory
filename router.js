const express = require('express');
const router = express.Router();
const books = require('./books');

router.get('/', (req, res) => {
    books.getAllBooks(req,res);
});
router.get('/:id', (req,res) => {
    books.getBookById(req,res);
});
router.post('/', async(req,res) =>{
    await(5000);
    books.addNewBook(req,res);
});
// router.put('/:id', books.updateBookById(req,res));
// router.delete('/:id', books.deleteBookById(req,res));

module.exports = router;