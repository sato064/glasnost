const router = require("express").Router();
const Post = require("../models/Post.js");
const User = require("../models/User.js");

// router.get("/", (req, res) => { 
//     res.send("posts router");
// })

router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        return res.status(200).json(savedPost);
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.put("/:id", async (req, res) => {
    try {
        const targetPost = await Post.findById(req.params.id);
        if (targetPost.userId === req.body.userId) {
            const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                $set: req.body,               
            }
            );
            return res.status(200).json(updatedPost);
        } else {
            return res.status(500).json("you can delete your post");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const targetPost = await Post.findById(req.params.id);
        if (targetPost.userId === req.body.userId) {
            const updatedPost = await Post.findByIdAndDelete(req.params.id);
            return res.status(200).json("completed");
        } else {
            return res.status(500).json("you can delete your post");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const targetPost = await Post.findById(req.params.id);
        return res.status(200).json(targetPost);
    } catch (err) {
        return res.status(500).json(err);
    }
})
router.put("/:id/like", async (req, res) => {
    try {
        const targetPost = await Post.findById(req.params.id);
        if (!targetPost.likes.includes(req.body.userId)) {
            await targetPost.updateOne({
                $push: {
                    likes: req.body.userId
                }
            });
            return res.status(200).json("completed");
        } else {
            await targetPost.updateOne({
                $pull: {
                    likes: req.body.userId
                }
            });
            return res.status(200).json("completed");
        }
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.post("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({ userId: friendId });
            })
        );
        return res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.post("/timeline/:id", async (req, res) => {
    try {
        const targetUser = await User.findById(req.params.id);
        const userPosts = await Post.find({ userId: targetUser._id });
        return res.status(200).json(userPosts);
    } catch (err) {
        return res.status(500).json(err);
    }
})

module.exports = router;