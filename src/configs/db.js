const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(

        "mongodb+srv://Bluefly-clone:bluefly@bluefly.0l6sm.mongodb.net/bluefly"
    )
};

module.exports = connect;