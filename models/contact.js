const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: [true, 'Please enter your name'],
        // maxLength: [50, 'Name cannot exceed 50 characters'] // Changed from 100 to 50
    },
    email: {
        type: String,
        // required: [true, 'Please enter your email'],
        // trim: true,
        // maxLength: [100, 'Email cannot exceed 100 characters'] // Changed from 'Room name' to 'Email'
    },
    phone: {
        type: Number,
        // required: [true, 'Please enter phone number'],
        // maxLength: [10, "Number cannot exceed 10 digits"],
        // minLength: [10, "Number must be 10 digits long"]
    },
    subject: {
        type: String,
        // required: [true, 'Please enter subject'],
        // maxLength: [100, 'Subject cannot exceed 100 characters']
    },
    message: {
        type: String,
        // required: [true, 'Please enter message'],
        // trim: true,
    }
}, {
    timestamps: true
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;
