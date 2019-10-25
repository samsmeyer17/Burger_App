// import mySQL connection
var connection = require("../config/connection.js")

// a function that loops through and creates an array of question marks so we can create a mySQL query
function qMarks(num) {
  // the array the questions marks will be pushed into
  var qMarkArray = [];

  // for loop that iterates around the num input and pushes a question mark into the "qMarkArray" array
  for (let i = 0; i < num; i++) {
    qMarkArray.push("?");
  }

  // converts the qMarkArray into a string of question marks instead of an array
  return qMarkArray.toString();
}
// a function that converts object key/value pairs to SQL syntax
function objectToSQL(obj) {
  // an array to hold the converted key value pairs
  var keyValueArray = [];

  // for loop looping through every key and push the key/value as a string into the housing array
  for (var key in obj) {

    // an if statement checking for hidden properties
    if (Object.hasOwnProperty.call(obj, key)) {
      // if there is a string with spaces in it, add quotes to the string
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        // setting the value equal to the original value with quotes on either side
        value = "" + value + "";
      }
      // pushing the converted key value pair into the housing array
      keyValueArray.push(key + "=" + value);
    }
  }
  // converts housing array into a string instead of an array
  return keyValueArray.toString()

}

// creating the object for all of the SQL statement functions
var orm = {
  all: function(tableInput, cb) {
    var queryString
  }
}




module.exports = orm;
