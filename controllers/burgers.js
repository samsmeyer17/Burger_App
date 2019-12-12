var express = require("express");
// invoke the Router() object from express so that we can declare our routes
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");
console.log("API ROUTES LOADED");

router.get('/', function(req, res) {
  res.json(path.join(__dirname, "public/index.html"))
});

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // burger.all() - > make a database call to retrieve all burgers
  // burger.all() takes in a callback function and passes in data so capture the table data coming back from the database
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.table(data)
    // express knows to look for index.handlers because the view engine is set to .handlebar files
    // when sending data back to a .handlebars file, we need to send it back as an object
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log("req.body", req.body)
  burger.create([
   "burger_name", "devoured"
  ], [
    req.body.name, false
  ], function(result) {
    res.json(true);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  // reference the cat id via req.params.id
  // set the condition for WHERE in sql table to delete
  var condition = "id = " + req.params.id;

  // cat.delete() takes in 2 arguments, the condition and the callback function after a successful database call
  cat.delete(condition, function(result) {
    // If nothing in the database was affected, the provided id was not found (404)
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      // status 200 -> OK 
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
