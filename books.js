const books = require('./books.json');

// get all the books
function getAllBooks(req, res){
    res.json(books);
}

// router.get('/', (req, res) => {
//     res.json(books);
// });

// get specific book
function getBookById(req, res){
    const id = req.params.id;
    return res.json(books.filter((ele) => ele.id === parseInt(id)));
}
// router.get('/:id', (req,res) => {
//     const id = req.params.id;
//     res.json(books.filter((ele) => ele.id === parseInt(id)));
// });

// add new book
async function addNewBook(req, res) {
    console.log("==========================", req.body);
    return res.json({"msg": "new book was added successfully"});
}
// router.post('/', (req, res) => {
//     console.log("==========================", req.body);
//    const data =   JSON.parse(req.body);
//    console.log(data);
//    res.json("response: ","book is added")
// });

// update a specific book

//delete a specific book

module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
};