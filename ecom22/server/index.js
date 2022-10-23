import express from "express";
import dotenv from "dotenv";


dotenv.config();



// const express = require("express");log

// console.log("process =>", process);

const app = express();

app.get("/users", (req, res) => {
  res.json({ 
    data: "Sergio Rosa"

  });

});

const port = process.env.PORT || 7777;



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
