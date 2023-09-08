/**
 * Controllers for Blogs summary
 * For all CRUD Related actions, regarding data manipulation on Schoolinka API.
 * These actions should be performed by authenticated and authorized users
 * Funtions in this controller include:
 * createBlog () => Create a new  Blog
 * getAllBlogs () => Get all  Blog
 * getBlogByID () => Get all  Blog by ID
 * updateBlogID  () => Update the current Blog ID
 * deleteBlogID () => Delete the current Blog ID
 */
import { settings } from "../settings/settings.js";
import { Blog, Paginate, runValidator } from "../helpers/validators.js";
const client = settings.CLIENT;
/**
 *
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle creating of a new  Blog (add a post)
 */
export const createBlog = async (req, res) => {
    try {
        //validate blog object
        const validateBlog = new Blog();
        validateBlog.userId = req.body.userId;
        validateBlog.title = req.body.title;
        validateBlog.text = req.body.text;
        validateBlog.imageUrl = req.body.imageUrl;
        const { isValid, errors } = await runValidator(validateBlog);
        if (!isValid)
            return res.status(400).json({ message: "Invalid blog request", errors });
        const blog = await client.blogPost.create({
            data: {
                text: req.body.text,
                imageUrl: req.body.imageUrl,
                title: req.body.title,
                userId: req.body.userId
            }
        });
        return res.status(200).json({ message: "Blog was created successfully", data: blog });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error " + error.message });
    }
};
/**
 *
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle fetching Blogs (get all blog posts)
 */
export const getAllBlogs = async (req, res) => {
    try {
        //validate page size
        const validateInput = new Paginate();
        validateInput.pageSize = req.body.pageSize;
        validateInput.pageNumber = req.body.pageNumber;
        const { isValid, errors } = await runValidator(validateInput);
        if (!isValid)
            return res.status(400).json({ message: "Invalid size request", errors });
        //implementation of pagination (returns eg. 4 blog posts per page,pageSize=4)
        const skip = (req.body.pageNumber - 1) * req.body.pageSize;
        const blogs = await client.blogPost.findMany({
            take: req.body.pageSize,
            skip: skip,
            orderBy: {
                createdAt: "desc"
            }
        });
        return res.status(200).json({ message: "Blogs fetched successfully", data: blogs });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error " + error.message });
    }
};
/**
 *
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle fetching Blog by ID (get a specific post)
 */
export const getBlogByID = async (req, res) => {
    try {
        const blog = await client.blogPost.findUnique({
            where: {
                id: req.params.id
            }
        });
        if (!blog)
            return res.status(404).json({ message: "No Blog Found" });
        return res.status(200).json({ message: "Blog was fetched successfully", data: blog });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error " + error.message });
    }
};
/**
 *
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle updating Blog by ID (edit a post)
 */
export const updateBlogByID = async (req, res) => {
    try {
        const blog = await client.blogPost.update({
            where: {
                id: req.params.id
            },
            data: {
                title: req.body.title,
                text: req.body.text,
                imageUrl: req.body.imageUrl,
            }
        });
        return res.status(200).json({ message: "Blog was updated successfully", data: blog });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error " + error.message });
    }
};
/**
 *
 * @param req request object from client
 * @param res response object to client
 * @returns response json object
 * @dev Function to handle deleting Blog by ID
 */
export const deleteBlogByID = async (req, res) => {
    try {
        const blog = await client.blogPost.delete({
            where: {
                id: req.params.id
            }
        });
        return res.status(200).json({ message: "Blog was deleted successfully", data: blog });
    }
    catch (error) {
        return res.status(500).json({ message: "Internal Server Error " + error.message });
    }
};
//# sourceMappingURL=blogs.js.map