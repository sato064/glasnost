const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => { 
    res.send("auth router");
})

//register
router.post("/register", async (req, res) => {
    let hashed_password = bcrypt.hashSync(req.body.password, 10);
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashed_password,
        });
        const user = await newUser.save();
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json(err);
    }
})

//login
router.post("/login", async (req, res) => { 
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("user not found");
    
    const vailedPassword = bcrypt.compareSync(req.body.password, user.password);
    if (!vailedPassword) return res.status(400).json("password not collect");
    return res.status(200).json(user);
})

module.exports = router;