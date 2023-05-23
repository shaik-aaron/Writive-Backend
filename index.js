const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Blog = require("./Blog");
const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

mongoose.connect(
    "mongodb+srv://shaikaaron:Saymyname01@blogs.pnyyurs.mongodb.net/"
);

app.get("/", (req, res) => {
    console.log("Here");
    res.send("Hi");
});

app.post("/post", async (req, res) => {
    await Blog.create(req.body);
    res.json(req.body);
});

app.listen(4000);
