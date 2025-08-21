import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    stock: {
        type: Number,
        default: 1
    },
    image: {
        type: String
    }
}, { timestamps: true });

export const Book = mongoose.model("Book", bookSchema);
export default Book;    