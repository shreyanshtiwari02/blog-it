const express = require("express");

const app = express();
const mongoose = require("mongoose");
const path = require("path");
const PORT = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/blogify")
  .then((e) => console.log("MongoDB Connected"));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.get('/',(req,res)=>{


    return res.json({
        name : "shrey"
    });
})
app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));

