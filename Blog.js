const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    summary: String,
    image: String,
    blog: String,
});

module.exports = mongoose.model("Blog", blogSchema);
