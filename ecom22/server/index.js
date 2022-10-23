const express = require("express");

const app = express();

app.get("/users", function(req, res) {
  res.json({ 
    data: "Sergio Rosa"

  });

});

app.listen(7777, function() {
  console.log("Server is running on port:  7777");
});
