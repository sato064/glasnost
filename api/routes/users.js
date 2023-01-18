const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => { 
    res.send("user router");
})
//update
router.put("/:id", async (req, res) => { 
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        let hashed_password = bcrypt.hashSync(req.body.password, 10);
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
                password: hashed_password,
            }
            );
            return res.status(200).json("completed");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(403).json("authentifivcation error");
    }
})
//delete
router.delete("/:id", async (req, res) => { 
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            return res.status(200).json("completed");
        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json("authentifivcation error");
    }
})
//get
router.get("/:id", async (req, res) => { 
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...other } = user._doc;
        return res.status(200).json(other);
    } catch (err) {
        return res.status(500).json(err)
    }
})
//follow
router.put("/:id/follow", async (req, res) => { 
    if (req.body.userId !== req.params.id) {
        try {
            const targetUser = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (!targetUser.followers.includes(req.body.userId)) {
                await targetUser.updateOne({
                    $push: {
                        followers: req.body.userId
                    }
                })
                await currentUser.updateOne({
                    $push: {
                        followings: req.params.id
                    }
                })

            } else {
                return res.status(500).json("you cannot following twice");
            }
            return res.status(200).json("completed");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(500).json("you cannot follow yourself");
    }
    
})
//unfollow
router.put("/:id/unfollow", async (req, res) => { 
    if (req.body.userId !== req.params.id) {
        try {
            const targetUser = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (targetUser.followers.includes(req.body.userId)) {
                await targetUser.updateOne({
                    $pull: {
                        followers: req.body.userId
                    }
                })
                await currentUser.updateOne({
                    $pull: {
                        followings: req.params.id
                    }
                })

            } else {
                return res.status(500).json("you cannot unfollowing");
            }
            return res.status(200).json("completed");
        } catch (err) {
            return res.status(500).json(err);
        }
    } else {
        return res.status(500).json("you cannot unfollow yourself");
    }
    
})



module.exports = router;