const express = require("express");
const app = express();
const userRoute = require("./routes/users.js")
const authRoute = require("./routes/auth.js")
const postRoute = require("./routes/posts.js")
const mongoose = require("mongoose")
const PORT = 3000;
require("dotenv").config()


//db
mongoose
    .connect(process.env.MONGOURL)
    .then(() => {
        console.log("db connection");
    })
    .catch((err) => {
        console.log(err)
    });

//middle 
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
    res.send("hello express");
});
// app.get("/users", (req, res) => {
//     res.send("users express");
// });

app.listen(PORT, () => console.log("updated"));