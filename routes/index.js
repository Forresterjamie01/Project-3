const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get("/api/books", function (req, res) {
    //database querry to get all saved books as json
    db.find().then (function (response){
        console.log(response)
        res.json (response)
    }).catch(function(error) {
        throw error
    })
  });
  
  router.post("/api/books", function (req, res) {
    // database querry to create a new book where saved = true
    console.log("posr",req.body)

    db.create(req.body).then (function (response){
        console.log(response)
        res.json (response)
    }).catch(function(error) {
        throw error
    })
  });
  
  router.delete("/api/books/:id", function (req, res) {
    // database querry to delete a book where id = req.params.id
    res.json([])
  });
  
  router.get("/api/google", function (req, res) {
    // use axios to make a querry to google api endpoint for a specific book
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.query.book).then(function(data){
      res.json(data.data.items)
    })
    console.log("req.query",req.query);
    //res.json([])
  });
  // Send every other request to the React app
  // Define any API routes before this runs
  router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  });




module.exports = router;
