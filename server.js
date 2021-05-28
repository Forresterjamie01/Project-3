const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.get("/api/user", function (req, res){
  res.json([])
})

app.get("/api/user/collaborator", function (req, res){
  console.log("Yep inside here")
  console.log(req.query)
  res.json([])
})

app.get("/api/user/:id", function (req, res){
  console.log(req.params)
  res.json([])
})

app.post("/api/signup", function (req, res){
  console.log(req.body)
  res.json([])
})

app.post("/api/login", function (req, res){
  console.log(req.body)
  res.json([])
})



app.post("/api/connect", function (req, res){
  console.log(req.body)
  res.json([])
})

app.post("/api/user/:id/connect/:connectID", function (req, res){
  console.log(req.params)
  res.json([])
})

app.get("/api/user/:id/connections", function (req, res){
  console.log(req.params)
  res.json([])
})


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});