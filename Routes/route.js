const express = require('express');
const router = express.Router();
const AuthorController = require("../Controllers/authorControllers")
const BlogController = require("../Controllers/blogController")
const commnMid = require("../Middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!") 
})

router.post("/authors", AuthorController.createAuthor)  //1

router.post("/login", AuthorController.loginAuthor) //2

router.post("/blogs", commnMid.Authentication, BlogController.createBlog) //3

router.get('/blogs', commnMid.Authentication, BlogController.getAllBlogs)  //4

router.put("/blogs/:blogId", commnMid.Authentication, commnMid.Authorisation, BlogController.updateBlog) //5

router.delete("/blogs/:blogId", commnMid.Authentication, commnMid.Authorisation, BlogController.deleteblog)  //6

router.delete("/blogs", commnMid.Authentication, commnMid.mid3, BlogController.deleteblogByQuery)  //7
module.exports = router;