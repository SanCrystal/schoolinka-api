import express from 'express';
import {
     createBlog,
     getBlogByID,
     getAllBlogs,
     updateBlogByID,
     deleteBlogByID,
     searchBlog
     } from '../controller/blogs.js';

const router = express.Router();



//create a new blog
router.post('/',createBlog);
//get all blogs
router.get('/',getAllBlogs);
//get blog post by ID
router.get('/:id',getBlogByID);
//update blog post by ID
router.patch('/:id',updateBlogByID);
//delete blog post by ID
router.delete('/:id',deleteBlogByID);

export default router;


