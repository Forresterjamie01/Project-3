const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require ("./models");
const sequelize = require("./config/connection");




// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/user", function (req, res){
  db.User.findAll().then(function(userData){
    console.log("userData"),
    console.log(userData)
    res.json(userData);
  })
  
});

// app.get("/api/user/collaborator", function (req, res){
 
//   console.log(req.query)
//   res.json([])
// })

app.get("/api/user/:id", function (req, res){
  console.log(req.params)
  db.User.findByPk(req.params.id)
  .then(function(data) {
    console.log(data);
  
  //sequelize db query find by primary key
  res.json(data)})
})


app.post("/api/signup", function (req, res){
  console.log("posr",req.body);

  db.User.create(req.body).then (function (response){
      console.log(response)
      res.json (response)
  }).catch(function(error) {
      throw error
  });
});

app.post("/api/login", function (req, res){
  console.log(req.body)
  //find one 
  db.User.findOne({ where: { email: req.body.email} }).then(function(userData){
    if (userData.password === req.body.password){
      res.json({login: true})
      //do we store passwords as plain text? Yes
    }else {
      res.json({login: false})
    }
  });
});


// app.post("/api/user/:id/connect/:connectID", function (req, res){
//   console.log(req.params)
//     //userconnection.create userid and connection id 
//   res.json([])
// })

app.get("/api/user/:id/connections", function (req, res){
  // get request --user.find all find how to include all connections 
  db.User.findAll().then (function (response){
    console.log(response)
    res.json (response)
}).catch(function(error) {
    throw error
})
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});