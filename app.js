const express = require('express');
port = 3000;
router = require('./router');

const app = express();

app.use(express.json());
app.use('/api/books', router);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});