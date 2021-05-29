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

  })
  res.json([])
})

app.get("/api/user/collaborator", function (req, res){
 
  console.log(req.query)
  res.json([])
})

app.get("/api/user/:id", function (req, res){
  console.log(req.params)
  //sequelize db query find by primary key
  res.json([])
})

app.post("/api/signup", function (req, res){
  console.log(req.body)
  //sequelize create for user 
  res.json([])
})

app.post("/api/login", function (req, res){
  console.log(req.body)
  //find one 
  res.json([])
})


app.post("/api/user/:id/connect/:connectID", function (req, res){
  console.log(req.params)
    //userconnection.create userid and connection id 
  res.json([])
})

app.get("/api/user/:id/connections", function (req, res){
  console.log(req.params)
  // get request --user.find all find how to include all connections 
  res.json([])
})


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});