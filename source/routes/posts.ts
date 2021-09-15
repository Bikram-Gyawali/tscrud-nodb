import express from "express";
import controller from '../controllers/posts';
let router=express.Router();

router.get("/posts",controller.getPosts);
router.get("/posts/:id",controller.getsinglePost);
router.put("/posts/:id",controller.updatePost);
router.delete("/posts/:id",controller.deletePost);
router.post("/posts",controller.newPost);

export = router;
