const mongoose = require("mongoose");

const PostScheme = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
      
    },
    desc: {
        type: String,
        max: 200,
        required: true,
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: [],
    }
},
    { timeseries: true }
);
module.exports = mongoose.model("Post", PostScheme);