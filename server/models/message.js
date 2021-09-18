import mongoose from 'mongoose';

// schema for a message in the database
const messageSchema = mongoose.Schema({
    title: String,
    message: String,
    timePosted: {
        type: Date,
        default: new Date()
    },
    author: String
})

// model in database
var Message = mongoose.model("Message", messageSchema);

export default Message;