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

app.get("/api/user/:id", function (req, res){
  res.json([])
})

app.post("/api/signup", function (req, res){
  res.json([])
})

app.post("/api/login", function (req, res){
  res.json([])
})

app.get("/api/users/collaborator?pm=true&me=true&m=true&vp=true&location=<nameofpalce>”", function (req, res){
  res.json([])
})

app.post("/api/connect", function (req, res){
  res.json([])
})

app.post("/api/user/:id/connect/:connectID", function (req, res){
  res.json([])
})

app.get("/api/user/:id/connections", function (req, res){
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
