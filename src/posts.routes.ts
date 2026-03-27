import { Hono } from "hono";
import { createPost, deletePostById, getAllPosts, getPostById } from "../controllers/posts.controller.js";

const posts = new Hono();

posts.get("/posts", getAllPosts);
posts.get("/posts/:id", getPostById);
posts.post("/posts", createPost);
posts.delete("/posts/:id", deletePostById);

export default posts;
