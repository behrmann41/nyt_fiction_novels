var express = require('express');
var router = express.Router();
var unirest = require('unirest');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NY Times Hardcover Fiction Novels' });
});

router.get('/books', function(req, res) {
    unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.env.NYT_API_KEY)
      .end(function (response) {
        var books = response.body.results.books;
        console.log(books)
        res.render('books/index', { allBooks: books })
      })  
})

module.exports = router;
